const span = document.getElementById("moshahede-bishtar");
span.addEventListener("click", () => {
  span.parentNode.classList.toggle("active");
});

function hideShow() {
  let div = document.getElementById("backgrounduser");
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
function hideShow2() {
  let div3 = document.getElementById("ersalscript");
  if (div3.style.opacity === "0" && div3.style.visibility === "hidden") {
    div3.style.opacity = "1";
    div3.style.visibility = "visible";
  } else {
    div3.style.opacity = "0";
    div3.style.visibility = "hidden";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

function hideShow3() {
  let div3 = document.getElementById("bishtar");
  if (div3.style.opacity === "0" && div3.style.visibility === "hidden") {
    div3.style.opacity = "1";
    div3.style.visibility = "visible";
  } else {
    div3.style.opacity = "0";
    div3.style.visibility = "hidden";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

function hideShow4() {
  let div3 = document.getElementById("serch-script");
  if (div3.style.opacity === "0" && div3.style.visibility === "hidden") {
    div3.style.opacity = "1";
    div3.style.visibility = "visible";
  } else {
    div3.style.opacity = "0";
    div3.style.visibility = "hidden";
  }
  let div4 = document.getElementById("serch-script-kol");
  if (div4.style.opacity === "0" && div4.style.visibility === "hidden") {
    div4.style.visibility = "visible";
    div4.style.opacity = "1";
  } else {
    div4.style.opacity = "0";
    div4.style.visibility = "hidden";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "auto" ? "hidden" : "auto";
}
function hideShow5() {
  let div3 = document.getElementById("serch-script-kol");
  if (div3.style.opacity === "0" && div3.style.visibility === "hidden") {
    div3.style.visibility = "hidden";
    div3.style.opacity = "0";
  } else {
    div3.style.opacity = "0";
    div3.style.visibility = "hidden";

    let div4 = document.getElementById("serch-script");
    if (div4.style.opacity === "0" && div4.style.visibility === "hidden") {
      div4.style.opacity = "0";
    } else {
      div4.style.opacity = "0";
      div4.style.visibility = "hidden";
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

//js

function jostejo() {
  let jostejoJs = document.getElementById("jostejo-js");
  if (jostejoJs.style.transform === "translateY(100%)") {
    jostejoJs.style.transform = "translateY(0%)";
  } else {
    jostejoJs.style.transform = "translateY(100%)";
  }
  var body = document.querySelector("body");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}
