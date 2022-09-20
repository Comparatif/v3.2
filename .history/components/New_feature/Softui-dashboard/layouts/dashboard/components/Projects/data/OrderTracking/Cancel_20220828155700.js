import ClipLoader from "react-spinners/ClipLoader";
import {useState}
export const Cancel = ({loading, e, CancelOrder}) => {
  
  
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
        {e.cancel ? 
        <h3 className="font-weight-bolder text-info text-gradient text-center">
    Commande completée !
    </h3>
    :
          <h6 class="modal-title" id="confirmationLabel">Pour quel motif voulez-vous annuler la commande ?</h6>}
          
  
        </div>
        <div class="modal-body">
  
    
    <div class="row justify-content-center">
    {e.cancel ?
      <button data-bs-dismiss="modal" className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
    Ok
    </button>
      :
      <>
      <label>Choisir un motif</label>
  <select onChange={()=> setData({
      ...data,
      city: e.target.value,
    })}
    className={isCityCompliant ? "form-control is-valid" : isOrderTrigger && !isCityCompliant ? "form-control is-invalid" : "form-control"} name="choices-button-city" id="choices-button-city" placeholder="Wilaya">
  <option value="" className="text-bold" >--Choisir une wilaya--</option>
  {Wilaya.map((wilaya)=> <option value={wilaya} selected={wilaya == data.city ? true : false} >{wilaya}</option>)}

</select>
<div class="form-group">

    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      
        <button type="button" class="btn bg-gradient-info col-5 p-2 m-2" data-bs-dismiss="modal" data-target="#confirmation">Retour</button>
        <button type="button" class="btn bg-gradient-danger col-5 p-2 m-2" onClick={CancelOrder}>Confirmer</button>
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