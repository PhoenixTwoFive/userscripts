// ==UserScript==
// @name         Stuk-Kalender Safeguard
// @namespace    *
// @include      https://stuk-kalender.de/*
// @version      0.1
// @description  Fügt eine Nachfrage bei anklicken eines Eintragungsknopf ein.
// @author       Phillip Kühne
// ==/UserScript==
function displayAlert(el){
    var alertString = "Möchtest du dich als " + el.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerText + " eintragen?";
    return confirm(alertString);
}

(function() {
    var jobs = document.querySelectorAll('[id^=job-]');
    var buttons = [];
    console.log(jobs);
    for (i = 0; i < jobs.length; i++) { 
        var button = jobs[i].getElementsByClassName("owner")[0].getElementsByClassName("btn-group-xxs")[0].getElementsByClassName("btn")[0];
		if( button !== undefined){
        	buttons.push(button);
        }
    }
    console.log(buttons);
    for (i = 0; i < buttons.length; i++) {
        /*buttons[i].style.color = "yellow";
        buttons[i].style.backgroundColor = "red";
        buttons[i].style.borderColor = "black";*/
        buttons[i].onclick = function(){ return displayAlert(this);};
    }
})();
