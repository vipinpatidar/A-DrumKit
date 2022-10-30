console.log("Hii");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function running all together

  audio.currentTime = 0;
  audio.play();
  // console.log(audio);

  const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  keys.classList.add("playing");
  // console.log(keys);
}

function removeClass(e) {
  if (e.propertyName !== "transform") return; // stop this if it is not transform
  console.log(e.propertyName);
  this.classList.remove("playing");
}

// function clickMe(e){
//   const a
// }

const key = document.querySelectorAll(".key");

key.forEach((key) => {
  key.addEventListener("transitionend", removeClass);
  key.addEventListener("click", (e) => {
    const audio = document.querySelector(
      `audio[data-key="${e.target.attributes["data-key"].nodeValue}"]`
    );
    audio.currentTime = 0;
 audio.play();
    // console.log(e.target.attributes["data-key"].nodeValue);
  });
});
window.addEventListener("keydown", playSound);
