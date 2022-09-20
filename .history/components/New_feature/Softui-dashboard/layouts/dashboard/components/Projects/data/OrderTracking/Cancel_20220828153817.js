import ClipLoader from "react-spinners/ClipLoader";

export const Sell = ({loading, e, CancelOrder}) => (

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
        {e.cancel ? 
        <h3 className="font-weight-bolder text-info text-gradient text-center">
    Commande completée !
    </h3>
    :
          <h6 class="modal-title" id="confirmationLabel">Veuillez renseigner le motif de l'annulation de la commande</h6>}
          
  
        </div>
        <div class="modal-body">
  
    
    <div class="row justify-content-center">
    {e.cancel ?
      <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
    Ok
    </button>
      :
      <>
      <div class="form-check mb-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio1"/>
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="customRadio2"/>
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>
      
        <button type="button" class="btn bg-gradient-info col-5 p-2 m-2" data-bs-dismiss="modal" data-target="#confirmation">Retour</button>
        <button type="button" class="btn bg-gradient-danger col-5 p-2 m-2" onClick={CancelOrder}>Annuler et </button>
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