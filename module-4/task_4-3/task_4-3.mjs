"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function findInput(...ids) {
    for (const id of ids) {
        const byId = document.getElementById(id);
        if (byId) return byId;
        const byName = document.querySelector(`[name="${id}"]`);
        if (byName) return byName;
        const bySelector = document.querySelector(`#${id}`);
        if (bySelector) return bySelector;
    }
    return null;
}

function parseNumberValue(el) {
    if (!el) return NaN;
    const v = (el.value ?? "").toString().trim().replace(",", ".");
    return v === "" ? NaN : parseFloat(v);
}

function cmdTask1CalculateClick() {
    const wEl = findInput("txtRectWidth", "txtWidth", "width", "widthInput");
    const hEl = findInput("txtRectHeight", "txtHeight", "height", "heightInput");
    const outEl = findInput("txtTask1Output", "task1Result", "lblPerimeterResult", "task1Output");

    if (!wEl || !hEl) {
        console.warn("Width/height inputs ikke funnet. Sjekk id-ene i HTML.");
        if (outEl) outEl.textContent = "Feil: width/height inputs ikke funnet.";
        return;
    }


    const width = parseNumberValue(wEl);
    const height = parseNumberValue(hEl);

    if (!isFinite(width) || !isFinite(height)) {
        if (outEl) outEl.textContent = "Ugyldig input: oppgi tall for bredde og høyde.";
        else console.error("Ugyldig input - oppgi tall for bredde og høyde.");
        return;
    }

    const perimeter = 2 * (width + height);
    const area = width * height;
    const fmt = n => Number(n).toFixed(2);

    if (outEl) {
        outEl.innerHTML = `Width = ${fmt(width)}, Height = ${fmt(height)}<br>Perimeter = ${fmt(perimeter)}, Area = ${fmt(area)}`;
    } else {
        console.log(`Perimeter = ${fmt(perimeter)}, Area = ${fmt(area)}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("cmdTask1Calculate") || document.getElementById("cmbTask1Calculate") || document.querySelector("[data-task='calculate-rect']");
    if (btn) {
        btn.addEventListener("click", cmdTask1CalculateClick);
    } else {
        console.warn("Knapp for beregning ikke funnet. Sjekk at knappen har id 'cmdTask1Calculate' eller 'cmbTask1Calculate'.");
    }
});

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const task2Words = [];

function txtTask2WordKeyPress(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        e.preventDefault();
        const input = e.target;
        const word = (input.value ?? "").trim();
        if (word === "") return;

        task2Words.push(word);

        const outEl = document.getElementById("txtTask2Output") || document.getElementById("task2Output");
        const text = `${task2Words.length} words: ${task2Words.join(", ")}`;

        if (outEl) outEl.textContent = text;
        else console.log(text);

        input.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const txt = document.getElementById("txtTask2Word") || document.querySelector("[name='txtTask2Word']");
    if (txt && !txt._hasTask2Handler) {
        txt.addEventListener("keypress", txtTask2WordKeyPress);
        txt._hasTask2Handler = true;
    } else if (!txt) {
        console.warn("txtTask2Word not found. Ensure input has id='txtTask2Word'.");
    }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chktask3 = document.getElementsByName("task3") || [];
const cmdTask3CheckAnswer = document.getElementById("cmdTask3CheckAnswer");

function cmdTask3CheckAnswerClick() {
    if (!chktask3 || chktask3.length === 0) {
        console.warn("Ingen checkboxes funnet med name='task3'");
        return;
    }
    for (let i = 0; i < chktask3.length; i++) {
        const chkBox = chktask3[i];
        console.log(`chkBox[${i}].checked = ${chkBox.checked}`);
    }
}

if (cmdTask3CheckAnswer) {
    cmdTask3CheckAnswer.addEventListener("click", cmdTask3CheckAnswerClick);
} else {
    console.warn("Knapp 'cmdTask3CheckAnswer' ikke funnet.");
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("divTask4Cars");
    const output = document.getElementById("txtTask4Output");

    if (!container) {
        console.warn("divTask4Cars ikke funnet i DOM.");
        return;
    }

    for (let i = 0; i < CarTypes.length; i++) {
        const car = CarTypes[i];

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "carChoice";
        radio.id = "car_" + car.value;
        radio.value = car.value;

        const label = document.createElement("label");
        label.htmlFor = radio.id;
        label.textContent = car.caption;

        const wrapper = document.createElement("div");
        wrapper.appendChild(radio);
        wrapper.appendChild(label);

        container.appendChild(wrapper);

        radio.addEventListener("change", () => {
            if (radio.checked) {
                if (output) output.textContent = car.caption;
                else console.log("Selected car:", car.caption);
            }
        });
    }

    const checked = container.querySelector("input[name='carChoice']:checked");
    if (checked) {
        const found = CarTypes.find(c => String(c.value) === checked.value);
        if (found && output) output.textContent = found.caption;
    }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.addEventListener("DOMContentLoaded", () => {
    const sel = document.getElementById("selectTask5Animals");
    const out = document.getElementById("txtTask5Output");

    if (!sel) {
        console.warn("selectTask5Animals not found");
        return;
    }

    function onSelectChange() {
        const text = sel.options[sel.selectedIndex]?.text || sel.value;
        if (out) out.textContent = text;
        else console.log("Task5 selection:", text);
    }

    if (!sel._hasTask5Handler) {
        sel.addEventListener("change", onSelectChange);
        sel._hasTask5Handler = true;
    }
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.addEventListener("DOMContentLoaded", () => {
    const sel = document.getElementById("selectTask6Girls");
    const out = document.getElementById("txtTask6Output");

    if (!sel) {
        console.warn("selectTask6Girls not found");
        return;
    }

    sel.innerHTML = ""; 
    for (let i = 0; i < GirlsNames.length; i++) {
        const opt = document.createElement("option");
        opt.value = GirlsNames[i];
        opt.text = GirlsNames[i];
        sel.appendChild(opt);
    }

    function onSelectChange() {
        const text = sel.options[sel.selectedIndex]?.text || sel.value;
        if (out) out.textContent = text;
        else console.log("Task6 selection:", text);
    }

    if (!sel._hasTask6Handler) {
        sel.addEventListener("change", onSelectChange);
        sel._hasTask6Handler = true;
    }
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.addEventListener("DOMContentLoaded", () => {

    const find = (...ids) => ids.map(id => document.getElementById(id)).find(Boolean);

    const selGenre = find("selectMovieGenre", "filmsjanger", "selectTask7Genre");
    const btnAdd = find("cmbAddMovie", "cmdAddMovie", "btnAddMovie");
    const tbl = find("tblMovies", "movieTable", "tblMovieList", "tableMovies");
    const inputTitle = find("filmtittel", "txtMovieTitle", "movieTitle");
    const inputDirector = find("filmregissør", "filmregissor", "filmregissorInput", "txtMovieDirector");
    const inputRate = find("filmrate", "filmRating", "txtMovieRating");

    if (selGenre) {
        selGenre.innerHTML = "";
        for (let i = 0; i < MovieGenre.length; i++) {
            const opt = document.createElement("option");
            opt.value = MovieGenre[i];
            opt.text = MovieGenre[i];
            selGenre.appendChild(opt);
        }
    } else {
        console.warn("selectMovieGenre not found - genres not populated");
    }

    if (!btnAdd) {
        console.warn("cmbAddMovie button not found - cannot add movies");
        return;
    }

    let tbody = tbl ? tbl.querySelector("tbody") : null;
    if (tbl && !tbody) {
        tbody = document.createElement("tbody");
        tbl.appendChild(tbody);
    }

    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();

        const title = inputTitle ? (inputTitle.value || "").trim() : "";
        const genre = selGenre ? (selGenre.value || "").trim() : "";
        const director = inputDirector ? (inputDirector.value || "").trim() : "";
        const ratingRaw = inputRate ? (inputRate.value || "").trim() : "";
        const rating = ratingRaw === "" ? "" : Number(ratingRaw.replace(",", "."));

        if (!title) {
            alert("Oppgi filmtittel.");
            if (inputTitle) inputTitle.focus();
            return;
        }
        if (!genre) {
            alert("Velg filmsjanger.");
            if (selGenre) selGenre.focus();
            return;
        }
        if (!director) {
            alert("Oppgi filmregissør.");
            if (inputDirector) inputDirector.focus();
            return;
        }
        if (ratingRaw !== "" && (!isFinite(rating) || rating < 0)) {
            alert("Ugyldig rating. Bruk et tall.");
            if (inputRate) inputRate.focus();
            return;
        }

        if (tbody) {
            const tr = document.createElement("tr");

            const tdTitle = document.createElement("td");
            tdTitle.textContent = title;
            tr.appendChild(tdTitle);

            const tdGenre = document.createElement("td");
            tdGenre.textContent = genre;
            tr.appendChild(tdGenre);

            const tdDirector = document.createElement("td");
            tdDirector.textContent = director;
            tr.appendChild(tdDirector);

            const tdRating = document.createElement("td");
            tdRating.textContent = ratingRaw === "" ? "" : Number(rating).toFixed(2);
            tr.appendChild(tdRating);

            tbody.appendChild(tr);
        } else {
            console.log("Movie:", { title, genre, director, rating: ratingRaw === "" ? "" : Number(rating).toFixed(2) });
        }

        if (inputTitle) inputTitle.value = "";
        if (inputDirector) inputDirector.value = "";
        if (inputRate) inputRate.value = "";
        if (inputTitle) inputTitle.focus();
    });
});



