import ClipLoader from "react-spinners/ClipLoader";

export const Accept = ({loading, e, AcceptOrder}) => (

    <div class="modal fade" id="accept" tabindex="-1" role="dialog" aria-labelledby="confirmationLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        {loading ?
          <div class="modal-header justify-content-center">
          <ClipLoader  color={"#17c1e8"} loading={true} size={50}/>
          </div>
          :
        <>
      <div class="modal-header justify-content-center">
        {e.accepted ? 
        <h3 className="font-weight-bolder text-info text-gradient text-center">
    Commande acceptée !
    </h3>
    :
          <h6 class="modal-title" id="confirmationLabel">Accepter la commande ?</h6>}
          
  
        </div>
        <div class="modal-body">
  
    
    <div class="row justify-content-center">
    {e.accepted ?
      <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
    Ok
    </button>
      :
      <>
      <p>Remarque: n'acceptez que les commandes que vous pensez pouvoir compléter. Vérifiez </p>
        <button type="button" class="btn bg-gradient-danger col-5 p-2 m-2" data-bs-dismiss="modal" data-target="#confirmation">Retour</button>
        <button type="button" class="btn bg-gradient-info col-5 p-2 m-2" onClick={AcceptOrder}>Confirmer</button>
        </>
      }
        </div>
        
  
        </div>
  </>
        
        }
      </div>
    </div>
  </div>
)