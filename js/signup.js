const DB_USERS = [];


let signUpNav = document.getElementById("sign-up-nav");
let loginNav = document.getElementById("login-nav");




const signUp = () => {
    let notificationAlert = document.getElementById('notification-alert')
	let notificationText = document.getElementById('notification-text')
    let signupForm = document.getElementById("signupForm");
      let isvalid = isValidate();
      if(isvalid === false ){
        return;
      }
      let firstName = document.getElementById("firstname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("sign-up-password").value;
      
      let newUser = { firstName,email,password};
      
      DB_USERS.push(newUser);

    //   reset()
		$('#signUpModal').modal('hide')

        notificationAlert.classList = 'alert alert-success alert-dismissible fade show'
		notificationText.innerText = 'Congratulations! You have successfully signed up!'
		notificationAlert.style.display = 'block';

		setTimeout(() => {
			notificationAlert.style.display = 'none';
		}, 5000)

	let previousSignUpNavInnerContent = signUpNav.innerHTML;
	let previousLoginNavInnerContent = loginNav.innerHTML;

    signUpNav.innerHTML = `<a class="nav-link">Hi ${newUser.firstName}</a>`
	loginNav.innerHTML = '<a class="nav-link">Logout</a>'

	loginNav.addEventListener('click', () => {
		signUpNav.innerHTML = previousSignUpNavInnerContent
		loginNav.innerHTML = previousLoginNavInnerContent
	})
    console.log(newUser);
    console.log(DB_USERS);

}
console.log(DB_USERS);
