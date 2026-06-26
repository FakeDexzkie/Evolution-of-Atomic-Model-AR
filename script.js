const models = {
  dalton: {
    title: "Solid Sphere Model",
    scientist: "John Dalton · 1803",
    src: "models/dalton-solid-sphere.glb",
    ios: "models/dalton-solid-sphere.usdz",
    alt: "3D model of Dalton's solid sphere atom model",
    description: "Dalton described atoms as tiny, solid, indivisible spheres. He proposed that atoms of the same element are identical and that compounds are made from combinations of atoms.",
    strength: "Helped explain that each element has its own type of atom.",
    limit: "Atoms are not indivisible; they contain smaller particles.",
    question: "Why was Dalton's model useful even though it was not complete?"
  },
  thomson: {
    title: "Plum Pudding Model",
    scientist: "J. J. Thomson · 1904",
    src: "models/thomson-plum-pudding.glb",
    ios: "models/thomson-plum-pudding.usdz",
    alt: "3D model of Thomson's plum pudding atom model",
    description: "Thomson discovered electrons and imagined the atom as a positively charged sphere with negative electrons scattered inside it, like raisins in a pudding.",
    strength: "Recognized electrons as parts of atoms.",
    limit: "Did not include a nucleus and could not explain later experiments.",
    question: "What new particle did Thomson add to the idea of the atom?"
  },
  rutherford: {
    title: "Nuclear Model",
    scientist: "Ernest Rutherford · 1911",
    src: "models/rutherford-nuclear.glb",
    ios: "models/rutherford-nuclear.usdz",
    alt: "3D model of Rutherford's nuclear atom model",
    description: "Rutherford's gold foil experiment showed that most of the atom is empty space and that positive charge is concentrated in a small center called the nucleus.",
    strength: "Showed that atoms have a small, dense, positively charged nucleus.",
    limit: "Did not explain why electrons stay around the nucleus without collapsing into it.",
    question: "What did the gold foil experiment reveal about empty space inside the atom?"
  },
  bohr: {
    title: "Planetary Model",
    scientist: "Niels Bohr · 1913",
    src: "models/bohr-planetary.glb",
    ios: "models/bohr-planetary.usdz",
    alt: "3D model of Bohr's planetary atom model",
    description: "Bohr improved Rutherford's model by saying that electrons move around the nucleus in fixed energy levels, like planets following certain paths.",
    strength: "Explained stable electron orbits and helped explain the light spectra of some elements.",
    limit: "Works best for simple atoms and does not fully explain heavier atoms.",
    question: "How are Bohr's electron shells different from Rutherford's electron paths?"
  },
  schrodinger: {
    title: "Quantum Model",
    scientist: "Erwin Schrödinger · 1926",
    src: "models/schrodinger-quantum-cloud.glb",
    ios: "models/schrodinger-quantum-cloud.usdz",
    alt: "3D model of Schrödinger's quantum cloud atom model",
    description: "The quantum model explains that electrons do not travel in fixed paths. Instead, they are found in regions of probability called orbitals or electron clouds.",
    strength: "Shows that electron positions are uncertain and are better described as probability clouds.",
    limit: "The model is accurate, but it is more abstract and harder to visualize than earlier models.",
    question: "Why is the quantum model shown as a cloud instead of a clear circular path?"
  }
};

const viewer = document.querySelector("#atomViewer");
const arButton = document.querySelector("#arButton");
const viewerNote = document.querySelector("#viewerNote");
const tabs = document.querySelectorAll(".model-tab");
const fields = {
  title: document.querySelector("#modelTitle"),
  scientist: document.querySelector("#modelScientist"),
  description: document.querySelector("#modelDescription"),
  strength: document.querySelector("#modelStrength"),
  limit: document.querySelector("#modelLimit"),
  question: document.querySelector("#modelQuestion")
};

let currentModel = models.dalton;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function updateArButton() {
  arButton.disabled = false;
  arButton.textContent = "View this atom in AR";
  viewerNote.textContent = "Tip: Use one finger to rotate and two fingers to zoom before opening AR.";

  if (isIOS) {
    const exists = await fileExists(currentModel.ios);
    if (!exists) {
      arButton.disabled = true;
      arButton.textContent = "iPhone AR needs USDZ file";
      viewerNote.textContent = "The 3D model still works on iPhone. To open AR on iPhone, add the matching .usdz file in the models folder.";
    }
  }
}

function showModel(id) {
  const model = models[id];
  currentModel = model;
  fields.title.textContent = model.title;
  fields.scientist.textContent = model.scientist;
  fields.description.textContent = model.description;
  fields.strength.textContent = model.strength;
  fields.limit.textContent = model.limit;
  fields.question.textContent = model.question;
  viewer.src = model.src;
  viewer.setAttribute("ios-src", model.ios);
  viewer.alt = model.alt;
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.id === id));
  updateArButton();
}

tabs.forEach(tab => tab.addEventListener("click", () => showModel(tab.dataset.id)));

arButton.addEventListener("click", async () => {
  if (arButton.disabled) return;
  try {
    await viewer.activateAR();
  } catch (error) {
    viewerNote.textContent = "AR could not open. Please check that your browser supports AR and that the model file path is correct.";
  }
});

showModel("dalton");
