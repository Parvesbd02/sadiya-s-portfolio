var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab (tabname){
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}