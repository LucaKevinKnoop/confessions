gsap.registerPlugin(ScrollTrigger);

// Explosion Start
gsap.to('#explosion1', {
  scrollTrigger: {
  trigger: ".adhs-h1",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
  opacity: 0, y: -100, x: -50, duration: 1.5, scale: 2.5,
});

gsap.to('#explosion2', {
  scrollTrigger: {
  trigger: ".adhs-h1",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
  opacity: 0, y: 50, x: -50, duration: 1.5, scale: 2.5,
});

gsap.to('#explosion3', {
  scrollTrigger: {
  trigger: ".adhs-h1",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
  opacity: 0, y: -100, x: 50, duration: 1.5, scale: 2.5,
});

gsap.to('#explosion4', {
  scrollTrigger: {
  trigger: ".adhs-h1",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
  opacity: 0, y: 50, x: 100, duration: 1.5, scale: 2.5,
});


// Störung
gsap.to('.adhs-stoerung', {
  scrollTrigger: {
  trigger: ".adhs-stoerung",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  duration: 1,
  opacity: 1,
});

// stuhl
let stuhltimeline = gsap.timeline({
  scrollTrigger: {
  trigger: "#adhs-stuhl",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15, x: -10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15, x: -10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});


// Explosion klein
gsap.to('#explosion-klein', {
  scrollTrigger: {
  trigger: "#explosion-klein",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  scale: 1.5,
  duration: 2.5,
});


// // Kontrolle
// gsap.to('#adhs-kontrolle', {
//   scrollTrigger: {
//   trigger: ".adhs-kontrolle",
//   start: "top center",
//   toggleActions: "restart pause reverse none"},
//   x: 40,
//   duration: 1,
//   opacity: 1,
// });


// Pillen
let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".adhs-text9",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

tl.to("#tablette1", { duration: 2, opacity: 0, rotation: 180, y: 750});
tl.to("#tablette2", { duration: 2, opacity: 0, rotation: -180, y: 750});
tl.to("#tablette3", { duration: 2, opacity: 0, rotation: 180, y: 750});


// Doktor Animations ######################################

let doktortimeline1 = gsap.timeline({
  scrollTrigger: {
  trigger: "#background-1",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
});

doktortimeline1.to("#fussstapfen1", { opacity: 1});
doktortimeline1.to("#fussstapfen2", { opacity: 1});
doktortimeline1.to("#fussstapfen3", { opacity: 1});


gsap.to('#kreuz', {
  scrollTrigger: {
  trigger: ".doktor-bold3",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 530,
  duration: 3,
  opacity: 1,
});

gsap.to('#kleeblatt1', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 300,
  duration: 3,
  opacity: 1,
  rotate: 30,
});

gsap.to('#kleeblatt2', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 100,
  duration: 3,
  opacity: 1,
  rotate: 45,
});

gsap.to('#kleeblatt3', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 75,
  duration: 3,
  opacity: 1,
  rotate: -15,
});

gsap.to('#kleeblatt4', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 100,
  duration: 3,
  opacity: 1,
  rotate: -60,
});

gsap.to('#kleeblatt5', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 300,
  duration: 3,
  opacity: 1,
  rotate: -30,
});

gsap.to('#megafon', {
  scrollTrigger: {
  trigger: ".doktor-light9",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  scale: 1.5,
  duration: 2,
});


let doktortimeline2 = gsap.timeline({
  scrollTrigger: {
  trigger: ".doktor-light13",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

doktortimeline2.to("#herz1", { scale: 1.2});
doktortimeline2.to("#herz1", { scale: 1.0});
doktortimeline2.to("#herz1", { scale: 1.2});
doktortimeline2.to("#herz1", { scale: 1.0});
doktortimeline2.to("#herz1", { scale: 1.2});
doktortimeline2.to("#herz1", { scale: 1.0});

gsap.to('#verdienstkreuz', {
  scrollTrigger: {
  trigger: ".doktor-light14",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 700,
  duration: 6,
});

// Graffiti ###########################
gsap.to('#schlauchboot', {
  scrollTrigger: {
  trigger: ".graffiti-zuege",
  start: "bottom bottom",
  toggleActions: "restart pause reverse none"},
  x: 200,
  duration: 3.5,
});

// gsap.to('.zuege-text', {
//   scrollTrigger: {
//   trigger: ".graffiti-zuege",
//   start: "bottom bottom",
//   toggleActions: "restart pause reverse none"},
//   opacity: 1,
//   duration: 2,
// });

// Nachbarschaft ###########################
gsap.to('.nachbarschaft-headline1', {
  scrollTrigger: {
  trigger: ".nachbarschaft-headline1",
  start: "top center"},
  y: 25,
  duration: 2,
});

gsap.to('.nachbarschaft-headline3', {
  scrollTrigger: {
  trigger: ".nachbarschaft-headline1",
  start: "bottom center"},
  opacity: 1,
  x: 25,
  duration: 2,
});
