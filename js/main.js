// cliccando il menù hamburger tutto lo sfodo diventa grigio chiaro, in alto a destra ho una X che mi riporta alla condizione normale, e ongi li occupa una riga ed è bvianco e sottolineato.

// far si che quando clicco sull'hamburger si attivi il div con classe hamburger-mune e active e quando riclicco che torni tutto normale

// selezionare l'hamburger-menu per verificare in console le classi che ha all'inizio
const HamburgerHideList = document.querySelector('.hamburger-menu');
console.log(HamburgerHideList.classList.value);

// selezionare l'icona dell'hamburger affinché possa usarla come evento (il click)
const HamburgerBtn = document.querySelector('div.header-right > a');
// impostare l'evento del click sull'icona dell'hamburger per aggiungere la classe active al div.hamburger-menu
HamburgerBtn.addEventListener('click', function () {
  HamburgerHideList.classList.add('active');
  console.log('classi quando clicco icona hamburger:', HamburgerHideList.classList.value);
});

// selezionare l'icona della croce affinché possa usarla come evento (il click)
const CloseBtn = document.querySelector('div.hamburger-menu > a.close');
// impostare l'evento del click sull'icona della croce per rimuovere la classe active al div.hamburger-menu
CloseBtn.addEventListener('click', function () {
  HamburgerHideList.classList.remove('active');
  console.log('classi quando clicco icona croce:', HamburgerHideList.classList.value);
});





