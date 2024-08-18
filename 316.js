//let headerEl = document.getElementById

const mainEl = document.querySelector("main");

//step 2 - apply background color
mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = '<h1> Dom Manipulation <h1>'

mainEl.setAttribute('class', 'flex-ctr')

//pt2//

const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var--(top-menu-bg)'
topMenuEl.setAttribute('class', 'flex-around');

var menuLinks = [
  { text: 'about', href: '/about' },
 { text: 'catalog', href: '/catalog' },
 { text: 'orders', href: '/orders' },
 { text: 'account', href: '/account' },
];

