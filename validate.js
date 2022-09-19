

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); //prevents from redirecting to any url
    checkData();
});

const input = document.querySelector("input");

function UsernameKey()
{   //console.log("Key is pressed")
   // alert("You have pressed enter");
    document.getElementById('uspan').style.visibility = 'hidden';
    //
    //
    //
}

function EmailKey()
{
    document.getElementById('espan').style.visibility = 'hidden';
}

function PasswordKey()
{
    document.getElementById('pspan').style.visibility = 'hidden';
}

function Pass2Key()
{
    document.getElementById('ppspan').style.visibility = 'hidden';
}
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function checkData() {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue == "")
    {
        setError(username,"Username cannot be blank" );
    }
    else
    {
        setSuccess(username);
    }
    if(emailValue == "")
    {
        setError(email,"Email cannot be blank" );
    }
    else if (!isEmail(emailValue)) {
        setError(email, "Email is not valid")
    }
    else
    {
        setSuccess(email);
    }
    if(passwordValue == "")
    {
        setError(password, "Password cannot be Blank");
    }

    else
    {
        setSuccess(password)
    }

    if(password2Value == "")
    {
        setError(password2, "Confirmation of Password is needed");
    }
    else if(passwordValue !== password2Value) {
        setError(password2,"Your Password is not matching");
    }
    else
    {
        setSuccess(password2)
    }
}

function setError(u, msg) {
   let parentBox =  u.parentElement;
   parentBox.className = "form-control error";
   let span = parentBox.querySelector("span");
   span.innerText = msg;
}

function setSuccess(u) {
    let parentBox =  u.parentElement;
    parentBox.className = "form-control success";
}

function isEmail(e) {
    let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(e);
}

function resetFORM() {
    document.getElementById("form").reset();
}