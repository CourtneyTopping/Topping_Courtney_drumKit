// when the user presses a key, find the corresponding audio file on the page amd play it//
(() => {
  console.log('drumkit js file loaded');


  function removeHighLight(e) {
    //console.log(e);
    if (e.propertyName !== "transform") {
      return;
    } else {
      e.target.classList.remove('playing');
    }
  }

//run this whnever a key gets pressed
  function logKey(e) {
    //debugger;
    //console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

//add a highlight to the key artwork on the screen
    key.classList.add('playing');


    //if theres no matching audio element. then dont do anything (avoid errors)
    if (!audio) { return; }

    //play the audio
    audio.currentTime = 0;
    audio.play();

  }

  const keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend',removeHighLight));

  window.addEventListener('keydown', logKey);
})();
