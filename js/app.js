//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurantName = document.querySelectorAll(".name");

for (var i = 0; i < restaurantName.length; i++) {
	restaurantName[i].addEventListener("click", showMenu);
	restaurantName[i].querySelectorAll(".menu")[0].visible = false;
}

function showMenu() {
	var restaurantMenu = this.querySelectorAll(".menu")[0];
		if (restaurantMenu.visible === false) {
			restaurantMenu.style.display = "initial";
			restaurantMenu.visible = true;
		}
		else {
			restaurantMenu.style.display = "none";
			restaurantMenu.visible = false;
		}
}


