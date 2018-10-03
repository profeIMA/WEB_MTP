jQuery(function(){
		var temes = ["1","2","3","4","5","6","7"];
		for (var i = 0; i < temes.length; i++){
			var nom_classe = "a_solucio_".concat(temes[i]);;
			elements = document.getElementsByClassName(nom_classe);
			for (var j = 0; j < elements.length; j++) {
				elements[j].href = "";
				elements[j].target = "_self";
			}
		}
    }
);