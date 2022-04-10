import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateProperty.js";

const SPEED = 0.042;
const groundElems = document.querySelectorAll("[data-ground]");

export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0);
  setCustomProperty(groundElems[1], "--left", 300);
}

/*
    Increment the '--left' property of the 'ground' element by
    scaling delta time, SPEED and -1 to move backwards.

    Putting each ground next to each other, the value -300 and 600
    depends on the width of the ground
     width: 300%;
*/
export function updateGround(delta, speedScale) {
  groundElems.forEach((ground) => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);

    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
}
