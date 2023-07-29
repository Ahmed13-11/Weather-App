var emailMember = document.getElementById('email');
var passMember = document.getElementById('password');
var userName = document.getElementById('userName')
var btn = document.getElementById('form');
var loginList;

if (localStorage.getItem('signUp') === null) {
    loginList = [];
} else {
    loginList = JSON.parse(localStorage.getItem('signUp'));
}

btn.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validateEmail() && validatePassword() && checkEmailredandancy()){
        addMembers();
        reset();
        window.location.href = "/SignIn.html";
    }
    else if (validateEmail() && validatePassword()) {
        swal("Oops...", "Your Email is exist", "error");
    }
    else {
        swal("Oops...", "Your Email or Password is InCorrect!\nPassword should be 8 or more\n your email should be like xxxxxx@xxxxxx", "error");
    }
});

function addMembers() {
    var loginMembers = {
        emailMeb: emailMember.value,
        passMeb: passMember.value,
        userMeb: userName.value
    };
    loginList.push(loginMembers);
    localStorage.setItem('signUp', JSON.stringify(loginList));
}

function reset() {
    emailMember.value = '';
    passMember.value = '';
    userName.value = '';
}

function validateEmail() {
    var validateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var validateEm = emailMember.value;
    if(validateEmail.test(validateEm)) {
        return true;
    } else {
        return false;
    }
}
function validatePassword() {
    return passMember.value.length > 8 ? true : false;
}
function checkEmailredandancy(){
    var flag=true;
    loginList.forEach(element => {
        if(element.emailMeb== emailMember.value){
            flag= false;
        }
    });
    return flag;
}


swal("Oops...", "Your Url is InCorrect!\nYour Url should like that https://www.example.com", "error");
swal("Good job!", "Your Url and Name are Correct!", "success");
swal("Oops...", "This website name already exists in the bookmarks!", "error");
