export const LoginPopup = () =>

{
    
    const blabla = 'dfbgfd'

return(


    <div class="me-2">
    <button type="button" class="btn btn-block btn-default mb-3" data-bs-toggle="modal" data-bs-target="#modal-form">
    Form
    </button>
    <div class="modal fade" id="modal-form" tabindex="-1" aria-labelledby="modal-form" style={{display: "none"}} aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
    <div class="modal-content">
    <div class="modal-body p-0">
    
          <div class="card overflow-hidden mb-5">
            <div class="row">
              <div class="col-lg-7">
                <form class="p-3" id="contact-form" method="post">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2>Say Hi!</h2>
                    <p class="lead"> We'd like to talk with you.</p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <label>My name is</label>
                        <input class="form-control" placeholder="Full Name" type="text"/>
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label>I'm looking for</label>
                        <input class="form-control" placeholder="What you love" type="text"/>
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <div class="form-group mb-0">
                          <label>Your message</label>
                          <textarea name="message" class="form-control" id="message" rows="6" placeholder="I want to say that..." style={{height: "69px"}}></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 text-right ms-auto">
                        <button type="submit" class="btn btn-round bg-gradient-info mb-0">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-5 position-relative bg-cover px-0" style={{backgroundImage: "/img/curved-images/curved5.jpg"}}>
                <div class="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
                  <img src="/img/wave-1.svg" class="h-100 ms-n2" alt="vertical-wave"/>
                </div>
                <div class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div class="mask bg-gradient-info opacity-9"></div>
                  <div class="p-5 ps-sm-8 position-relative text-left my-auto z-index-2">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-phone text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">(+40) 772 100 200</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">hello@creative-tim.com</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-map-marker-alt text-sm" aria-hidden="true"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">Dyonisie Wolf Bucharest, RO 010458</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook" data-bs-original-title="" title="">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter" data-bs-original-title="" title="">
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble" data-bs-original-title="" title="">
                        <i class="fab fa-dribbble" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram" data-bs-original-title="" title="">
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  </div>
  </div>
  </div>
  </div>


)





}


