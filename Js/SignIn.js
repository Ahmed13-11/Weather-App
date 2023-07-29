var emailMember = document.getElementById('email');
var passMember = document.getElementById('password');
var btn = document.getElementById('form');

var loginList;
if (localStorage.getItem('signUp') === null) {
    loginList = [];
} else {
    loginList = JSON.parse(localStorage.getItem('signUp'));
}

btn.addEventListener('submit', function(e) {
    e.preventDefault();
    var isLoggedIn = false;
    var Member;
    for (var i = 0; i < loginList.length; i++) {
        if (emailMember.value === loginList[i].emailMeb && passMember.value === loginList[i].passMeb) {
            localStorage.setItem('username', JSON.stringify(loginList[i].userMeb));
            isLoggedIn = true;
            break;
        }
    }
    if (isLoggedIn) {
        window.location.href = "/html/welcom.html";
    } else {
        var invalidMsg = `
        <div id="invalid">
            <p>Invalid Email or Password</p>
        </div>
        `;
        document.getElementById('invalid').innerHTML = invalidMsg;
    }
});
