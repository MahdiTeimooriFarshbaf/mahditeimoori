// Smooth animation on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:.15

}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 1s ease";

observer.observe(section);

});


// Navbar background while scrolling

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});


// Hero fade effect

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

const value=window.scrollY;

hero.style.opacity=1-value/900;

});


// Simple gallery zoom

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.cursor="pointer";
overlay.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="12px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});


// Copyright year

const footer=document.querySelector("footer p");

footer.innerHTML="© "+new Date().getFullYear()+" Mehdi Teimoori";
