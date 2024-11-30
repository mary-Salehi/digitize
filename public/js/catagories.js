'use strict';

const sidebar = document.querySelector('.sidebar')
const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');



const toggleClasses = function(classes , element){
    classes.forEach(cls => element.classList.toggle(cls));
}
sidebarOpenBtn.addEventListener('click' , function() {
    toggleClasses(['h-0' , 'p-0' , 'p-6'] , sidebar)
});
sidebarCloseBtn.addEventListener('click' , function(e) {
    e.target.addEventListener('click' , function(){
        toggleClasses(['h-0' , 'p-0' , 'p-6'] , sidebar)
    })
})
