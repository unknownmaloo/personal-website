// Array of silly ideas
var ideas = [
    "A sound sensor and a speaker work together and whenever someone make noise it plays a loud sound. ",
    "A sound effect player whenever u cut a phone call. ",
    "A smart web cam that judges your behaviour. ",
    "A light strip that flashes red whenever someone els other then u used ur computer ",
];

function showSillyIdea() {
    // Select a random index from the array
    var randomIndex = Math.floor(Math.random() * ideas.length);

    // Update the HTML text inside the box
    document.getElementById("idea-box").innerText = ideas[randomIndex];
}

window.addEventListener("scroll", function() {
    var heroHeader = document.getElementById("hero-header");
    if (heroHeader) {
        if (window.scrollY > 50){
            heroHeader.classList.add("shrunk");
        } else {
            heroHeader.classList.remove("shrunk");
        }
    }
});

var sections = document.querySelectorAll(".section");
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(function(section){
    observer.observe(section);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", function(){
    var btn = document.getElementById("backToTop");
    if (btn) {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
});