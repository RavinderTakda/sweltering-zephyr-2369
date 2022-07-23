// ********************sign up************************
let su= document.getElementById('sign_up');

su.addEventListener("submit",reg);
let arr=[];

function reg(){

  if(su.su_pw.value != su.confirm_pw.value){
    alert("The passwords you have entered do not match. Please try again.")
  }else{
    let obj={
      email: su.su_email.value,
      password: su.su_pw.value
    }
    arr.push(obj);
    localStorage.setItem("users",JSON.stringify(arr))
  }
}

//*******************guest**************************
let guest = document.getElementById('guest');

guest.addEventListener("click",as_guest);

function as_guest(){
  window.location.href = "cart.html";
}

// *****************sign in*************************
let reg_users= JSON.parse(localStorage.getItem("users")) || 0;

let si= document.getElementById('sign_in');

si.addEventListener("submit",log_in);

function log_in(event){
  event.preventDefault();

  if((reg_users == 0) || (si.si_email.value != reg_users[0].email) || (si.si_pw.value != reg_users[0].password)){
    alert("Email and/or password incorrect. Please try again or reset your password.")
  }else{
    window.location.href = "overview.html";
  }
}