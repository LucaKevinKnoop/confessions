// document.addEventListener('scroll', function () {
//   const pixels = Math.floor(window.pageYOffset);
//   pixelsTag.innerHTML = pixels;
//
//   const pageHeight = bodyTag.getBoundingClientRect().height;
//   // gBCR erzeugt ein Objekt mit den Maßen der Seite
//   // wirwollen den value des keys height
//
//   const totalScrollableDistance = pageHeight - window.innerHeight;
//   // windows ist auch ein Objekt mit den Werten des Fensters
//
//   const percentage = pixels / totalScrollableDistance *100;
//
//   progressTag.style.width = `${percentage}%`
//   // Backticks weil: Variablen-Schreibweise
//   console.log(percentage * 100);
//   //progessTag.style.width = percentage + "%";
//
//  // wenn das qoute im Bereich zwischen 6 und 18 ist,
//  // entferne die Klasse "hide"
//  // und füge Klasse "show hinzu";
//  // (6 < percentage < 18);
// if (percentage > 6 && percentage < 15) {
//   quoteTag.classList.remove('hide');
//   quoteTag.classList.add ('show');
//   }
//  //ansonsten:
//  // entferne KLasse "show"
//  //füge Klasse "hide" hinzu;
//  else {
//    quoteTag.classList.remove('show');
//    quoteTag.classList.add('hide');
//  };
// });
