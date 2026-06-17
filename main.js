const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

elementos.forEach(elemento=>{

    observer.observe(elemento);

});

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});

const botonTema = document.getElementById("theme-toggle");

botonTema.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("tema","light");
        botonTema.textContent="☀️";

    }else{

        localStorage.setItem("tema","dark");
        botonTema.textContent="🌙";

    }

});

if(localStorage.getItem("tema")=="light"){

    document.body.classList.add("light");

    botonTema.textContent="☀️";

}

const menu = document.querySelector("nav");

const botonMenu = document.querySelector(".menu-toggle");

botonMenu.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("oculto");

    }, 1000);

});



const barra = document.querySelector(".progress-bar");
const loader = document.getElementById("loader");

let progreso = 0;

const intervalo = setInterval(() => {

    progreso++;

    barra.style.width = progreso + "%";

    if(progreso >= 100){

        clearInterval(intervalo);

    }

},20);