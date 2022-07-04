

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
  
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    
      var tooltip =  new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"}) 
      return tooltip })
