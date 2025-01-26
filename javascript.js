var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("side-menu");


function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-210px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyyWCfaj2AYtmVgIlrKKdpiHfB2OQfKBbxIjWExdW8kwqBlc-PWEHiXnLo-uHCvsuMj8A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message submitted successfully'
            setTimeout(function(){
                msg.innerHTML = ''
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
