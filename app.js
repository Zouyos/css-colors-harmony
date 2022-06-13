const input = document.querySelector("#input").toLowerCase();
const input2 = document.querySelector("#input2").toLowerCase();
const msg = document.querySelector("#msg").toLowerCase();
const msg2 = document.querySelector("#msg2").toLowerCase();

const colors = new Map([
  ["red", {
    comp: "Green",
    tri: ["Blue", " Yellow"],
    tetra : []}
  ],
  ["red violet", {
    comp: "Yellow green",
    tri: ["Blue green", " Yellow orange"],
    tetra : []}
  ],
  ["violet", {
    comp: "Yellow",
    tri: ["Green", " Orange"],
    tetra : []}
  ],
  ["blue violet", {
    comp: "Yellow orange",
    tri: ["Yellow green", " Red orange"],
    tetra : []}
  ],
  ["blue", {
    comp: "Orange",
    tri: ["Yellow", " Red"],
    tetra : []}
  ],
  ["blue green", {
    comp: "Red orange",
    tri: ["Yellow orange", " Red violet"],
    tetra : []}
  ],
  ["green", {
    comp: "Red",
    tri: ["Orange", " Violet"],
    tetra : []}
  ],
  ["yellow green", {
    comp: "Red violet",
    tri: ["Red orange", " Blue violet"],
    tetra : []}
  ],
  ["yellow", {
    comp: "Violet",
    tri: ["Red", " Blue"],
    tetra : []}
  ],
  ["yellow orange", {
    comp: "Blue violet",
    tri: ["Red viloet", " Blue green"],
    tetra : []}
  ],
  ["orange", {
    comp: "Blue",
    tri: ["Violet", " Green"],
    tetra : []}
  ],
  ["red orange", {
    comp: "Blue green",
    tri: ["Blue violet", " Yellow green"],
    tetra : []}
  ],
]);

function complementary() {
  let color = colors.get(input.value);
  msg.innerText = "La couleur complémentaire de " + color.charAt(0).toUpperCase() + color.substring(1) + " est " + color.comp;
}

function triadic() {
  let color = colors.get(input2.value.toLowerCase());
  msg2.innerText = "Les couleurs triadiques de " + color.charAt(0).toUpperCase() + color.substring(1) " sont : " + color.tri;
}

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    complementary(e);
  }
});

input2.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    triadic(e);
  }
});
