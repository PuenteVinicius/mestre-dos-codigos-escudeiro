/* series carousel */

let liEls = document.querySelectorAll('li.carousel__list-item.carousel__list-item--series');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}

/* animes carousel */

let liEls = document.querySelectorAll('li.carousel__list-item.carousel__list-item--animes');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}


/* mais recente carousel */

let liEls = document.querySelectorAll('li.carousel__list-item.carousel__list-item--mais-recente');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}



/* minha-lista carousel */

let liEls = document.querySelectorAll('li.carousel__list-item.carousel__list-item--minha-lista');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});
}
