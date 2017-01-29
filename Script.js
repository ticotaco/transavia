var icons_array =["images/icons/arrow-down.png","images/icons/arrow-up.png","images/icons/arrow-shuffle.png"];
var woord_array =["Likes", "Reacties"];
var sorteer_woord = document.getElementById("sort_toggle1");
var sorteer_icon = document.getElementById("sort_toggle2");
var filteren = document.getElementById("filter_knop");
var filter_dropdown = document.getElementById("filter_dropdown");
var registreren_knop = document.getElementById("registreren");

function toggle_icon(){
	if (sorteer_icon.getAttribute('src') == icons_array[0])
	{
		sorteer_icon.src = icons_array[1];
	}
	else if (sorteer_icon.getAttribute('src') == icons_array[1]) 
	{
		sorteer_icon.src = icons_array[2];
	}
	else
	{
		sorteer_icon.src = icons_array[0];
	}
}
function toggle_woord(){
	if(sorteer_woord.innerHTML == woord_array[0])
	{
		sorteer_woord.innerHTML = woord_array[1];
	}else
	{
		sorteer_woord.innerHTML = woord_array[0];		
	}
}
function filter_opties(){
	var filter_article2 = filter_dropdown.getElementsByTagName("article")[1]; 
	var filter_article3 = filter_dropdown.getElementsByTagName("article")[2]; 
	if(filteren.innerHTML == "Filter opties ▼")
	{
		filteren.innerHTML = "Filter opties ▲"
		filter_article2.style.display = "flex";
		filter_article3.style.display = "flex";
	}else
	{	

		filteren.innerHTML = "Filter opties ▼"
		filter_article2.style.display = "none";
		filter_article3.style.display = "none";
	}
}
function registreren1(){
	var registerlabel = document.getElementById("registerlabel");
	var registerinput = document.getElementById("registerinput");
	registerlabel.style.display = " flex";
	registerinput.style.display = " flex";
}

filteren.addEventListener("click",filter_opties, false);
sorteer_icon.addEventListener("click",toggle_icon, false);
sorteer_woord.addEventListener("click",toggle_woord, false);
registeren_knop.addEventListener("click",registreren1, true);
