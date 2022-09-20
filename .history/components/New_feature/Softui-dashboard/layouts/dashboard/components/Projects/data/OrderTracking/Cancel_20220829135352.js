import ClipLoader from "react-spinners/ClipLoader";
import {useState} from "react"

export const Cancel = ({loading, e, CancelOrder, CanceledWhyHook, setCanceledWhyHook}) => {
  
  const compliant = ((CanceledWhyHook.canceledWhy != '') && (CanceledWhyHook.canceledWhy != "Autre")) || ((CanceledWhyHook.canceledWhy = "Autre") && (CanceledWhyHook.textAera != ""))
  
  return(

    <div class="modal fade" id="cancel" tabindex="-1" role="dialog" aria-labelledby="confirmationLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-l" role="document">
      <div class="modal-content">
        {loading ?
          <div class="modal-header justify-content-center">
          <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
          </div>
          :
        <>
      <div class="modal-header justify-content-center">
        {e.canceled ? 
        <h3 className="font-weight-bolder text-info text-gradient text-center">
    Commande annulée !
    </h3>
    :
          <h6 class="modal-title" id="confirmationLabel">Pour quel motif voulez-vous annuler la commande ?</h6>}
          
  
        </div>
        <div class="modal-body">
  
    
    <div class="row justify-content-center">
    {e.canceled ?
      <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
    Ok
    </button>
      :
      <>
      <label>Choisir un motif</label>
  <select onChange={(e)=> setCanceledWhyHook({
      ...CanceledWhyHook,
      canceledWhy: e.target.value,
    })}
    className={CanceledWhyHook.canceledWhy != '' ? "form-control is-valid" : "form-control is-invalid"} name="choices-button-canceledWhy" id="choices-button-canceledWhy" placeholder="canceledWhy">
  <option value="" className="text-bold" >--Choisir une motif--</option>
  {Reasons.map((r)=> <option value={r} selected={r == CanceledWhyHook.canceledWhy ? true : false} >{r}</option>)}

</select>
{CanceledWhyHook.canceledWhy === "Autre" ? 
<div class="form-group">
    <textarea 
    
    class="form-control" id="exampleFormControlTextarea1" rows="3"
    onChange={(e) =>
      setCanceledWhyHook({
        ...CanceledWhyHook,
        textAera: e.target.value ,
      })
    }
    value={CanceledWhyHook.textAera}
    
    
    />
    
    
  </div>
  :null
}

      
        <button type="button" class="btn bg-gradient-info col-5 p-2 m-2" data-bs-dismiss="modal" data-target="#confirmation">Retour</button>
        <button type="button" disabled={!compliant} class="btn bg-gradient-danger col-5 p-2 m-2" onClick={()=> CancelOrder()}>Confirmer</button>
        </>
      }
        </div>
        
  
        </div>
  </>
        
        }
      </div>
    </div>
  </div>
)}

const Reasons = 
["Je n'ai plus ce produit en stock", 
"Je ne veux plus vendre ce produit",
"Le client ne répond pas au téléphone",
"Les informations de la commande sont erronées",
"Le client ne veut plus acheter le produit",
"Autre: "]