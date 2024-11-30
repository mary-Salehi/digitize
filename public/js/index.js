'use strict';

const sidebarCat = document.querySelector('.sidebar__catagories');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar')
const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

// Section scrollbar

// const scrollFunction = function(e, link) {
//     e.preventDefault();
//     if (e.target.classList.contains(link)) {
//         const id = e.target.getAttribute('href');
//         const target = document.querySelector(id);
//         const navHeight = navbar.offsetHeight;
//         target.classList.add(`${navHeight === 88 ? 'scroll-mt-[108px]' : 'scroll-mt-[124px]' }`)
//         target.scrollIntoView({behavior: 'smooth'});
//     }
// }

navbar.addEventListener('click' , function(e) {
    e.preventDefault();
    if (e.target.classList.contains('navbar__link')) {
        const id = e.target.getAttribute('href');
        const target = document.querySelector(id);
        const navHeight = navbar.offsetHeight;
        target.classList.add(`${navHeight === 88 ? 'scroll-mt-[108px]' : 'scroll-mt-[124px]' }`)
        target.scrollIntoView({behavior: 'smooth'});
    }
})

//sidebarCat.addEventListener('click', scrollFunction(e,sidebar__link))

sidebarCat.addEventListener('click' , function(e) {
    e.preventDefault();
    if (e.target.classList.contains('sidebar__link')) {
        const id = e.target.getAttribute('href');
        const target = document.querySelector(id);
        const navHeight = navbar.offsetHeight;
        target.classList.add(`${navHeight === 88 ? 'scroll-mt-[108px]' : 'scroll-mt-[124px]' }`)
        target.scrollIntoView({behavior: 'smooth'});
    }
});

// sidebar open close

//toggle classes
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