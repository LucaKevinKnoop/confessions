gsap.registerPlugin(ScrollTrigger);


// gsap.to('#poetry1', {
//   scrollTrigger: {
//   trigger: "#poetry1",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry2', {
//   scrollTrigger: {
//   trigger: "#poetry2",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry3', {
//   scrollTrigger: {
//   trigger: "#poetry3",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry4', {
//   scrollTrigger: {
//   trigger: "#poetry4",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry5', {
//   scrollTrigger: {
//   trigger: "#poetry5",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry6', {
//   scrollTrigger: {
//   trigger: "#poetry6",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });
//
// gsap.to('#poetry7', {
//   scrollTrigger: {
//   trigger: "#poetry7",
//   start: "top center"},
//   x: 15, opacity: 1, duration: 1,
// });

// Poetry Lines #########################
gsap.from('#poetryLine1', {
  scrollTrigger: {
  trigger: "#poetryLine1",
  start: "top center"},
  x: -15, opacity: 0, duration: 1.5, rotation: -60,
});

gsap.from('#poetryLine4', {
  scrollTrigger: {
  trigger: "#poetryLine4",
  start: "top center"},
  x: -15, opacity: 0, duration: 1.5, rotation: -60,
});

gsap.from('#poetry-wege-bauen', {
  scrollTrigger: {
  trigger: "#poetry-wege-bauen",
  start: "bottom bottom"},
  opacity: 0, duration: 1.5,
});
