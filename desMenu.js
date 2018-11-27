jQuery(function(){
		var temes = ["1_1","1_2","1_3"];
		for (var i = 0; i < temes.length; i++){
			var nom_id = "cont_".concat(temes[i]);;
			elements = document.getElementById(nom_id).remove();
		}
	}
);