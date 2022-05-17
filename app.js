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


// loader js 


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          "#spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};