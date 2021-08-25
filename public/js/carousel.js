var imagenes = ['/img/curso1.jpg','/img/curso2.jpg','/img/curso3.jpg',
                '/img/curso4.jpg'],
    texto = [''],
    cont = 0;

function carrousel (contenedor){
    contenedor.addEventListener('click', e => {
      let atras = contenedor.querySelector('.back'),
          adelante = contenedor.querySelector('.forward'),
          img = contenedor.querySelector('.course_img'),
          tgt = e.target;

      if(tgt == atras){

        if(cont > 0){
          img.src = imagenes [cont - 1];
          cont--;
        }

        else{
          img.src = imagenes [imagenes.length - 1];
          cont = imagenes.length - 1;
        }

      }
      else if(tgt = adelante){

        if(cont < imagenes.length - 1){
          img.src = imagenes [cont + 1];
          cont ++;
        }

        else{
          img.src = imagenes [0];
          cont = 0;
        }

      }
    });
}
document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.parent_container--corousel_courses--cont');

  carrousel(contenedor);
})