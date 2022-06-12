/*
// version hard-coding de zouille

const input = document.querySelector("#input");

let clrs = ["red", "red violet", "violet",
  "blue violet", "blue", "blue green",
  "green", "yellow green", "yellow",
  "yellow orange", "orange", "red orange"]

let comp = ["Green", "Yellow green", "Yellow",
  "Yellow orange", "Orange", "Red orange",
  "Red", "Red violet", "Violet",
  "Blue violet", "Blue", "Blue green"]

const compColors = new Map([
  ["red", {
            comp: "Green",
            triadique: ["Blue", "Yellow"],
            tetra : [] // TODO zouille
          }],
  ["red violet", "Yellow green"],
  ["violet", "Yellow"],
  ["blue violet", "Yellow orange"],
  ["blue", "Orange"],
  ["blue green", "Red orange"],
  ["green", "Red"],
  ["yellow green", "Red violet"],
  ["yellow", "Violet"],
  ["yellow orange", "Blue violet"],
  ["orange", "Blue"],
  ["red orange", "Blue green"]
]);

function complementary() {
  let compColor = compColors.get(input.value.toLowerCase());
  msg.innerText = "La couleur complémentaire de " + input.value.toLowerCase() + " est " + compColor.comp;
  //document.querySelector("#msg").innerText = "La couleur complémentaire de " + input.value.toLowerCase() + " est " + compColor;

  /*switch (input.value.toLowerCase()) {
    case clrs[0]: msg.innerText = "La couleur complémentaire de " + clrs[0].charAt(0).toUpperCase() + clrs[0].substring(1) + " est " + comp[0];
      break;
    case clrs[1]: msg.innerText = "La couleur complémentaire de " + clrs[1].charAt(0).toUpperCase() + clrs[1].substring(1) + " est " + comp[1];
      break;
    case clrs[2]: msg.innerText = "La couleur complémentaire de " + clrs[2].charAt(0).toUpperCase() + clrs[2].substring(1) + " est " + comp[2];
      break;
    case clrs[3]: msg.innerText = "La couleur complémentaire de " + clrs[3].charAt(0).toUpperCase() + clrs[3].substring(1) + " est " + comp[3];
      break;
    case clrs[4]: msg.innerText = "La couleur complémentaire de " + clrs[4].charAt(0).toUpperCase() + clrs[4].substring(1) + " est " + comp[4];
      break;
    case clrs[5]: msg.innerText = "La couleur complémentaire de " + clrs[5].charAt(0).toUpperCase() + clrs[5].substring(1) + " est " + comp[5];
      break;
    case clrs[6]: msg.innerText = "La couleur complémentaire de " + clrs[6].charAt(0).toUpperCase() + clrs[6].substring(1) + " est " + comp[6];
      break;
    case clrs[7]: msg.innerText = "La couleur complémentaire de " + clrs[7].charAt(0).toUpperCase() + clrs[7].substring(1) + " est " + comp[7];
      break;
    case clrs[8]: msg.innerText = "La couleur complémentaire de " + clrs[8].charAt(0).toUpperCase() + clrs[8].substring(1) + " est " + comp[8];
      break;
    case clrs[9]: msg.innerText = "La couleur complémentaire de " + clrs[9].charAt(0).toUpperCase() + clrs[9].substring(1) + " est " + comp[9];
      break;
    case clrs[10]: msg.innerText = "La couleur complémentaire de " + clrs[10].charAt(0).toUpperCase() + clrs[10].substring(1) + " est " + comp[10];
      break;
    case clrs[11]: msg.innerText = "La couleur complémentaire de " + clrs[11].charAt(0).toUpperCase() + clrs[11].substring(1) + " est " + comp[11];
      break;
    default: msg.innerText = "Ceci n'est pas une couleur valide";
  }*/
} //msg.innerText marche alors que j'ai pas créé de variable msg ?

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    complementary(e);
  }
});
*/

// version vue avec nabz

const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const msg = document.querySelector("#msg");
const msg2 = document.querySelector("#msg2");

const colors = new Map([
  ["red", {
    comp: "Green",
    tri: ["Blue", " Yellow"],
    tetra : []}
  ],
  ["red violet", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["violet", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["blue violet", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["blue", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["blue green", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["green", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["yellow green", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["yellow", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["yellow orange", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["orange", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
  ["red orange", {
    comp: "Green",
    tri: ["Blue", "Yellow"],
    tetra : []}
  ],
]);

function complementary() {
  let color = colors.get(input.value.toLowerCase());
  msg.innerText = "La couleur complémentaire de " + input.value.toLowerCase() + " est " + color.comp;
}

function triadic() {
  let color = colors.get(input2.value.toLowerCase());
  msg2.innerText = "Les couleurs triadiques de " + input2.value.toLowerCase() + " sont : " + color.tri;
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
