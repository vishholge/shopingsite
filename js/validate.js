let signUpForm = document.getElementById("signupForm");
    
const hey = () => {
    console.log("heelo world");
}
function isValidate(){
    let firstName = signUpForm.getElementById("firstname").value;
    let lastName = signUpForm.getElementById("lastname").value;
    let email = signUpForm.getElementById("email").value;
    let phone = signUpForm.getElementById("phoneno").value;
    let signUpPass = signUpForm.getElementById("sign-up-password").value;
    let confirmaPass = signUpForm.getElementById("confirm-password").value;
    let invalidCheck = signUpForm.getElementById("invalidCheck").checked;
    
    const arr = [false,false,false,false,false,false];

    if(firstName == ''){
        signUpForm.getElementById("firstNameInvalid").style.display = "block"
        signUpForm.getElementById("firstNameValid").style.display = "none"
        arr[0] = false;

    }
    else{
        signUpForm.getElementById("firstNameValid").style.display = "block";
        signUpForm.getElementById("firstNameInvalid").style.display = "none";
        arr[0] = true;
    }
    if(lastName == ''){
        signUpForm.getElementById("lastNameInvalid").style.display = "block"
        signUpForm.getElementById("lastNameValid").style.display = "none"
        arr[1] = false;

    }
    else{
        signUpForm.getElementById("lastNameValid").style.display = "block";
        signUpForm.getElementById("lastNameInvalid").style.display = "none";
        arr[1] = true;
    }
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
        signUpForm.getElementById("emailInvalid").style.display = "block"
        signUpForm.getElementById("emailValid").style.display = "none"
        arr[2] = false;

    }
    else{
        signUpForm.getElementById("emailValid").style.display = "block";
        signUpForm.getElementById("emailInvalid").style.display = "none";
        arr[2]= true;
    }
    if(phone  == ''|| phone.length != 10 || Number(phone[0]) <6 ){
        signUpForm.getElementById("phoneInvalid").style.display = "block"
        signUpForm.getElementById("phoneValid").style.display = "none"
        arr[3] = false;

    }
    else{
        signUpForm.getElementById("phoneValid").style.display = "block";
        signUpForm.getElementById("phoneInvalid").style.display = "none";
        arr[3] = true;
    }
    if(signUpPass == ''){
        signUpForm.getElementById("signup-pass-invalid").style.display = "block";
        arr[4] = false;
    }
    else{
        signUpForm.getElementById("signup-pass-invalid").style.display = "none"
        arr[4] = true;
    }
    
    if(  invalidCheck ==false  ){
        signUpForm.getElementById("tncCondition").style.display = "block";
        arr[5] =false;
        

    }
    else{
        signUpForm.getElementById("tncCondition").style.display = "none";
        arr[5] = true;
    }
     console.log(arr);
    let  isvalite =  arr.every(ele => {
         return ele === true;
    })
     console.log(isvalite);
    if(isvalite === true){
        return true;
    }
    else {
        return false;
    }
    
    
}