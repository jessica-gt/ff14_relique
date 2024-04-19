function affichage(x,y){
	if (x==1){
		document.getElementById("btnPrecedent").disabled = true;
		document.getElementById("btnSuivant").disabled = false;
	}else if (x==y) {
		document.getElementById("btnPrecedent").disabled = false;
		document.getElementById("btnSuivant").disabled = true;
	}else{
		document.getElementById("btnPrecedent").disabled = false;
		document.getElementById("btnSuivant").disabled = false;
	}
	for (let i = 1; i <= y; i++) {
  		if (i==x) {
  			document.getElementById("etape"+i).style.display = "block";
  		}else {
  			document.getElementById("etape"+i).style.display = "none";
  		};
	};	
};

function arme(x,y,z){
	document.getElementById("imgRelic"+z).innerHTML='<img src="../image/image_reliques/'+x+'/'+y+'('+z+').png">';
};

function precedent(nbPage){
	var test = (document.getElementById("etape1").style.display == "block");
	for (let i = 1; i <= nbPage; i++){
		test = (document.getElementById("etape"+i).style.display == "block");
		if (test) {
			if (i==2){
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i-1)).style.display = "block";
				document.getElementById("btnPrecedent").disabled = true;
			}else if(i==8){
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i-1)).style.display = "block";
				document.getElementById("btnSuivant").disabled = false;
			}else{
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i-1)).style.display = "block";
				document.getElementById("btnPrecedent").disabled = false;
			}
		}
	}
}

function suivant(nbPage){
	var test = (document.getElementById("etape1").style.display == "block");
	for (let i = nbPage; i >= 1; i--){
		test = (document.getElementById("etape"+i).style.display == "block");
		if (test) {
			if (i==(nbPage-1)){
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i+1)).style.display = "block";
				document.getElementById("btnSuivant").disabled = true;
			}else if(i==1){
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i+1)).style.display = "block";
				document.getElementById("btnPrecedent").disabled = false;
			}else{
				document.getElementById("etape"+i).style.display = "none";
				document.getElementById("etape"+(i+1)).style.display = "block";
				document.getElementById("btnSuivant").disabled = false;
			}
		}
	}
}