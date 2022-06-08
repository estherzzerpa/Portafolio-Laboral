const barra1 = document.querySelector('.bars_menu-1')
const barra2 = document.querySelector('.bars_menu-2')
const barra3 = document.querySelector('.bars_menu-3')

const opcionesMenu = document.querySelector('.opciones_menu')
const menuHamburguesa = document.querySelector('.menu_responsive')



menuHamburguesa.addEventListener("click", activar)


function activar(){
   barra1.classList.toggle("bars_efect-1")
   barra2.classList.toggle("bars_efect-2")
   barra3.classList.toggle("bars_efect-3")
   opcionesMenu.classList.toggle("menu_active")
}






