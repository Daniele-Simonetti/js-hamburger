// cliccando il menù hamburger tutto lo sfodo diventa grigio chiaro, in alto a destra ho una X che mi riporta alla condizione normale, e ongi li occupa una riga ed è bvianco e sottolineato.

// far si che quando clicco sull'hamburger si attivi il div con classe hamburger-mune e active e quando riclicco che torni tutto normale

// 1. aggiungere la classe active all'hamburger menù quando clicco l'icona hamburger
const HamburgerHideList = document.querySelector('.hamburger-menu');
console.log(HamburgerHideList.classList.value);

const HamburgerBtn = document.querySelector('div.header-right a')

HamburgerBtn.addEventListener('click', function (){
  HamburgerHideList.classList.add ('active');
});
console.log(HamburgerHideList.classList.value);
//  2. quando clicco sull'icona della croce rimuovo la classe active dall'hamburger menu



