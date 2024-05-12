
/*SELECCION CAMISETAS CHILE*/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de las imágenes
    let imgchange = document.getElementById("imgChange");
    let imgchange2 = document.getElementById("imgChange2");
    let imgchange3 = document.getElementById("imgChange3");
    let imgchange5 = document.getElementById("imgChange5");
    let imgchange6 = document.getElementById("imgChange6");
    let imgchange1 = document.getElementById("imgChange1");
    let imgchange8 = document.getElementById("imgChange8");
    // Obtener los botones de cambio de imagen
    let localBtn = document.getElementById("local");
    let visitaBtn = document.getElementById("visita");
    let alternativaBtn = document.getElementById("alternativa");
    // Definir las rutas de las imágenes para COLOCOLO
    let imgLocal = "./imagenes/Latinoamerica/chile/Camiseta_Local_Colo-Colo_2024_Blanco_IQ2515_01_laydown.avif";
    let imgVisita = "./imagenes/Latinoamerica/chile/Camiseta_Visita_Colo-Colo_2024_Negro_IZ0720_01_laydown.avif" ;
    let imgAlternativa = "./imagenes/Latinoamerica/chile/COLO_3RD_JSY_Dorado_GC6046_01_laydown.avif";
    // Definir las rutas de las imágenes para LAU
    let imgLocal2 = "./imagenes/Latinoamerica/chile/ULOCAL.avif";
    let imgVisita2 = "./imagenes/Latinoamerica/chile/Camiseta_Visita_Universidad_de_Chile_2024_Morado_IU8242_01_laydown.avif";
    let imgAlternativa2 = "./imagenes/Latinoamerica/chile/camiseta-u-alternativa.avif";
    // Definir las rutas de las imágenes para CHILE
    let imgLocal3 = "./imagenes/Latinoamerica/chile/Camiseta_Local_Chile_2024_Rojo_IP8453_01_laydown.avif";
    let imgVisita3 = "./imagenes/Latinoamerica/chile/Camiseta_Visitante_Chile_2024_Bl_2_840x840.webp";
    let imgAlternativa3 = "";
    // Definir las rutas de las imágenes para ARGENTINA
    let imgLocal1 = "./imagenes/Latinoamerica/ARGENTINA/ARGENTINALOCAL.jpeg";
    let imgVisita1 = "./imagenes/Latinoamerica/ARGENTINA/ARGENTINA VISITA.webp";
    let imgAlternativa1 = "";
    // Definir las rutas de las imágenes para BRASIL
    let imgLocal5 = "./imagenes/Latinoamerica/brasil/brasillocal.webp";
    let imgVisita5 = "./imagenes/Latinoamerica/brasil/BRASIL-LOCAL.jpg";
    let imgAlternativa5 = "";
    // Definir las rutas de las imágenes para BRASIL
    let imgLocal8 = "./imagenes/Europa/Francia/polera_psg.jpg";
    let imgVisita8 = "./imagenes/Europa/Francia/polera_visita_psg.jpg";
    let imgAlternativa8 = "";
    // Definir las rutas de las imágenes para madrid
    let imgLocal6 = "./imagenes/Europa/España/Polera_RealMadrid.webp";
    let imgVisita6 = "./imagenes/Europa/España/RMCFMZ0130-01_aa1d0e8c-4c9a-443f-a226-d57e18ccd661.webp";
    let imgAlternativa6 = "";
    // cambiar imagen segun boton L/V/A
    function changeImage(color, imgElement, imgLocal, imgVisita, imgAlternativa) {
        if (color === 'local') {
            imgElement.src = imgLocal;
        } else if (color === 'visita') {
            imgElement.src = imgVisita;
        } else if (color === 'alternativa') {
            imgElement.src = imgAlternativa;
        } else {
            imgElement.src = imgLocal; 
        }
    }
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange, imgLocal, imgVisita, imgAlternativa);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange2, imgLocal2, imgVisita2, imgAlternativa2);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange3, imgLocal3, imgVisita3, imgAlternativa3);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange5, imgLocal5, imgVisita5, imgAlternativa5);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange6, imgLocal6, imgVisita6, imgAlternativa6);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange1, imgLocal1, imgVisita1, imgAlternativa1);
    });
    localBtn.addEventListener("click", function() {
        changeImage('local', imgchange8, imgLocal8, imgVisita8, imgAlternativa8);
    });

    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange, imgLocal, imgVisita, imgAlternativa);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange2, imgLocal2, imgVisita2, imgAlternativa2);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange3, imgLocal3, imgVisita3, imgAlternativa3);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange5, imgLocal5, imgVisita5, imgAlternativa5);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange6, imgLocal6, imgVisita6, imgAlternativa6);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange1, imgLocal1, imgVisita1, imgAlternativa1);
    });
    visitaBtn.addEventListener("click", function() {
        changeImage('visita', imgchange8, imgLocal8, imgVisita8, imgAlternativa8);
    });


    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange, imgLocal, imgVisita, imgAlternativa);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange2, imgLocal2, imgVisita2, imgAlternativa2);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange3, imgLocal3, imgVisita3, imgAlternativa3);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange5, imgLocal5, imgVisita5, imgAlternativa5);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange6, imgLocal6, imgVisita6, imgAlternativa6);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange1, imgLocal1, imgVisita1, imgAlternativa1);
    });
    alternativaBtn.addEventListener("click", function() {
        changeImage('alternativa', imgchange8, imgLocal8, imgVisita8, imgAlternativa8);
    });

    changeImage(color);
});

/*SELECCION CAMISETAS RESTO DEL MUNDO]*/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de las imágenes
    let imgchange4 = document.getElementById("imgChange4");
    let imgchange7 = document.getElementById("imgChange7");
    
    // Obtener los botones de cambio de imagen
    let local2Btn = document.getElementById("local2");
    let visita2Btn = document.getElementById("visita2");

    // Definir las rutas de las imágenes
    let imgLocal4 = "./imagenes/Europa/Alemania/BAYERLOCAL.jpg";
    let imgLocal7 = "./imagenes/Europa/Inglaterra/unitedlocal.webp";
    let imgVisita4 = "./imagenes/Europa/Alemania/LEVERKUSENLOCAL.jpg";
    let imgVisita7 = "./imagenes/Europa/Inglaterra/CITYLOCAL.png" ;

   // cambiar imagen segun boton L/V/A
   function changeImage(color, imgElement, imgLocal2, imgVisita2) {
    if (color === 'local2') {
        imgElement.src = imgLocal2;
    } else if (color === 'visita2') {
        imgElement.src = imgVisita2;
    } else {
        imgElement.src = imgLocal2; 
    }
}
    local2Btn.addEventListener("click", function() {
        changeImage('local2', imgchange4, imgLocal4, imgVisita4);
    });
    local2Btn.addEventListener("click", function() {
        changeImage('local2', imgchange7, imgLocal7, imgVisita7);
    });
    visita2Btn.addEventListener("click", function() {
        changeImage('visita2', imgchange4, imgLocal4, imgVisita4);
    });
    visita2Btn.addEventListener("click", function() {
        changeImage('visita2', imgchange7, imgLocal7, imgVisita7);
    });
    // Cambiar la imagen según el color proporcionado en la URL
    changeImage(color);
});
document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('mostrarWidget');
    var container = document.getElementById('container');
    var widgetMostrado = false;

    botao.addEventListener('click', function(event) {
        event.stopPropagation(); // Detiene la propagación del evento

        if (widgetMostrado) {
            container.style.display = 'none';
            widgetMostrado = false;
        } else {
            container.style.display = 'block';
            widgetMostrado = true;
        }
    });
});


