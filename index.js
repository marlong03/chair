let boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const fondo = document.getElementById('imagen')
var num = 1

boton1.addEventListener('click',function(){
    num += 1
    if(num == 4){
        num = 1
    }
    fondo.src = "./src/images/desktop-image-hero-"+ num +".jpg" 
})
boton2.addEventListener('click',function(){
    num -= 1 
    if(num == 0){
        num = 3
    }
    fondo.src = "./src/images/desktop-image-hero-"+ num +".jpg" 
})
