import React from 'react'


export const Maj = ({data}) => (

  <div className="container">
  <div className="row justify-content-center text-center">
  
    <h6 className="small">Dernière mise a jour : 10/11/2021</h6>
    
    </div>
    </div>
)}

export const Footer = () => (


  <footer className="bg-dark text-center text-white">

  <div className="container p-4 pb-0">

    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Comparatifdz" role="button"
        ><i className="fab fa-facebook-f"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/comparatifdz/" role="button"
        ><i className="fab fa-instagram"></i></a>
    </section>

  </div>



  <div className="text-center p-3" >

    <a className="text-white" href="https://comparatifdz.com/"><strong>Comparatifdz</strong></a>
  </div>

</footer>
)




export const Header = () => (


  <header>

  <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Heading</h1>
    <h4 className="mb-3">Subheading</h4>
    <a className="btn btn-primary" href="" role="button">Call to action</a>
  </div>

</header>
)

export const Apropos = () => {


return (
  <>
                  
  <button id="btn-fontsize" type="button" className="btn bg-gradient-info mb-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Infos</button>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" id="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h6 className="modal-title" id="exampleModalLabel">Le comparateur de prix qu'il manquait a l'Algérie..</h6>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body text-left infos-modal" >
<p className= "small">Le but de ce site est de vous aider a trouver le prix <strong className="text-secondary">le moins cher et gagner du temps !</strong></p>
              
          <h6>Pour les consommateurs :</h6>
        <p className= "small">1- Vous faire gagner du temps car le site regroupera a terme énormement d'articles donc vous pourrez<br/> 
        comparer les prix donc plus besoin de chercher tout les magasins pour trouver le moins cher.<br/>
         2- Vous faire économiser de l'argent en trouvant l'article qui vous convient au prix le moins cher. </p>

         <h6>Pour les boutiques :</h6>
        <p className= "small">1- Avoir plus de visibilité car notre site référence vos articles et redirige vers votre boutiques. <br/>
         2- Possibilité d'avoir une vue d'ensemble sur les prix du marché. </p>

        <p className= "small"> Enfin, cette initiative a pour but d'aider a la fois les consommateurs et les vendeurs. 
            En apportant plus de <br/>transparence et de clarté des deux côtés le marché ne peut que mieux se porter 
            et tout le monde y trouve son compte ! </p>



            <h6 className="text-success"> Et c'est totalement gratuit ! </h6>



        
            <p className= "small"> Idées, suggestions, remarques, feedback négatif, bugs... <br/>
            Tout est bon pour nous aider a nous améliorer : <strong>comparatif.algerie@gmail.com</strong> <br/>
            Aussi, n'hésitez pas a nous contacter si vous souhaitez rejoindre l'équipe !</p>



            <h6 className="text-danger"> Remarques: </h6> 
            <p className= "small">1- Ce site ne vend et n'achete aucun article.<br/>
            2- Nous utilisons des informations publiques et disponibles pour tout le monde sur les siteweb des marchands.<br/> 
            Nous nous contentons de les regrouper pour informer les consommateurs<br/>
            3- Nous garantissons notre impartialité et bonne foi, le comparatif de prix est <strong className="text-warning">COMPLETEMENT NEUTRE.</strong><br/>
            4- Nous faisons notre maximum pour garder le site a jour et fournir une information <strong className="text-success">FIABLE</strong> a tout le monde.<br/>
            5- Si le prix d'un marchand ne correspond pas a celui affiché sur notre site veuillez nous le signaler ici : <a href={"mailto:comparatif.algerie@gmail.com?subject = Feedback = Message"}><strong>comparatif.algerie@gmail.com</strong></a><br/>
            6- Ce site est en version bêta donc il est possibile que vous rencontriez certains <strong className="text-danger">bugs</strong>.<br/>
            7- Ce site utilise le nom des marques et le logo des marques dans le seul but d'informer conformément a ce qu'autorise la loi (<a className="law" href='https://www.droit-afrique.com/upload/doc/algerie/Algerie-Ordonnance-2003-06-marques.pdf' target="_blank" rel="noreferrer">Voir article</a>).
            </p>
            </div>
<div className="modal-footer justify-content-end">

<button type="button" className="btn bg-gradient-info" data-bs-dismiss="modal">J'ai compris</button>
</div>
</div>
</div>
</div>

</>
)


}


