const pageOne = document.querySelector(".page1");

const cursor = document.querySelector(".cursor");

pageOne.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
  });
});

pageOne.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
  });
});

pageOne.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0,
    opacity: 0,
  });
});
