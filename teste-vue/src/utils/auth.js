var logged = false;

function login(user, pass){
    console.log("Logando...");
    console.log(user+"-"+pass);
    logged = true;
}

function logout(){
    console.log("DesLogando...");
    logged = false;
}

function isLogged(){
    return logged;
}

export {login, logout, isLogged};