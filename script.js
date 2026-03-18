
const display = document.getElementById("display");
const mini = document.getElementById("mini");
const keys = document.getElementById("keys");


display.textContent = "";
mini.textContent = "";


keys.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;



  if (btn.dataset.num) {
    display.textContent += btn.dataset.num;
    return;
  }

  if (btn.dataset.op) {
    display.textContent += btn.dataset.op;
    return;
  }

  const action = btn.dataset.action;

  if (action === "clear") {
    display.textContent = "";
    mini.textContent = "";
    return;
  }


  if (action === "del") {
    display.textContent = display.textContent.slice(0, -1);
    return;
  }


  if (action === "dot") {
    display.textContent += ".";
    return;
  }

  
  if (action === "percent") {
    if (display.textContent !== "") {
      display.textContent = String(Number(display.textContent) / 100);
    }
    return;
  }

  
  if (action === "eq") {
    try {
      mini.textContent = display.textContent + " =";
      display.textContent = eval(display.textContent); 
    } catch {
      display.textContent = "Error";
    }
    return;
  }
});