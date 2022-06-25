const logIn = () => {
    let isvalidLogin = longinValid()
    
    if(isvalidLogin === true){
        let loginMail = document.getElementById('log-in-id').value;
        let loginPass = document.getElementById("log-in-password").value;
        let n = DB_USERS.length;
        for(let i = 0; i < n; i++){
            if(DB_USERS[i].email === loginMail && DB_USERS[i].password === loginPass){
                document.getElementById("loginValid").style.display = "block";
                signUpNav.innerHTML = `<a class="nav-link">Hi ${DB_USERS[i].firstName}</a>`
                loginNav.innerHTML = '<a class="nav-link">Logout</a>'
                $('#loginModal').modal('hide')
            }
            let previousSignUpNavInnerContent = signUpNav.innerHTML;
            let previousLoginNavInnerContent = loginNav.innerHTML;

            
            loginNav.innerHTML = '<a class="nav-link">Logout</a>'

            loginNav.addEventListener('click', () => {
                signUpNav.innerHTML = previousSignUpNavInnerContent
                loginNav.innerHTML = previousLoginNavInnerContent
            })
            return;
               
        }
      
        document.getElementById("loginInvalid").style.display = "block";
    }
    else{
        return;
    }


}

const longinValid = () => {
    let loginMail = document.getElementById('log-in-id').value;
    let loginPass = document.getElementById("log-in-password").value;
    const res  = [false,false];

    if(loginMail = ''){
        document.getElementById('invalid-mail').style.display = 'block';
        res[0] = false;
    }
    else{
        document.getElementById('invalid-mail').style.display = 'none';
        res[0] = true;
    }
    if(loginPass = ''){
        document.getElementById('invalid-pass').style.display = 'block';
        res[1] = false;
    }
    else{
        document.getElementById('invalid-pass').style.display = 'none';
        res[1] = true;
    }
    return  res.every(ele => ele === true);
}