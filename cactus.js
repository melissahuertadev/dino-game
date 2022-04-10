import {
  getCustomProperty,
  setCustomProperty,
  incrementCustomProperty,
} from "./updateProperty.js";

/*
  SPEED: has to be the same as the speed of the ground
  CACTUS_INTERVAL_... Time between cactuses appear (.5s and 2s)
*/

const SPEED = 0.042;
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;
const worldElem = document.querySelector("[data-world]");
let nextCactustime;

export function setupCactus() {
  nextCactustime = CACTUS_INTERVAL_MIN;
  document.querySelectorAll("[data-cactus]").forEach(cactus => {
    cactus.remove();
  })
}

export function updateCactus(delta, speedScale) {
  document.querySelectorAll("[data-cactus]").forEach((cactus) => {
    incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1);

    if (getCustomProperty(cactus, "--left") <= -100) {
      cactus.remove();
    }
  });

  if (nextCactustime <= 0) {
    createCactus();
    nextCactustime =
      randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) /
      speedScale;
  }

  nextCactustime -= delta;
}

export function getCactusRects(){
    return [...document.querySelectorAll("[data-cactus]")].map(cactus => {
        return cactus.getBoundingClientRect();
    });
}

function createCactus() {
  const cactus = document.createElement("img");

  cactus.dataset.cactus = true;
  cactus.src = "img/cactus.png";
  cactus.classList.add("cactus");
  setCustomProperty(cactus, "--left", 100);
  worldElem.append(cactus);
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
