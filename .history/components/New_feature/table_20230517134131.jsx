import Ligne from './ligne'
import { withSearchkit, SearchkitProvider, SearchkitClient, withSearchkitRouting, useSearchkit, useSearchkitVariables, useSearchkitQueryValue, PaginationLink } from '@searchkit/client'
import dynamic from 'next/dynamic'
import { LoginPopup } from './Login/LoginPopup'
import { SignInPopup } from './Login/SignInPopup'
import useToggle from '../useful/toggle.jsx';
import firebase from './../firebase/firebase/clientApp'
import React, { useEffect , useContext, useState, useRef} from 'react'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/router'
import { ligneCount } from '../../lib/Options'
import { useDownloadExcel } from 'react-export-table-to-excel';
import { PdfContext, ExcelTable } from '../UserContext.js';
import { downloadExcel } from "react-export-table-to-excel";
import useToggle4 from '../useful/toggle.jsx';
import { Markup } from 'interweave';
import {useToggle2} from '../useful/toggle.jsx';
import { Bar } from 'react-chartjs-2';
import { read, writeFileXLSX, set_cptable, utils, readFile } from "xlsx"
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { create } from 'domain'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Table = () => {

const { user, login, signup } = useAuth()
const [isAuthorized, setAuthorization] = useState(false);
const [SearchState, setSearchState] = useState(null);
const [excelData, setExcelData] = useState([]);
const [triggerExtract, setTriggerExtract] = useState(1)
const [isOn2, toggleIsOn2] = useToggle2();
const [isOn4, toggleIsOn4] = useToggle4();
const [isSelected, setSelect] = useState({row : null, col: null})
const [data1, setData] = useState({data: null, query: null, date: null})
const [exportExcelToBDD, setExportExcelToBDD] = useState(null)
const [familly, setFamilly] = useState(null)
const [queryType, setQueryType] = useState(null)

const CheckIfSorted = data1?.data?.results?.hits.sortedBy
const lesDescriptions =  data1?.data?.description?.hits?.items?.slice(0,1).map(
  (hit)=>

  ({a: hit?.fields.description1, b: hit?.fields.brand_name, c: hit?.fields.description2, d: hit?.fields.prod_description,
    e: hit?.fields.prod_specs_big_title, f: hit?.fields.total, g: hit?.fields.product_names})
  

  )

  const description1 = lesDescriptions != undefined ? lesDescriptions['0']?.a : ""
  const brand_name = lesDescriptions != undefined ? lesDescriptions['0']?.b  : ""
  const description2 = lesDescriptions != undefined ? lesDescriptions['0']?.c : ""
  const prod_description = lesDescriptions != undefined ? lesDescriptions['0']?.d : ""
  const prod_specs_big_title = lesDescriptions != undefined ? lesDescriptions['0']?.e : ""
  const total = lesDescriptions != undefined ? lesDescriptions['0']?.f : ""
  const names_bdd = lesDescriptions != undefined ? lesDescriptions['0']?.g : ""
//const element = Array(50).fill(<th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Produits</th>)
//const elements = Array(5).fill(<SearchkitProvider client={new SearchkitClient()}><Ligne/></SearchkitProvider>)
//Update prisma DB

useEffect(()=>{

  if (exportExcelToBDD) {
    
    try{
      fetch(`/api/veille/createmany`,{
        body: JSON.stringify(exportExcelToBDD),
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(x => console.log(x));
    } catch (error) {
      throw new Error(console.log(error)); 
    }

  }
}, [exportExcelToBDD])


  


// Import Excel

  function handleFile(e) {
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {

      var workbook = readFile(e.target.result);
      const output = Object.values(workbook.Sheets)[0]
      delete output['!margins']
      delete output['!ref']

      const groupedData = Object.entries(output).reduce((acc, [key, obj]) => {
        const groupKey = key.replace(/\D/g,'');
        if (!acc[groupKey]) {
          acc[groupKey] = [];
        }
        const objet = {}
        objet[key.replace(/[0-9]/g, "").replace('A', 'name').replace('B', 'name2').replace('C', 'famille')] = obj.v.trim();
        acc[groupKey].push(objet);

        return acc;
        
      }, {});
      
      const groupedDataFinal = Object.values(groupedData).map((e)=> Object.assign({}, ...e))

      for (let i = 0; i < groupedDataFinal.length; i++) {
        groupedDataFinal[i] = {
          id: i,
          ...groupedDataFinal[i]
        };
      }
      
      //setExportExcelToBDD(groupedDataFinal[0]);
      setExportExcelToBDD(groupedDataFinal);
      setSearchState({...SearchState, groupedDataFinal: groupedDataFinal})
   
      
      


    };
    if (file) {reader.readAsArrayBuffer(file)}
    
  }

// Export Excel

const header = ["Produits", "Boutique 1", "Boutique 2"];
  const body = [
    ["Ryzen 5600X", "Fractal", "WakComputer"],
    ["Prix", 25000, 52000],
    ["RXT 3090", "Lahlou Industry", "WakComputer"],
    ["Prix", 325000, 352000],
  ];


function handleDownloadExcel(excelData) {
  const sortedData = 
  excelData.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  })

  //const sortedDataPop = sortedData?.forEach(array => array.shift())
 
  downloadExcel({
    fileName: "Veille Tarifaire",
    sheet: "Onglet 1",
    tablePayload: {
      header,
      // accept two different data structures
      body: sortedData,
    },
  });
}


//const hasAccess = user ? autorisation ?

useEffect(()=> {
  const fetchData = async () => {
     if(user)
// Est-ce que cet utilisateur a le droit de voir ce contenu
   {fetch(`/api/autorisation?searchString=${user?.email}`, {
     headers : { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      }}).then((res) => res.json() )
   .then((data) => {
     setAuthorization(data[0].test)
     setSearchState(data[0])
   })
   }
  
   // Si autorisation, télécharger le resumé de la data
 }

 fetchData().catch((err)=> console.log(err),setAuthorization(false))

}, [user])

useEffect(()=> {
  if (isAuthorized)
   {
    try{
      fetch(`/api/veille/findmany`,{

        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }).then((res) => res.json() ).then((data) => setSearchState({...SearchState, groupedDataFinal: data, filteredGroupedDataFinal: data}))
      
    } catch (error) {
      throw new Error(error); 
    }
   }
}, [isAuthorized])

const isBrowser = typeof window !== `undefined`
const row_number = SearchState?.row > 0 ? SearchState.row : 5
const s = isBrowser ? window.location.href : ''

      const s1 = s?.replace('//', '')
      const s2 = s1?.split('/')[1];
      const s3 = s2?.split('&')[0];
//const [isOn, toggleIsOn] = new useToggle();

const elements = SearchState?.filteredGroupedDataFinal?.filter((f)=>f.famille === familly)
                                                       .filter((f)=> queryType ==="Désignation 1" ? f.name : f.name2)
                                                       .map((item, a) => 
<SearchkitProvider key={a+1} client={new SearchkitClient()}>
  <Ligne id={a+1} SearchState={SearchState} 
                  queryType = {queryType}
                  setSearchState={setSearchState}
                  item={item}
                  setExcelData= {setExcelData}
                  excelData= {excelData}
                  isSelected = {isSelected}
                  setSelect = {setSelect}
                  setData= {setData}
                  data1={data1}
                  />
</SearchkitProvider>)

const listOfFamilly =[...new Set(SearchState?.groupedDataFinal?.map((obj)=> obj.famille))]

// Default Category
// A regler
useEffect(()=> {
 
  setSearchState({...SearchState, filteredGroupedDataFinal: SearchState?.groupedDataFinal?.filter((obj)=> obj.famille === listOfFamilly[0])})
  setFamilly(listOfFamilly[0])
}, [])

console.log(SearchState)

return(
  
  <div className="card" id="results-position-ligne">
  {SearchState?.groupedDataFinal?
  <>


 <div className="col-lg-9 z-index-1 border-radius-xl mx-auto py-1 blur shadow-blur">
 <div className="row">
 <div className="col-md-4 position-relative">
 <div className="p-1 text-center">
 <h6 className="mt-1">Dernière Mise a Jour : <bold style={{color: "green"}}>{data1?.date}</bold></h6>
 </div>
 <hr className="vertical dark"/>
 </div>
 <div className="col-md-4 position-relative">
 <div className="p-1 text-center">
 <h6 className="mt-1" >Abonnement fin : <bold style={{color: "green"}}>{SearchState?.subscritions}</bold></h6>
 </div>
 <hr className="vertical dark"/>
 </div>
 <div className="col-md-4">
 <div className="testrow p-1 text-center justify-content-center">
 <label for="file-upload" className="btn btn-sm  bg-gradient-success btn-round mb-0 mx-2 mt-2 mt-md-0 px-3">
    Importer
</label>
 <input id="file-upload" type="file" onChange={handleFile} onClick={(e) => e.target.value = null} style={{display: "none"}}/>
<button className="btn btn-sm  bg-gradient-success btn-round mb-0 mx-2 mt-2 mt-md-0 px-3" onClick={() => {handleDownloadExcel(excelData)}}>Exporter</button>
 
 </div>
 </div>
 </div>
 </div>
 <div className="row searchbar_ligne ms-1">
 <div className="col-6">
  <label>Type de Recherche</label>
  <select onChange={(e)=> setQueryType(e.target.value)}
 
    className={queryType ? "form-control is-valid " : "form-control"} name="choices-button-city" id="choices-button-city" placeholder="Type de Recherche">
  <option value="" className="text-bold" >--Type de Recherche--</option>
  
  <option 
  onClick={()=> setQueryType("Désignation 1")}
  key="Désignation 1"
  value="Désignation 1"
  selected={queryType == "Désignation 1" ? true : false} >Nom Complet
  </option>
  <option 
  onClick={()=> setQueryType("Désignation 2")}
  key="Désignation 2"
  value="Désignation 2"
  selected={queryType == "Désignation 2" ? true : false} >Mots clés
  </option>
  )
</select>
</div>
 <div className="col-6">
  <label>Catégories</label>
  <select onChange={(e)=> setFamilly(e.target.value)}
 
    className={familly ? "form-control is-valid " : "form-control"} name="choices-button-city" id="choices-button-city" placeholder="Famille">
  <option value="" className="text-bold" >--Choisir une Catégorie--</option>
  {listOfFamilly.map((famille)=> 
  <option 
  onClick={()=> setSearchState({...SearchState, filteredGroupedDataFinal: SearchState?.groupedDataFinal?.filter((obj)=> obj.famille === famille)})}
  key={famille} 
  value={famille} 
  selected={famille == familly ? true : false} >{famille}
  </option>)}

</select>
</div>
</div>

<div className="row">
  <div className="col-lg-9 table-responsive table_height table_width">
   
    <table className="table align-items-center mb-0 " >
      
      <tbody>
        
      {elements}

      </tbody>
    </table>
  </div>


  <div className="col-lg-3  mb-0 p-0" >

{data1?.data?.results?.hits?.items.slice(isSelected?.col,isSelected?.col+1).map((hit)=>

// Product Description
  {

    const product_names = hit.fields.product_names
    const product_links = hit.fields.product_links
    const product_imagelinks = hit.fields.product_imagelinks

    const product_prices = hit.fields.product_prices
    const urlLength = s1?.split('/').length
    const titleShortUrl= s3?.replaceAll('-', ' ').replaceAll('%20', ' ')
    const titleLongUrl = data1.query== "" ? product_names : (names_bdd ? names_bdd : product_names)
    
    const options = {
      
      
      aspectRatio: 1.4,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: product_names,
        },
      },
    };
    
    
    const labels = data1?.data?.results?.hits?.items.map((hit)=> hit.fields.vendeurs)
    function replaceAt(array, index, value) {
      const ret = array.slice(0);
      ret[index] = value;
      return ret;
    }
    
    const data_chart = {
      labels,
      datasets: [
    
        {
          label: 'Prix',
          data: data1?.data?.results?.hits?.items.map((hit)=> hit.fields.product_prices),
          backgroundColor: replaceAt(Array(data1?.data?.results?.hits?.items.length).fill('rgba(53, 162, 235, 0.5)'), isSelected.col, "rgba(255, 159, 64,0.5)"),

        },
      ],
    };
    return(

  <section id="fiche-produit" style={{height:'100%'}}>
  
  <div className="px-sm-0" style={{height:'100%'}}>
    <div className="row align-items-center" style={{height:'100%'}}>
      <div className="col-lg-12 mt-2 " style={{height:'100%'}}>    
      <div className="card card-blog card-plain" style={{height:'100%'}}>
                <div className="position-relative">
               
                <a className="text-center" 
                href={product_links} 
                target="_blank" rel="noreferrer">
                
                    <h1 className="title-fontsize-h1_ligne " style={{borderBottom: '1px solid #000',
                    paddingBottom: '7px'}}>
                    
                    {product_names}
                    
                    
                    </h1>
                    
                    

                    <p>
                    <small >
                  {!names_bdd ? "" : description1}  <img src="/img/custom/info.svg" title="" data-bs-original-title="Beta : la description peut ne pas correspondre a la recherche dans certains cas."   data-bs-toggle="tooltip" data-bs-placement="right"/></small></p>
                  </a>
                  <a className="row justify-content-center blur-shadow-image">
                    <img src={product_imagelinks} alt={product_names} className="img-fluid shadow border-radius-lg w-25" style={{objectFit: "cover", aspectRatio: "1 / 1"}}/>
                  </a>
                <div className="colored-shadow" id="card-url"></div></div>
                <div className="card-body px-1 pt-3 pb-0">
              
                  <div className="testrow justify-content-center">
                  <button className="btn bg-gradient-info btn-lg col-6 py-2 px-1 mx-1" disabled={isOn4 ? false : true} onClick={toggleIsOn2} >{isOn2 ? 'Description' : 'Spécifications'}</button>
                  <button onClick={()=> toggleIsOn4()} type="button" className="btn bg-gradient-info btn-lg col-6 py-2 px-1 mx-1">Afficher le Graphe</button>
                   </div>
                  
                   {isOn4 ? 
                  
                  data1?.data?.description?.summary.query == "" ? undefined :
                (<div style={{textAlign: 'justify', textJustify: 'inter-word', visibility: 'visible'}} className="description-custom">
                 {isOn2 === false ? <>
                  <p className="small mb-0"  >
                 
                <Markup content={prod_description?.replace("<h2>", "<h2 className='title-fontsize-h2'>").replace("<h3>", "<h3 className='title-fontsize-h2'>")} />
                
                 </p>
                 <p style={{visibility: 'hidden'}}>{total}</p></> 
                 :

                 <p className="small mb-0" style={{whiteSpace: 'pre-wrap'}}>
                 {total}
                 </p>
                }
                 
                 </div>) : <Bar options={options} data={data_chart} />
                  }
                   
                    



                 
                  </div>
              </div>  
      </div>
    </div>
  </div>
  <br/>
  
</section>

 )
})}
 </div>
 </div>


  </>

: 

user ? 

<div className="container mb-5">
<div className="justify-content-center text-center mb-5">

<a href="/downloads/Offres-Commerciales-Comparatifdz-FR.pdf" target="_blank" rel="noreferrer"><button type="button" className="btn btn-block btn-info mb-1" data-animation="true">S'abonner maintenant</button></a>


    <div className="row">
  <div className="col-md-12 mx-auto">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>

      </div>
      <div className="carousel-inner border-radius-sm">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/1.png" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/2.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/3.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/4.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/5.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/6.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/7.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/img/Offres-commerciales/fr/8.png" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
  </div>


</div>


:

<div className="container mb-5">
<div className="justify-content-center text-center mb-5">

<h1 className="mt-5 mb-3">Veuillez vous connecter</h1>
<br/><br/>
<button type="button" className="btn btn-block btn-info m-3 " data-bs-toggle="modal" data-bs-target="#modal-form-signin">
    Créer un compte
    </button>
<p className="m-3">Ou</p>


<button type="button" className="btn btn-block btn-info mt-3 mb-5" data-bs-toggle="modal" data-bs-target="#modal-form-login">
  Se connecter
  </button>

</div>
</div>}
</div>

)}

