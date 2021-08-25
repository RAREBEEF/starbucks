// 워터마크
console.log('RAREBEEF')


// 검색창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//헤더 메뉴 애니메이션
const mainMenu = document.querySelector('header .main_menu');
const mainMenuItem = document.querySelectorAll('header .main_menu .item');

mainMenu.addEventListener('mouseover', function () {
  mainMenuItem.forEach(function (el, index) {
    let contentsEl = el.querySelector('.item__contents');
    el.addEventListener('mouseout', function () {
      gsap.to(contentsEl, 0, {
        opacity: 0
      });
    });
    el.addEventListener('mouseover', function () {
      gsap.to(contentsEl, 0, {
        opacity: 1
      });
    });
  });
});

// copyright 연도 최신화
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();