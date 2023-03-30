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
//creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0; i<=16;i++){
        let div = document.createElement("div");
        div.className= "e";
        id_barra.appendChid(div);

    }
}
// selecciono todas las barras generales para luego manipurarlas 
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordspress = document.getElementById("wordspress");
crearBarra(wordspress);
let photoshop= document.getElementById("photoshop");
crearBarra(photoshop);
let construccion= document.getElementById("construccion");
crearBarra(construccion);
let gacista = document.getElementById("gacista");
crearBarra(gacista);