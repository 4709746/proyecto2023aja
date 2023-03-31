//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
    menu.style.display = "block";
    menu_visible = true;
}
else{
    menu.style.display = "none";
    menu_visible = false;
}
}
//oculto el menu una vez selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;
function efectoHabilitado(){
    var habilidades = document.getElementById("habilidades");
    var disttancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(disttancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml= setInterval(function(){
            pintarbarra(html, 15, 0, intervalHtml);
        },100);
        const intervalJavascript= setInterval(function(){
            pintarbarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress= setInterval(function(){
            pintarbarra(wordpress, 10, 2, intervalWordpress);
        },100);
        const intervalConstruccion= setInterval(function(){
            pintarbarra(construccion, 8, 3, intervalConstruccion);
        },100);
        const intervalMecanicadelautomotriz= setInterval(function(){
            pintarbarra(mecanicadelautomotriz, 16, 4, intervalMecanicadelautomotriz);
        },100);
        const intervalGacista= setInterval(function(){
            pintarbarra(gacista, 14, 5, intervalGacista);
        },100);


    }
}



function pintarbarra(id_barra, cantidad, indice, intervalo){
    contadores[indice]++;
    x= contadores[indice];
    if (x<cantidad) {
        let elementos=id_barra.getElementsByClassName("e");    
        elementos[x].style.backgroundColor="#940253";
    }else{
        clearInterval(interval)
    }
}
window.onscroll =function (){
    efectoHabilitado();
    
}
