const ctaSection = document.getElementById("cta-section");
const header = document.getElementById("header");
let headerHeight = header.clientHeight;
let elem = document.getElementById("main-btn");
document.addEventListener("scroll", fn);

function fn() {
  let rect = elem.getBoundingClientRect();
  let upperLimit = rect.top - headerHeight;
  if (upperLimit <= 0) {
    ctaSection.style.transform = "translateY(-80px)";
  } else {
    ctaSection.style.transform = "translateY(80px)";
  }
}

// ------------------CART COUNT-------------------

let mainCountContainer = document.getElementById("main-count-container");
let incBtns = document.getElementsByClassName("increasing-btn");
let decBtns = document.getElementsByClassName("decreasing-btn");

for (let i = 0; i < incBtns.length; i++) {
  let btnId = incBtns[i].id;
  let id = btnId.charAt(btnId.length - 1);
  incBtns[i].addEventListener("click", increment);
}

function increment(event) {
  console.log(event.target.className);
  let btnId = event.target.id;
  let classList = event.target.className;
  if (classList.includes("twin-inc-btn")) {
    console.log(true);
    let cntContainers = document.getElementsByClassName("twin");
    for (let i = 0; i < 2; i++) {
      let value = parseInt(cntContainers[i].value);
      if (value < 5) {
        value++;
      }
      cntContainers[i].value = value;
    }
  } else {
    console.log(event);
    let id = btnId.charAt(btnId.length - 1);

    let cntContainer = document.getElementById(id);

    let value = parseInt(cntContainer.value);

    if (value < 5) {
      value++;
    }
    cntContainer.value = value;
  }
}

function decrement(event) {
  let btnId = event.target.id;

  let classList = event.target.className;
  if (classList.includes("twin-dec-btn")) {
    let cntContainers = document.getElementsByClassName("twin");
    for (let i = 0; i < 2; i++) {
      let value = parseInt(cntContainers[i].value);
      if (value > 0) {
        value--;
      }
      cntContainers[i].value = value;
    }
  } else {
    let id = btnId.charAt(btnId.length - 1);

    let cntContainer = document.getElementById(id);

    let value = parseInt(cntContainer.value);

    if (value > 0) {
      value--;
    }
    cntContainer.value = value;
  }
}

for (let i = 0; i < decBtns.length; i++) {
  // console.log("hi");
  let btnId = decBtns[i].id;
  let id = btnId.charAt(btnId.length - 1);
  decBtns[i].addEventListener("click", decrement);
}

// <<<<-----   ADD TO CART ---------------->>>>>>>>>

let cartBtns = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < cartBtns.length; i++) {
  cartBtns[i].addEventListener("click", addToCart);
}

function addToCart(event) {
  let mainCountContainer = document.getElementById("main-count-container");
  let value = parseInt(mainCountContainer.value);
  let classList=event.target.className;
  if(classList.includes("twin-btn")){
    
    let cntContainers=document.getElementsByClassName("twin");

       let cntContainer1=cntContainers[0];
      let cntContainerValue = parseInt(cntContainer1.value);
      value += cntContainerValue;
      mainCountContainer.value = value;
      cntContainer1.value = 1;
      
      let cntContainer2=cntContainers[1];
      cntContainer2.value=1;

    

  }
  else{
  let id = event.target.id;
  let cntContainerId = id.charAt(id.length - 1);
  let cntContainer = document.getElementById(cntContainerId);
  let cntContainerValue = parseInt(cntContainer.value);
  value += cntContainerValue;
  mainCountContainer.value = value;
  cntContainer.value = 1;
  }
}
