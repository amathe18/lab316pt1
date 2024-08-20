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

//var menuLinks = [
  //{ text: 'about', href: '/about' },
 //{ text: 'catalog', href: '/catalog' },
// { text: 'orders', href: '/orders' },
// { text: 'account', href: '/account' },
//];

//Updated Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text
  topMenuEl.appendChild(a);
})

//pt 3

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 0;

//grab all top menu a el 

const topMenuLinks = document.querySelectorAll('a');

topMenuEl.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.matches('a')) {
    return;
  }

  console.log(e.target.textContent);

  e.target.classList.toggle('active');

  topMenuLinks.forEach(link => {
    if (link != e.target) {
      link.classList.remove('active');
    }
  })

})

const e = clickedLink = menuLinks.find((link) => link.text === e.target.textContent);
if (e.target.classList.contains('active') && clickedLink.subLinks) {
  subMenuEl.style.top = '100%';
  buildSubMenu(clickedLink.subLinks);
} else {
  if (!clickedLink.subLinks) {
    subMenuEl.style.top = 0;

  }

}


function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute("href", link.href);
    a.textContent = link.text
    subMenuEl.appendChild(a);
  }
  )
};


