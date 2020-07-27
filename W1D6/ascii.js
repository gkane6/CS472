window.onload = () => {
  "use strict";
  let time = null;

  let latestType = "";

  const getAnimationType = () => {
    return document.getElementById("animation").value;
  };

  const getSize = () => {
    return document.getElementById("fontsize").value;
  };

  const isTurboChecked = () => {
    return document.getElementById("turbo").checked;
  };

  const setText = (str, idx) => {
    document.getElementById("text-area").value = str;
  };

  const showAnim = (anim) => {
    clearInterval(time);

    const animeType = getAnimationType();
    //const size = getSize();
    const isTurbo = isTurboChecked();
    let ms = 250;
    if (isTurbo) {
      ms = 50;
    }
    const animFram = anim[animeType].split("=====\n");
    //console.log(animFram);
    //document.getElementById("text-area").style.fontSize = size;
    let index = 0;

    time = setInterval(() => {
      if (index <= animFram.length - 1) {
        setText(animFram[index], index + 1);
        index++;
      } else {
        index = 0;
      }
    }, ms);
  };

  const onChangeTyp = () => {
    const animeType = getAnimationType();
    latestType = ANIMATIONS[animeType];
    setText(ANIMATIONS[animeType]);
  };

  const onChangeSize = () => {
    const sizer = getSize();
    document.getElementById("text-area").style.fontSize = sizer;
  };

  const onTurbo = () => {
    let index = 0;
    clearInterval(time);
    const animFram = latestType.split("=====\n");
    console.log(isTurboChecked());
    console.log("Turbo");
    if (buttonStart.disabled) {
      if (isTurboChecked()) {
        time = setInterval(() => {
          if (index <= animFram.length - 1) {
            setText(animFram[index], index + 1);
            index++;
          } else {
            index = 0;
          }
        }, 50);
      } else {
        time = setInterval(() => {
          if (index <= animFram.length - 1) {
            setText(animFram[index], index + 1);
            index++;
          } else {
            index = 0;
          }
        }, 250);
      }
    }
  };

  const onStop = () => {
    clearInterval(time);
    time = null;
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    animSelect.disabled = false;
    setText(latestType);
  };

  console.log(ANIMATIONS);
  const animSelect = document.getElementById("animation");
  animSelect.onchange = onChangeTyp;
  const buttonStart = document.getElementById("start");
  const buttonStop = document.getElementById("stop");

  const sizeSelect = document.getElementById("fontsize");
  sizeSelect.onchange = onChangeSize;

  const turbo = document.getElementById("turbo");
  turbo.onchange = onTurbo;

  buttonStop.onclick = onStop;

  buttonStart.onclick = () => {
    showAnim(ANIMATIONS);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    animSelect.disabled = true;
  };
};
