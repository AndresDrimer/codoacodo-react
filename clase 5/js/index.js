/*classes*/
class Input {
  constructor(parentID, type = "text") {
    (this.parentID = parentID), (this.type = type);
  }
  render() {
    const localize = document.getElementById(this.parentID);
    const myInputs =
      localize.innerHTML +
      `<input type=${this.type} placeholder=${this.type} />`;
    localize.innerHTML = myInputs;
  }
}

class Buttons {
  constructor(type) {
    this.type = type;
  }
  render() {
    const buttons = document.getElementById("buttons");
    const myButtons = buttons.innerHTML + `<button value=${this.type} onClick=filtering(value)>${this.type}<button/>`;
    buttons.innerHTML = myButtons;
  }
}
/*variables*/
const arrayOfInputs = [
  "text",
  "email",
  "password",
  "date",
  "checkbox",
  "reset",
  "color",
  "week",
  "submit",
];
/*functions*/
function makeInputs(text) {
  text = new Input("inputs", text);
  text.render();
}


function makeButtons(type) {
  buto = new Buttons(type);
  buto.render();
}

function filtering(typeSel){
    console.log(typeSel)
   const filteredArray = arrayOfInputs.filter((it) => it !== typeSel);
}


/*prog*/
arrayOfInputs.forEach(it => makeInputs(it));
arrayOfInputs.forEach(it => makeButtons(it));
console.log(filteredArray);
