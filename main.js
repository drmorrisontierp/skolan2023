// OBS ÄNDRA INTE bara kopiera och klistra in ovanför koden för din träd

document.getElementById("start").onclick = () => start();
const ctx = document.getElementById("tree").getContext("2d");
const svg = document.getElementById("lights");
let started = true;

const createSVGElement = (tag) => {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
};

const setAttributes = (element, attributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};

const drawLights = (lightCoords) => {
  let lightIds = [];
  for (let x = 0; x < lightCoord.length; x++) {
    let _id = "light" + x;
    let light = createSVGElement("circle");
    setAttributes(light, {
      id: _id,
      cx: lightCoord[x][0],
      cy: lightCoord[x][1],
      r: "7",
      stroke: "black",
      "stroke-width": "1",
      fill: lightOff
    });
    svg.appendChild(light);
    lightIds.push(_id);
  }
  return lightIds;
};

const toggle_lights = (items) => {
  items.forEach((item) => {
    let elem = document.getElementById(item);
    let color = elem.getAttribute("fill");
    color === lightOn ?
      elem.setAttribute("fill", lightOff) :
      elem.setAttribute("fill", lightOn);
  });
  if (!started) return 0;
  setTimeout(() => toggle_lights(items), flashTime);
};

const stop = () => {
  document.getElementById("start").innerHTML = "start";
  document.getElementById("start").onclick = () => start();
  started = false;
};

const start = () => {
  document.getElementById("start").innerHTML = "stop";
  document.getElementById("start").onclick = () => stop();
  started = true;
  setTimeout(() => toggle_lights(lightIds, flashTime));
};

// Träd börja här (din träd kod ska ser utt lite som den här nedanför)

ctx.fillStyle = "brown";
ctx.strokeStyle = "black";
ctx.fillRect(320, 400, 40, 50);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(340, 400);

ctx.lineTo(180, 400);
ctx.lineTo(270, 270);
ctx.lineTo(220, 270);
ctx.lineTo(300, 160);
ctx.lineTo(260, 160);
ctx.lineTo(340, 50);
ctx.lineTo(420, 160);
ctx.lineTo(380, 160);
ctx.lineTo(460, 270);
ctx.lineTo(410, 270);
ctx.lineTo(500, 400);
ctx.lineTo(340, 400);

ctx.fill();
ctx.stroke();

// nya kod till lamporna

const lightCoord = [
  ["180", "400"],
  ["220", "270"],
  ["260", "160"],
  ["420", "160"],
  ["460", "270"],
  ["500", "400"]
];

const lightOn = "red";
const lightOff = "blue";
const flashTime = 1000;

const lightIds = drawLights(lightCoord);
