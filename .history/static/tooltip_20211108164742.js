
const isBrowser = typeof window !== `undefined`
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
  
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    
      var tooltip = isBrowser ? new bootstrap.Tooltip(tooltipTriggerEl, {trigger: "hover"}) : ''
      return tooltip )}
