const carrusel = document.getElementById("carrusel");
const items = document.querySelectorAll(".item");
let index = 0;
const totalOriginal=items.length;
confirmar=false;
items.forEach(item => {
    const clon = item.cloneNode(true);
    carrusel.appendChild(clon);
});
function adelante() {
    
    if(confirmar)return;
    index++;
    carrusel.style.transition = "transform 1200ms";
    carrusel.style.transform = `translateX(${-index * 50}%)`;
    setTimeout(reset, 1200);
    
}
function atras() {
    index--;
    carrusel.style.transition = "transform 1200ms";
    carrusel.style.transform = `translateX(${-index * 50}%)`;
    setTimeout(reset, 1200);
    
}
function reset() {
    if (index >= totalOriginal) {
        carrusel.style.transition = "none";
        index = 0;
        carrusel.style.transform = "translateX(0%)";
    }
    if (index < 0) {
        index = totalOriginal - 1;
        carrusel.style.transition = "transform 1200 ms";
        carrusel.style.transform = `translateX(${-index * 50}%)`;
    }
}