menu.onclick = function myFuncrion() {
	var x = document.getElementById("myTopnav");

    if(x.className === "myTopnav") {
	    x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}


