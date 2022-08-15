const voicesTag = document.querySelector('span.voices-headline');

setInterval(voicesColor, 1500);

let varVoicesColor = 1;

function voicesColor() {
  if (varVoicesColor == 1) {
    voicesTag.style.color = "#000";
    varVoicesColor = 0;
  }
  else {
    voicesTag.style.color = "#fff";
    varVoicesColor = 1;
  }};
