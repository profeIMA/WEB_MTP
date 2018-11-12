jQuery(function(){
		var temes = ["1","2","3"];
		for (var i = 0; i < temes.length; i++){
			var nom_id = "cont_1_".concat(temes[i]);;
			elements = document.getElementById(nom_id).remove();
		}
	}
);