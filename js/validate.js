
    


function isValidate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phoneno").value;
    let signUpPass = document.getElementById("sign-up-password").value;
    let confirmaPass = document.getElementById("confirm-password").value;
    let invalidCheck = document.getElementById("invalidCheck").checked;
    
    const arr = [false,false,false,false,false,false];

    if(firstName == ''){
        document.getElementById("firstNameInvalid").style.display = "block"
        document.getElementById("firstNameValid").style.display = "none"
        arr[0] = false;

    }
    else{
        document.getElementById("firstNameValid").style.display = "block";
        document.getElementById("firstNameInvalid").style.display = "none";
        arr[0] = true;
    }
    if(lastName == ''){
        document.getElementById("lastNameInvalid").style.display = "block"
        document.getElementById("lastNameValid").style.display = "none"
        arr[1] = false;

    }
    else{
        document.getElementById("lastNameValid").style.display = "block";
        document.getElementById("lastNameInvalid").style.display = "none";
        arr[1] = true;
    }
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"
        arr[2] = false;

    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
        arr[2]= true;
    }
    if(phone  == ''|| phone.length != 10 || Number(phone[0]) <6 ){
        document.getElementById("phoneInvalid").style.display = "block"
        document.getElementById("phoneValid").style.display = "none"
        arr[3] = false;

    }
    else{
        document.getElementById("phoneValid").style.display = "block";
        document.getElementById("phoneInvalid").style.display = "none";
        arr[3] = true;
    }
    if(signUpPass == ''){
        document.getElementById("signup-pass-invalid").style.display = "block";
        arr[4] = false;
    }
    else{
        document.getElementById("signup-pass-invalid").style.display = "none"
        arr[4] = true;
    }
    
    if(  invalidCheck ==false  ){
        document.getElementById("tncCondition").style.display = "block";
        arr[5] =false;
        

    }
    else{
        document.getElementById("tncCondition").style.display = "none";
        arr[5] = true;
    }
    
    let  isvalite =  arr.every(ele => {
         return ele === true;
    })
    
    if(isvalite === true){
        return true;
    }
    else {
        return false;
    }
    
    
}
// indivisual functions for check validation for indivisual feild.
function isValidFirstName(){
    let firstName = document.getElementById("firstname").value;
    if(firstName == '' || firstName.includes(" ")){
        document.getElementById("firstNameInvalid").style.display = "block";
        document.getElementById("firstNameValid").style.display = "none";
    }
    else{
        document.getElementById("firstNameInvalid").style.display = "none";
        document.getElementById("firstNameValid").style.display = "block";
    }

}
function isValidLastName(){
    let firstName = document.getElementById("lastname").value;
    if(firstName == '' || firstName.includes(" ")){
        document.getElementById("lastNameInvalid").style.display = "block";
        document.getElementById("lastNameValid").style.display = "none"
    }
    else{
        document.getElementById("lastNameInvalid").style.display = "none";
        document.getElementById("lastNameValid").style.display = "block"
    }

}
function isValidMail(){
    let email = document.getElementById("email").value;
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
       document.getElementById("emailInvalid").style.display = "block";
       document.getElementById("emailValid").style.display = "none"
    }
    else{
        document.getElementById("emailInvalid").style.display = "none";
        document.getElementById("emailValid").style.display = "block"
    }
}
function isValidPhone(){
    let phone = document.getElementById("phoneno").value;
    if(phone  == ''|| phone.length != 10 ){
        document.getElementById("phoneInvalid").style.display = "block";
        document.getElementById("phoneValid").style.display = "none";

    }
    else{
        document.getElementById("phoneInvalid").style.display = "none";
        document.getElementById("phoneValid").style.display = "block";
    }
}
function isValidPass() {
    let pass = document.getElementById("password").value;
    if(pass != ''){
        document.getElementById("invalid-password").style.display = "none";
    }
}

let matchPass = document.getElementById("match-pass");
let noMatch = document.getElementById("doesnt-match-pass");


// function is used to match password or confirm password;
const confirmPass = () => {
    let password = document.getElementById("sign-up-password").value;
    let confirmPass = document.getElementById("confirm-password").value;
    if(confirmPass != ''){
        if(password === confirmPass){
            matchPass.style.display = "block";
            noMatch.style.display = "none";
    
        }
        else{
            matchPass.style.display = "none";
            noMatch.style.display = "block";
        }
    }
}