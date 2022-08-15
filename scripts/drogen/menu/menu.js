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


const menuHover = document.querySelector('section.menu');

const menuChapter = document.querySelectorAll('div.menu-chapter');
const menuDescription = document.querySelectorAll('div.menu-description');
const menuImage = document.querySelectorAll('div.menu-image');

menuHover.addEventListener('mouseover', function(){
  // menuChapter.forEach(changeWidth)
  // .style.width = "29,5vw";
  // .style.width = "29,5vw";
});

menuHover.addEventListener('mouseout', function(){
  // .style.width = "16vw";
  // .style.width = "23vw";
  // .style.width = "23vw";
});

// function changeWidth(){
//   menuChapter.style
// };
