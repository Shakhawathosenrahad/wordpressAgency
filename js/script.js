// navBar menu button
const menu = document.querySelectorAll("nav .material-symbols-outlined");
const links = document.querySelector("nav .links");


menu.forEach((btn, index) => {
    btn.onclick = () => {
        if(index === 1) {
            links.style.top = 0;
            setTimeout(() => {
            links.style.borderRadius = "0";
            }, 50);
        }
        else {
            links.style.top = "-100vh";
            setTimeout(() => {
            links.style.borderRadius = "0 0 100% 100%";
            }, 50);
        }
    }
})


let nav = document.querySelector("header nav");
let isScrolling = 0;

addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    nav.style.backgroundColor = scrollTop === 0 ? "transparent" : "#000";
    if(isScrolling < scrollTop) {
        nav.classList.add("scrolling");
        scrollTop === 0 && (() => {
            nav.classList.remove("scrolling");
        })();
        nav.style.backgroundColor ="rgba(0, 0, 0, 0.5)";
    }
    else {
        nav.classList.remove("scrolling");
    }
    isScrolling = scrollTop;
})


// header explore button

let circle = document.querySelector(".circle");
let text = "Explore Now - Explore Now -"


text.split('').map((char, i) => {
    let span = `<span style="transform: rotate(${i * 13}deg)">${char}</span>`;
    circle.insertAdjacentHTML("beforeend", span);
});



// our creation

const possibilities = document.querySelector(".possibilities");

const cardData = [
    {
        img: "./img/card1.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card2.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card3.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card4.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card5.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card6.png",
        title: "WordPress Sites"
    },
    {
        img: "./img/card7.png",
        title: "WordPress Sites"
    }
]

for(let i in cardData) {
    let card = `<div class="card">
                <img src="${cardData[i].img}">
                <h2>${cardData[i].title}</h2>
                <button class="btn">Learn More</button>
                </div>`;
    possibilities.insertAdjacentHTML("beforeend", card);
}

navigator.maxTouchPoints > 0 && (() => {
    possibilities.style.justifyContent = "center";
    document.querySelector(".contact form").classList.add("mobile_version");
    document.querySelector(".feed").style.overflow = "hidden";
})();


// description

let descCard = document.querySelector(".desc section");

const descCardData = [
    {
        img: "./img/wordPress.png",
        title: "WordPress-Coderx",
        desc: "Programmierung entsprechend den WordPress-Vorgaben, für problemlose Updates"
    },
    {
        img: "./img/responsive.png",
        title: "Mobile Friendly",
        desc: "Mit Responsive Design und optimierten Ladezeiten sowohl für Desktop als auch für die mobile Nutzung"
    },
    {
        img: "./img/w3c.png",
        title: "W3C-Standard",
        desc: "Wir programmieren gemäß deninternationalen Standards des W3C"
    },
    {
        img: "./img/madeby.png",
        title: "Made in Germany",
        desc: "Wir programmieren an unserem Standort in Deuschland - kein Outsourcing"
    },
    {
        img: "./img/plugins.png",
        title: "Angepasste Entwicklung",
        desc: "Themes,Plugins und Sonderwünsche exakt nach Ihren Anforderungen"
    },
    {
        img: "./img/label.png",
        title: "White Label",
        desc: "Für Agenturen programmieren wir auf Wunsch auch Undercover"
    }
];

for(let i in descCardData) {
    let data = `<div class="card">
                    <img src="${descCardData[i].img}">
                    <div class="details">
                        <h4>${descCardData[i].title}</h4>
                        <p>${descCardData[i].desc}</p>
                    </div>
                </div>`;
    descCard.insertAdjacentHTML("beforeend", data);
}

// footer

setTimeout(() => {
    document.querySelector(".eapps-instagram-feed.es-widget > a:nth-child(4)").remove();
}, 2000);