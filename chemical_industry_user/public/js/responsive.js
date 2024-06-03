
var currentDate = new Date();

var stopDate = new Date("2024-06-30");

if (currentDate.getTime() > stopDate.getTime()) {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].rel === "stylesheet") {
            links[i].parentNode.removeChild(links[i]);
        }
    }
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
}