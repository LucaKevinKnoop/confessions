// MENÜ EIN- UND AUSBLENDEN ÜBER DEN BUTTON:
const menuTag = document.querySelector('section.menu-wrapper');

const buttonTag = document.querySelector('div.menu-button');

let toggleMenu = false;

buttonTag.addEventListener('click', function () {
  if (toggleMenu == false) {
    menuTag.style.display = "block";
    toggleMenu = true;
  }
  else {
    menuTag.style.display = "none";
    toggleMenu = false;
  }
});

//
// const menuHover = document.querySelector('section.menu');
//
// const menuChapter = document.querySelectorAll('div.menu-chapter');
// const menuDescription = document.querySelectorAll('div.menu-description');
// const menuImage = document.querySelectorAll('div.menu-image');

// LINKS AUF DIE EINZELNEN MENÜBLÖCKE GEBEN:
// die einzelnen Blöcke selektieren:
const menuPoetry = document.querySelector('div.menu-poetry');
const menuGraffiti = document.querySelector('div.menu-graffiti');
const menuAdhs = document.querySelector('div.menu-adhs');
const menuNachbarschaft = document.querySelector('div.menu-nachbarschaft');
const menuDrogen = document.querySelector('div.menu-drogen');
const menuArzt = document.querySelector('div.menu-arzt');

// BLÖCKE KLICKBAR MACHEN:
menuPoetry.addEventListener('click', function () {
  // Das Menü nach Benutzung ausblenden:
  menuTag.style.display = "none";
  toggleMenu = false;
  // Seite wird zu entsprechendem Kapitel gescrollt:
  document.getElementById('poetry-link').scrollIntoView({
  behavior: 'smooth'
});
});

menuGraffiti.addEventListener('click', function () {
  menuTag.style.display = "none";
  toggleMenu = false;
  document.getElementById('graffiti-link').scrollIntoView({
  behavior: 'smooth'
});
});

menuAdhs.addEventListener('click', function () {
  menuTag.style.display = "none";
  toggleMenu = false;
  document.getElementById('adhs-link').scrollIntoView({
  behavior: 'smooth'
});
});

menuNachbarschaft.addEventListener('click', function () {
  menuTag.style.display = "none";
  toggleMenu = false;
  document.getElementById('nachbarschaft-link').scrollIntoView({
  behavior: 'smooth'
});
});

menuDrogen.addEventListener('click', function () {
  menuTag.style.display = "none";
  toggleMenu = false;
  document.getElementById('drogen-link').scrollIntoView({
  behavior: 'smooth'
});
});

menuArzt.addEventListener('click', function () {
  menuTag.style.display = "none";
  toggleMenu = false;
  document.getElementById('arzt-link').scrollIntoView({
  behavior: 'smooth'
});
});
