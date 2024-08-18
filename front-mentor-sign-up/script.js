let premiere_page = document.querySelector("main");
let seconde_page = document.querySelector(".footer");
let email_champ = document.querySelector(".input");
let label_email = document.querySelector("label");
let text_validation = document.querySelector(".footer p");

function f_change_page(i,j){
    if (f_verif_email()){
        premiere_page.style.display = i;
        seconde_page.style.display = j;
        text_validation.innerHTML = `A confirmation email has been sent to <span>${email_champ.value}</span>
    Please open it and click the button inside to confirm your subscription.`
    }
}
function f_verif_email(){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (!regex.test(email_champ.value)){
        email_champ.classList.add("need-valid-email");
        label_email.classList.add("notification");
        return false
    }else{
        email_champ.classList.remove("need-valid-email");
        label_email.classList.remove("notification");
        return true
    }
}

