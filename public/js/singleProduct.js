'use strict'
const tabsContainer = document.querySelector('.info__tab-container');
const tabsContentContainer = document.querySelector('.info__contents');
const tabsContent = document.querySelectorAll('.info__content');
const tabsBtn = document.querySelectorAll('.info__tab');

const moreTextBtn = document.querySelector('.more-text-btn');
const reviewShortTxt = document.querySelector('.review__short-text');
const reviewFulltTxt = document.querySelector('.review__full-text');

const quickAccessSidebar = document.querySelector('.quick-access');
const navbar = document.querySelector('.navbar');
console.log(navbar);

moreTextBtn.addEventListener('click' , function() {
    if (reviewFulltTxt.classList.contains('hidden')) {
        reviewFulltTxt.classList.remove('hidden');
        reviewShortTxt.classList.add('hidden');
    }
})

tabsContainer.addEventListener('click' , function(e) {
    console.log('it works');
    const clicked = e.target;
    if (clicked.classList.contains('info__tab')) {
        tabsBtn.forEach(tab => tab.classList.remove('text-slate-800' , 'bg-white', 'rounded-3xl', 'shadow-md'));
        clicked.classList.add('text-slate-800' , 'bg-white', 'rounded-3xl', 'shadow-md');
        console.log(tabsContentContainer);
        tabsContent.forEach(content => content.classList.add('hidden'));
        const targetContent = document.querySelector(`.info__content--${clicked.dataset.tab}`).classList.remove('hidden');
    }
});

// quick accessibility scroll

quickAccessSidebar.addEventListener('click' , function(e) {
    if(e.target.classList.contains('quick-access__link')) {
        const id = e.target.getAttribute('href');
        const target = document.querySelector(id);
        const navHeight = navbar.offsetHeight;
        target.classList.add(`${navHeight === 88 ? 'scroll-mt-[108px]' : 'scroll-mt-[124px]' }`);
        target.scrollIntoView({behavior: 'smooth'});
    }
})



