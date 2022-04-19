function myFunction(){
    var x = document.getElementById("myTopnav");
    if(x.className == "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}

function menuShow(){
    let prop = document.getElementById("nav").style ;

    if(prop.display === "block"){
        prop.display = "none";
    }
    else{
        prop.display= "block";
    }
}