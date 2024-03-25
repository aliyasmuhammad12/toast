const success = document.getElementById("success");
const Error = document.getElementById("Error");
const invalid = document.getElementById("invalid");
let toastBox = document.getElementById("toastBox")



function ShowToast(message, type){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   let icon = document.createElement('i');
   icon.classList.add('fas', type ==='success' ? 'fa-check-circle' : type === 'Error' ? 'fa-times-circle' : 'fa-exclamation-circle')
   toast.appendChild(icon);

   let messageDiv = document.createElement('div');
   messageDiv.innerText = message;
   toast.appendChild(messageDiv)
   toastBox.appendChild(toast);

  if(message.includes('Error')){
    toast.classList.add("error")
  }
  if(message.includes('invalid')){
    toast.classList.add("invalid")
  }

  setTimeout(()=>{
    toast.remove();
  }, 4000)
}
success.addEventListener("click", function() {
    ShowToast("Successfully Submitted", "success");
});
Error.addEventListener("click", function() {
    ShowToast("Error occured");
});
invalid.addEventListener("click", function() {
    ShowToast("invalid");
});
