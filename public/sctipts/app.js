const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation
container.addEventListener("mousemove", e => {
    console.log(e);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Mouse In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //Popout effect
    sneaker.style.transform = "translateZ(200px) rotate(-45deg)";
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(70px)";
    purchase.style.transform = "translateZ(50px)";
});

//Mouse out

container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = 'rotateY(0) rotateY(0)'
    //Pop in
    sneaker.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});