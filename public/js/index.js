/* series carousel */

let index = 0;
window.show = function(increase, type) {
  const classItens = `li.carousel__list-item.carousel__list-item--${type}`
  let liEls = document.querySelectorAll(classItens);
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}