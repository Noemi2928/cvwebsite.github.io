let navbarActive = false;

function showHideNavbar(){
	if (navbarActive) {
		document.getElementById("navbar").classList = "";
		navbarActive = false;
	}else{
		document.getElementById("navbar").classList = "responsive";
		navbarActive = true;
	}
}

function choice(){
	showHideNavbar();
}