window.onload = function() {
    console.log("Javascript is functioning.");

    document.getElementById("aboutlink").getAttribute("href") = "";
    document.getElementById("githublink").getAttribute("href") = "";
    document.getElementById("projectslink").getAttribute("href") = "";
    document.getElementById("contactlink").getAttribute("href") = "";

    console(document.getElementById("aboutlink").getAttribute("href"));
}


var scrollheader = document.getElementById("scrollheader");
var height = scrollheader.offsetTop;
    
window.onscroll = function () {
    if(window.pageYOffset > height) {
        scrollheader.classList.add("scroll");
    } else {
        scrollheader.classList.remove("scroll");
    }
};


var aboutlink = document.getElementById("aboutlink");
var githublink = document.getElementById("githublink");
var projectslink = document.getElementById("projectslink");
var contactlink = document.getElementById("contactlink");

function moveTo(e) {
    var element = document.getElementById(e);
    console.log(e);
    var rect = element.getBoundingClientRect();

    window.scrollTo({ 
        top: window.pageYOffset + rect.y - 54,
        left: window.pageXOffset,
        behavior: 'smooth'   } );    
}

aboutlink.onclick = function() { moveTo("about"); };
githublink.onclick = function() { moveTo("github"); };
projectslink.onclick = function() { moveTo("projects"); };
contactlink.onclick = function() { moveTo("contact"); };