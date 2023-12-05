const menuButton = document.querySelector(".menu")
const secondeheader = document.querySelector(".seconder-header")
const metadonne = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
    "./10.jpg",
    "./11.jpg",
    "./12.jpg",
]
const banner = document.querySelector(".banner img")
console.log(banner)
menuButton.addEventListener("click", () => {
    secondeheader.classList.add("open")
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("list-heder") || event.target.classList.contains("menu")) {
        secondeheader.classList.add("open")
    } else {
        secondeheader.classList.remove("open")
    }
})

var index = 0;
function fadeOut(el) {
    var opacity = 1; // Initial opacity
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            el.style.opacity = opacity;
            if (opacity === -0.09999999999999987) {
                banner.src = metadonne[index]
                index = index + 1
            }
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            // el.style.display = 'none'; // Hide the element
            setTimeout(() => {
                fadeIn(el)
            }, 10);
        }
    }, 100);

}

function fadeOutReverse(el) {
    var opacity = 1; // Initial opacity
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            el.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            // el.style.display = 'none'; // Hide 
            setTimeout(() => {
                fadeIn(el)
            }, 10);
        }
    }, 100);

}

const fadeIn = (el) => {
    var opacity = 0; // Initial opacity
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            el.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            // el.style.display = 'initial'; // Hide the element
        }
    }, 50);

}

setInterval(() => {
    if (index < metadonne.length) {
        fadeOut(banner)
    } else {
        index = 0
        fadeOut(banner)
    }

}, 10000);
