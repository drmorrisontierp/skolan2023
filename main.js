document.getElementById("start").onclick = () => start();
document.getElementById("stop").onclick = () => stop();

const ctx = document.getElementById("tree").getContext("2d");
const svg = document.getElementById("lights");
let lightIds = [];
let started = true;

const createSVGElement = (tag) => {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
};

const setAttributes = (element, attributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
};

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

const lightCoord = [
  ["180", "400"],
  ["220", "270"],
  ["260", "160"],
  ["420", "160"],
  ["460", "270"],
  ["500", "400"]
];

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
    fill: "yellow"
  });
  svg.appendChild(light);
  lightIds.push(_id);
}

function toggle_buttons(items) {
  items.forEach(function (item) {
    console.log(item);
    let elem = document.getElementById(item);
    let color = elem.getAttribute("fill");
    color == "yellow"
      ? elem.setAttribute("fill", "gold")
      : elem.setAttribute("fill", "yellow");
  });
  if (!started) return 0;
  setTimeout(() => toggle_buttons(items), 1000);
}

function stop() {
  started = false;
}

function start() {
  started = true;
  setTimeout(() => toggle_buttons(lightIds, 1000));
}


