function breakTheText() {
  let h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else if(h1Text[idx] === " "){
        clutter += `<span class="b">&nbsp;</span>`;
    } 
    else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 65,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 55,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
});
