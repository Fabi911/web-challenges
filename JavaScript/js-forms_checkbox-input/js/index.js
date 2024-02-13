console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]')




function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.tos.checked)
 

if(event.target.tos.checked){
  alert("Form submitted");
  showSuccess();
}else {
  alert("Form submitted");
  hideSuccess();
}



});

tosCheckbox.addEventListener("input", (event) => {
  //console.log(checkboxChecked)
  
  if(event.target.checked){
  hideTosError();
}else {
  showTosError();
}


  // eslint-disable-next-line no-alert

});

