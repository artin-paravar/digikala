function hideShow() {
  let div = document.getElementById("backgrounduser");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function hideShow2() {
  let div2 = document.getElementById("ersalscript");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

function hideShow3() {
  let div2 = document.getElementById("bishtar");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }

  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

function hideShow4() {
  let div3 = document.getElementById("serch-script");
  if (div3.style.display === "block") {
    div3.style.display = "none";
  } else {
    div3.style.display = "block";
  }
  let div4 = document.getElementById("serch-script-kol");
  if (div4.style.display === "block") {
    div4.style.display = "none";
  } else {
    div4.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow5() {
  let div3 = document.getElementById("serch-script-kol");
  if (div3.style.display === "none") {
    div3.style.display = "none";
  } else {
    div3.style.display = "none";

    let div4 = document.getElementById("serch-script");
    if (div4.style.display === "none") {
      div4.style.display = "none";
    } else {
      div4.style.display = "none";
    }
    var body = document.querySelector("body");
    body.style.overflow = body.style.overflow == "auto" ? "auto" : "auto";
  }
}
function hideShow6() {
  let div2 = document.getElementById("img-script");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow7() {
  let div2 = document.getElementById("img-script2");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow8() {
  let div2 = document.getElementById("img-script3");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow9() {
  let div2 = document.getElementById("img-script4");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow10() {
  let div2 = document.getElementById("img-script5");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function hideShow11() {
  let div2 = document.getElementById("img-script6");
  if (div2.style.display === "block") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function border() {
  let border1 = document.getElementById("border");
  if (border1.style.border == "2px solid #19c5dd ") {
    border1.style.border = "2px solid #e0e0e2";
  } else {
    border1.style.border = "2px solid #19c5dd";
    let border = document.getElementById("border1");
    border.style.border = "2px solid #e0e0e2";
    let border2 = document.getElementById("border2");
    border2.style.border = "2px solid #e0e0e2";
    let border4 = document.getElementById("border3");
    border4.style.border = "2px solid #e0e0e2";
    let border5 = document.getElementById("border4");
    border5.style.border = "2px solid #e0e0e2";
  }
}

function border1() {
  let border1 = document.getElementById("border1");
  if (border1.style.border == "2px solid #19c5dd ") {
    border1.style.border = "2px solid #e0e0e2";
  } else {
    border1.style.border = "2px solid #19c5dd";
  }
  let border = document.getElementById("border");
  border.style.border = "2px solid #e0e0e2";
  let border2 = document.getElementById("border2");
  border2.style.border = "2px solid #e0e0e2";
  let border4 = document.getElementById("border3");
  border4.style.border = "2px solid #e0e0e2";
  let border5 = document.getElementById("border4");
  border5.style.border = "2px solid #e0e0e2";
}
function border2() {
  let border1 = document.getElementById("border2");
  if (border1.style.border == "2px solid #e0e0e2 ") {
    border1.style.border = "2px solid #e0e0e2";
  } else {
    border1.style.border = "2px solid #19c5dd";
  }
  let border2 = document.getElementById("border");
  border2.style.border = "2px solid #e0e0e2";
  let border3 = document.getElementById("border1");
  border3.style.border = "2px solid #e0e0e2";
  let border4 = document.getElementById("border3");
  border4.style.border = "2px solid #e0e0e2";
  let border5 = document.getElementById("border4");
  border5.style.border = "2px solid #e0e0e2";
}
function border3() {
  let border1 = document.getElementById("border3");
  if (border1.style.border == "2px solid #e0e0e2 ") {
    border1.style.border = "2px solid #e0e0e2";
  } else {
    border1.style.border = "2px solid #19c5dd";
  }
  let border2 = document.getElementById("border");
  border2.style.border = "2px solid #e0e0e2";
  let border3 = document.getElementById("border1");
  border3.style.border = "2px solid #e0e0e2";
  let border4 = document.getElementById("border2");
  border4.style.border = "2px solid #e0e0e2";
  let border5 = document.getElementById("border4");
  border5.style.border = "2px solid #e0e0e2";
}
function border4() {
  let border1 = document.getElementById("border4");
  if (border1.style.border == "2px solid #e0e0e2 ") {
    border1.style.border = "2px solid #e0e0e2";
  } else {
    border1.style.border = "2px solid #19c5dd";
  }
  let border2 = document.getElementById("border");
  border2.style.border = "2px solid #e0e0e2";
  let border3 = document.getElementById("border1");
  border3.style.border = "2px solid #e0e0e2";
  let border4 = document.getElementById("border3");
  border4.style.border = "2px solid #e0e0e2";
  let border5 = document.getElementById("border2");
  border5.style.border = "2px solid #e0e0e2";
}

// ; //
const swiperpishnahad = document.querySelector(".swiperpishnahad"),
  firstimg = swiperpishnahad.querySelectorAll(".div-a-opshen")[0];
const arrowbtns = document.querySelectorAll(".div-felesh");

let isDragging = false,
  startX;

const showhideicon = () => {
  let scrollwidth = swiperpishnahad.scrollWidth - swiperpishnahad.clientWidth;
  arrowbtns[0].style.visibility =
    swiperpishnahad.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns[1].style.visibility =
    swiperpishnahad.scrollLeft == scrollwidth ? "hidden" : "visible";
};
arrowbtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstimgwidth = firstimg.clientWidth + 14;
    swiperpishnahad.scrollLeft +=
      icon.id == "left" ? -firstimgwidth : firstimgwidth;

    setTimeout(() => showhideicon(), 60);
  });
});
const dragStart = (e) => {
  isDragging = true;
  prevpageX = e.pageX;
  prevscrollleft = swiperpishnahad.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  swiperpishnahad.classList.add("dragging");
  let positiondiff = e.pageX - prevpageX;
  swiperpishnahad.scrollLeft = prevscrollleft - positiondiff;
  showhideicon();
};
const dragStop = () => {
  isDragging = false;
  swiperpishnahad.classList.remove("dragging");
};

swiperpishnahad.addEventListener("mousedown", dragStart);
swiperpishnahad.addEventListener("mousemove", dragging);
swiperpishnahad.addEventListener("mouseup", dragStop);
swiperpishnahad.addEventListener("mouseleave", dragStop);

//

const swiperpishnahad2 = document.querySelector(".mahbob"),
  firstimg2 = swiperpishnahad2.querySelectorAll("img")[0];
const arrowbtns2 = document.querySelectorAll(".div-felesh2");

let isDragging2 = false,
  startX2;

const showhideicon2 = () => {
  let scrollwidth2 =
    swiperpishnahad2.scrollWidth - swiperpishnahad2.clientWidth;
  arrowbtns2[0].style.visibility =
    swiperpishnahad2.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns[1].style.visibility =
    swiperpishnahad2.scrollLeft == scrollwidth2 ? "hidden" : "visible";
};
arrowbtns2.forEach((icon2) => {
  icon2.addEventListener("click", () => {
    let firstimgwidth2 = firstimg2.clientWidth + 14;
    swiperpishnahad2.scrollLeft +=
      icon2.id == "left" ? -firstimgwidth2 : firstimgwidth2;

    setTimeout(() => showhideicon2(), 60);
  });
});
const dragStart2 = (e) => {
  isDragging2 = true;
  prevpageX2 = e.pageX;
  prevscrollleft = swiperpishnahad2.scrollLeft;
};
const dragging2 = (e) => {
  if (!isDragging2) return;
  e.preventDefault();
  swiperpishnahad2.classList.add("dragging2");
  let positiondiff = e.pageX - prevpageX2;
  swiperpishnahad2.scrollLeft = prevscrollleft - positiondiff;
  showhideicon2();
};
const dragStop2 = () => {
  isDragging2 = false;
  swiperpishnahad2.classList.remove("dragging2");
};

swiperpishnahad2.addEventListener("mousedown", dragStart2);
swiperpishnahad2.addEventListener("mousemove", dragging2);
swiperpishnahad2.addEventListener("mouseup", dragStop2);
swiperpishnahad2.addEventListener("mouseleave", dragStop2);

//

const swiperpishnahad3 = document.querySelector(".all3"),
  firstimg3 = swiperpishnahad3.querySelectorAll(".div-1")[0];
const arrowbtns3 = document.querySelectorAll(".div-felesh2");

let isDragging3 = false,
  startX3;

const showhideicon3 = () => {
  let scrollwidth3 =
    swiperpishnahad3.scrollWidth - swiperpishnahad3.clientWidth;
  arrowbtns3[0].style.visibility =
    swiperpishnahad3.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns3[1].style.visibility =
    swiperpishnahad3.scrollLeft == scrollwidth3 ? "hidden" : "visible";
};
arrowbtns3.forEach((icon3) => {
  icon3.addEventListener("click", () => {
    let firstimgwidth3 = firstimg3.clientWidth + 14;
    swiperpishnahad3.scrollLeft +=
      icon3.id == "left" ? -firstimgwidth3 : firstimgwidth3;

    setTimeout(() => showhideicon3(), 60);
  });
});
const dragStart3 = (e) => {
  isDragging3 = true;
  prevpageX3 = e.pageX;
  prevscrollleft = swiperpishnahad3.scrollLeft;
};
const dragging3 = (e) => {
  if (!isDragging3) return;
  e.preventDefault();
  swiperpishnahad3.classList.add("dragging3");
  let positiondiff = e.pageX - prevpageX3;
  swiperpishnahad3.scrollLeft = prevscrollleft - positiondiff;
  showhideicon3();
};
const dragStop3 = () => {
  isDragging3 = false;
  swiperpishnahad3.classList.remove("dragging3");
};

swiperpishnahad3.addEventListener("mousedown", dragStart3);
swiperpishnahad3.addEventListener("mousemove", dragging3);
swiperpishnahad3.addEventListener("mouseup", dragStop3);
swiperpishnahad3.addEventListener("mouseleave", dragStop3);

//

const swiperpishnahad4 = document.querySelector(".all4"),
  firstimg4 = swiperpishnahad4.querySelectorAll(".div-1")[0];
const arrowbtns4 = document.querySelectorAll(".div-felesh2");

let isDragging4 = false,
  startX4;

const showhideicon4 = () => {
  let scrollwidth4 =
    swiperpishnahad4.scrollWidth - swiperpishnahad4.clientWidth;
  arrowbtns4[0].style.visibility =
    swiperpishnahad4.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns4[1].style.visibility =
    swiperpishnahad4.scrollLeft == scrollwidth4 ? "hidden" : "visible";
};
arrowbtns4.forEach((icon4) => {
  icon4.addEventListener("click", () => {
    let firstimgwidth4 = firstimg4.clientWidth + 14;
    swiperpishnahad4.scrollLeft +=
      icon4.id == "left" ? -firstimgwidth4 : firstimgwidth4;

    setTimeout(() => showhideicon4(), 60);
  });
});
const dragStart4 = (e) => {
  isDragging4 = true;
  prevpageX4 = e.pageX;
  prevscrollleft = swiperpishnahad4.scrollLeft;
};
const dragging4 = (e) => {
  if (!isDragging4) return;
  e.preventDefault();
  swiperpishnahad4.classList.add("dragging4");
  let positiondiff = e.pageX - prevpageX4;
  swiperpishnahad4.scrollLeft = prevscrollleft - positiondiff;
  showhideicon4();
};
const dragStop4 = () => {
  isDragging4 = false;
  swiperpishnahad4.classList.remove("dragging4");
};

swiperpishnahad4.addEventListener("mousedown", dragStart4);
swiperpishnahad4.addEventListener("mousemove", dragging4);
swiperpishnahad4.addEventListener("mouseup", dragStop4);
swiperpishnahad4.addEventListener("mouseleave", dragStop4);

// /
/////////

const swiperpishnahad5 = document.querySelector(".itemha1"),
  firstimg5 = swiperpishnahad5.querySelectorAll(".itamvastaha")[0];
const arrowbtns5 = document.querySelectorAll(".div-felesh4");

let isDragging5 = false,
  startX5;

const showhideicon5 = () => {
  let scrollwidth5 =
    swiperpishnahad5.scrollWidth - swiperpishnahad5.clientWidth;
  arrowbtns5[0].style.visibility =
    swiperpishnahad5.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns5[1].style.visibility =
    swiperpishnahad5.scrollLeft == scrollwidth5 ? "hidden" : "visible";
};
arrowbtns5.forEach((icon5) => {
  icon5.addEventListener("click", () => {
    let firstimgwidth5 = firstimg5.clientWidth + 14;
    swiperpishnahad5.scrollLeft +=
      icon5.id == "left" ? -firstimgwidth5 : firstimgwidth5;

    setTimeout(() => showhideicon5(), 60);
  });
});
const dragStart5 = (e) => {
  isDragging5 = true;
  prevpageX5 = e.pageX;
  prevscrollleft = swiperpishnahad5.scrollLeft;
};
const dragging5 = (e) => {
  if (!isDragging5) return;
  e.preventDefault();
  swiperpishnahad5.classList.add("dragging5");
  let positiondiff = e.pageX - prevpageX5;
  swiperpishnahad5.scrollLeft = prevscrollleft - positiondiff;
  showhideicon5();
};
const dragStop5 = () => {
  isDragging5 = false;
  swiperpishnahad5.classList.remove("dragging5");
};

swiperpishnahad5.addEventListener("mousedown", dragStart5);
swiperpishnahad5.addEventListener("mousemove", dragging5);
swiperpishnahad5.addEventListener("mouseup", dragStop5);
swiperpishnahad5.addEventListener("mouseleave", dragStop5);

// /

const swiperpishnahad6 = document.querySelector(".dasteha2"),
  firstimg6 = swiperpishnahad6.querySelectorAll(".dasteha-item1")[0];
const arrowbtns6 = document.querySelectorAll(".div-felesh2");

let isDragging6 = false,
  startX6;

const showhideicon6 = () => {
  let scrollwidth6 =
    swiperpishnahad6.scrollWidth - swiperpishnahad6.clientWidth;
  arrowbtns6[0].style.visibility =
    swiperpishnahad6.scrollLeft == 0 ? "hidden" : "visible";
  arrowbtns[1].style.visibility =
    swiperpishnahad6.scrollLeft == scrollwidth6 ? "hidden" : "visible";
};
arrowbtns6.forEach((icon6) => {
  icon6.addEventListener("click", () => {
    let firstimgwidth6 = firstimg6.clientWidth + 14;
    swiperpishnahad6.scrollLeft +=
      icon6.id == "left" ? -firstimgwidth6 : firstimgwidth6;

    setTimeout(() => showhideicon6(), 60);
  });
});
const dragStart6 = (e) => {
  isDragging6 = true;
  prevpageX6 = e.pageX;
  prevscrollleft = swiperpishnahad6.scrollLeft;
};
const dragging6 = (e) => {
  if (!isDragging6) return;
  e.preventDefault();
  swiperpishnahad6.classList.add("dragging6");
  let positiondiff = e.pageX - prevpageX6;
  swiperpishnahad6.scrollLeft = prevscrollleft - positiondiff;
  showhideicon6();
};
const dragStop6 = () => {
  isDragging6 = false;
  swiperpishnahad6.classList.remove("dragging6");
};

swiperpishnahad6.addEventListener("mousedown", dragStart6);
swiperpishnahad6.addEventListener("mousemove", dragging6);
swiperpishnahad6.addEventListener("mouseup", dragStop6);
swiperpishnahad6.addEventListener("mouseleave", dragStop6);
//

let more = document.querySelectorAll(".span-moshahede-bishtar");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
transitionDelay;

function changeback1() {
  document.querySelector(".titrbala-matn-brand").style.display = "block";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}
function changeback2() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "block";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}
function changeback3() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "block";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback4() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "block";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback5() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "block";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback6() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "block";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback7() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "block";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback8() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "block";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback9() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "block";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback10() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "block";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback11() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "block";
  document.querySelector(".titrbala-matn-brand12").style.display = "none";
}

function changeback12() {
  document.querySelector(".titrbala-matn-brand").style.display = "none";
  document.querySelector(".titrbala-matn-brand2").style.display = "none";
  document.querySelector(".titrbala-matn-brand3").style.display = "none";
  document.querySelector(".titrbala-matn-brand4").style.display = "none";
  document.querySelector(".titrbala-matn-brand5").style.display = "none";
  document.querySelector(".titrbala-matn-brand6").style.display = "none";
  document.querySelector(".titrbala-matn-brand7").style.display = "none";
  document.querySelector(".titrbala-matn-brand8").style.display = "none";
  document.querySelector(".titrbala-matn-brand9").style.display = "none";
  document.querySelector(".titrbala-matn-brand10").style.display = "none";
  document.querySelector(".titrbala-matn-brand11").style.display = "none";
  document.querySelector(".titrbala-matn-brand12").style.display = "block";
}

//
function activitem() {
  document.querySelector(".dropdown-menu").style.visibility = "visible";
  document.querySelector(".dropdown-menu").style.opacity = "1";
  document.querySelector(".script-dropdown").style.visibility = "visible";
  document.querySelector(".script-dropdown").style.opacity = "1";
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
function deactive() {
  document.querySelector(".dropdown-menu").style.visibility = "hidden";
  document.querySelector(".dropdown-menu").style.opacity = "0";
  document.querySelector(".script-dropdown").style.visibility = "hidden";
  document.querySelector(".script-dropdown").style.opacity = "0";
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
