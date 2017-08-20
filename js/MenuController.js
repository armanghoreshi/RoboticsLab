/**
 * Created by arman on 7/30/2017 AD.
 */
window.onscroll = function () {
    var Links =document.querySelectorAll(".menu_section a");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        document.getElementById("MainMenu").style.backgroundColor = "#8E44AD";
        for(i =0 ; i<5 ; i++){
            Links[i].style.padding = "10px 20px";
        }
    }
    else {
        document.getElementById("MainMenu").style.backgroundColor = "transparent";
        for(i =0 ; i<5 ; i++){
            Links[i].style.padding = "20px 20px";
        }
    }

    //document.getElementById("MainMenu").style
}