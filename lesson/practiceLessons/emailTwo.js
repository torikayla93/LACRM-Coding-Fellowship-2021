function validateEmail(){
    let email = document.getElementById('email').value;

    if(email == ""){
        alert("You forgot to enter your email, hun!");
    }
    else if(!email.includes("@"))
    {
        alert("Invalid email address address. Missing '@' symbol.");
        document.form1.text1.focus();
        return "false";
    }
    else if(!email.includes(".com"))
    {
        alert("Invalid email address address. Missing '.com'");
        document.form1.text1.focus();
        return "false";
    }
    else{   
        alert("Thank you for entering a valid email!");
        document.form1.text1.focus();
        return "true";
    }
}