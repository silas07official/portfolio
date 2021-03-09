function showContent(){
    let show = setTimeout( function show(){
     document.getElementById('page-content').style.display = "Block"
     document.getElementById('loading').style.display = "none"
     document.getElementById('loader-wrapper').style.display = "none"
    },3000)
}
// Mobile Menu
const menu = document.getElementById('menuBtn')
menu.addEventListener('click', menuToggle)

menuItems = document.getElementById('menuItems')
menuItems.style.maxHeight ="0px"
function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.top = 0
        menuItems.style.maxHeight ="100%"
    }
}
function closeMenu(){
    menuItems.style.maxHeight ="0px"
   }