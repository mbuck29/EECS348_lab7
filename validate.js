function validate(){
    var first_p = document.getElementById("first_p").value;
    var second_p = document.getElementById("second_p").value;

    if(first_p.length < 8){
        alert("The first password is not 8 characters long");
    }else if(second_p.length < 8){
        alert("The second password is not 8 characters long");
    }else if(first_p !== second_p){
        alert("The passwords do not match");
    }else{
        alert("Everythings Good!");
    }
}
