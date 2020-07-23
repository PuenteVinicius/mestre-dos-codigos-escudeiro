/* series carousel */

let index = 0;
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

const userNavigateClass = 'user__navigate--show';

function showNavegar() {
  const element =  document.getElementById("navigate");

  if(element.classList.contains(userNavigateClass)) {
    return element.classList.remove(userNavigateClass);
  }
  return element.classList.add(userNavigateClass);
}