export default const test = () => {
    return (
        <div class="nav-wrapper position-relative end-0">
       <ul class="nav nav-pills nav-fill p-1" role="tablist">
          <li class="nav-item">
             <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-simple" role="tab" aria-controls="profile" aria-selected="true">
             My Profile
             </a>
          </li>
          <li class="nav-item">
             <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#dashboard-tabs-simple" role="tab" aria-controls="dashboard" aria-selected="false">
             Dashboard
             </a>
          </li>
        </ul>
    </div>
    )
    }