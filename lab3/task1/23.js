let login = prompt("enter your login:",'');
if(login === "Admin"){
    let password = prompt("enter the password:",'');
    if(password==="TheMaster"){
        alert("welcome!");
    }
    
    else if(password === '' || password === null){
    alert("Canceled");
    } 
    else {
    alert("Wrong password");
}
}
else if(login === '' || login === null){
    alert("Canceled");
} else {
    alert("I don't know you");
}