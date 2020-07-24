const userNavigateClass = 'user__navigate--show';
const headerClass = 'header--opacity';

let index = 0;
/* series carousel */

function show(increase, type) {
  const classItens = `li.carousel__list-item.carousel__list-item--${type}`
  let liEls = document.querySelectorAll(classItens);
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}

/* showNavegar */


function showNavegar() {
  const element =  document.getElementById('navigate');

  if(element.classList.contains(userNavigateClass)) {
    return element.classList.remove(userNavigateClass);
  }
  return element.classList.add(userNavigateClass);
}

/* opacity on scroll */

window.onscroll = function (e) {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  const element = document.getElementById('header');

  if(top >= 200) {
    if(!element.classList.contains(headerClass)) {
      return element.classList.add(headerClass);
    }
  } 
  else {
    if(element.classList.contains(headerClass)) {
      return element.classList.remove(headerClass);
    }
  }
} 

