// Animação suave ao aparecer os elementos

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});


const elementos = document.querySelectorAll(
".project, .about, .qualities, .services, .contact"
);

elementos.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(30px)";

el.style.transition="0.7s ease";

observer.observe(el);

});


// Destaque automático do menu

const secoes = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let atual="";

secoes.forEach(sec=>{

const topo = sec.offsetTop - 120;

const altura = sec.clientHeight;

if(scrollY >= topo && scrollY < topo + altura){

atual = sec.getAttribute("id");

}

});

links.forEach(link=>{

link.style.color="#b9c2d0";

if(link.getAttribute("href") === "#"+atual){

link.style.color="#4b7cff";

}

});

});


// Carrossel do projeto da academia

document.querySelectorAll("[data-carousel]").forEach(carrossel=>{

const trilha = carrossel.querySelector(".carousel-track");
const slides = carrossel.querySelectorAll("img");
const pontos = carrossel.querySelector(".carousel-dots");
let atual = 0;

slides.forEach((slide, indice)=>{

const ponto = document.createElement("button");
ponto.type = "button";
ponto.setAttribute("aria-label", `Ir para o slide ${indice + 1}`);
ponto.addEventListener("click",()=>mostrarSlide(indice));
pontos.appendChild(ponto);

});

function mostrarSlide(indice){

atual = (indice + slides.length) % slides.length;
trilha.style.transform = `translateX(-${atual * 100}%)`;

pontos.querySelectorAll("button").forEach((ponto, indicePonto)=>{
ponto.classList.toggle("active", indicePonto === atual);
});

}

carrossel.querySelector(".previous").addEventListener("click",()=>mostrarSlide(atual - 1));
carrossel.querySelector(".next").addEventListener("click",()=>mostrarSlide(atual + 1));

mostrarSlide(0);

});


// Botões dos projetos

document.querySelectorAll(".project-bottom button").forEach(botao=>{

botao.addEventListener("click",()=>{

alert("Aqui você poderá abrir o projeto completo.");

});

});