let landingpage = document.querySelector(".landing-page");
let imgsarray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let r = true,
  set;
// ------------------------------------------
let gear = document.querySelector(".stting-box .facon i");
gear.onclick = () => {
  gear.classList.toggle("fa-spin");
  document.querySelector(".stting-box").classList.toggle("open");
};
// ------------------------------------------
// ------------------------------------------
if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    if (localStorage.getItem("color") == li.dataset.color) {
      li.classList.add("active");
    }
  });
  if (localStorage.getItem("r")) {
    if (localStorage.getItem("r") == "false") {
      r = false;
      document.querySelectorAll(".random-backgrounds span").forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains("no")) {
          li.classList.add("active");
        }
      });
    }
  }
  // document.querySelector(`[data-color]="${localStorage.getItem("color")}"`);
}
// ____________________________________________________
// ____________________________________________________
if (localStorage.getItem("bullit")) {
  document.querySelector(".nav-bullets").style.display =
    localStorage.getItem("bullit");
  document.querySelectorAll(".bullets-option span").forEach((span) => {
    span.classList.remove("active");
    if (
      localStorage.getItem("bullit") === "none" &&
      span.classList.contains("no")
    ) {
      console.log(span);
      span.classList.add("active");
    }
    if (
      localStorage.getItem("bullit") === "block" &&
      span.classList.contains("yes")
    ) {
      span.classList.add("active");
    }
  });
}
// ____________________________________________________

document.querySelectorAll(".colors-list li").forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      li.dataset.color
    );
    localStorage.setItem("color", li.dataset.color);
    document.querySelectorAll(".colors-list li").forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});
document.querySelectorAll(".random-backgrounds span").forEach((li) => {
  li.addEventListener("click", (e) => {
    if (li.classList.contains("no")) {
      r = false;
      clearInterval(set);
      localStorage.setItem("r", r);
    } else {
      r = true;
      backgroundRandom();
      localStorage.setItem("r", r);
    }
    document.querySelectorAll(".random-backgrounds span").forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});
//  --------------------------------------------------------
//  ---------------t----------------------------------------

function backgroundRandom() {
  if (r == true) {
    set = setInterval(() => {
      let rendom = Math.floor(Math.random() * imgsarray.length);

      landingpage.style.backgroundImage =
        'url("imgs/' + imgsarray[rendom] + `")`;
    }, 1000);
  }
}
backgroundRandom();
// _________________________________________________
// _________________________________________________
// let ourskills = document.querySelector(".skills");
// window.onscroll = function () {
//  let  skils1 = ourskills.offsetTop;
//   let skils2 = ourskills.offsetHeight;
//   let skils3 = this.innerHeight;
//   let skils4 = this.pageYOffset;
//   if (skils4 > (skils1 + skils2 - skils3)) {
//     document.querySelectorAll(".skills .skills-box .skill-progress span").forEach((span) => {
//       span.style.width = span.dataset.width;
//     })
//   }

// }
let section = document.querySelector(".skills");
let span = document.querySelectorAll(
  ".skills .skills-box .skill-progress span"
);
window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 300) {
    span.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
};

let ourgallery = document.querySelectorAll(".gallery .images-box img");
ourgallery.forEach((img) => {
  img.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";
    if (img.alt !== null) {
      let h = document.createElement("h2");
      let texth = document.createTextNode(img.alt);
      h.appendChild(texth);

      popupbox.appendChild(h);
    }
    let popupimage = document.createElement("img");
    popupimage.src = img.src;
    popupbox.appendChild(popupimage);
    let span = document.createElement("span");
    let texts = document.createTextNode("X");
    span.appendChild(texts);
    span.className = "close-button";
    popupbox.appendChild(span);

    document.body.appendChild(popupbox);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-button")) {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
});

let bullets = document.querySelectorAll(".nav-bullets .bullet ");
let links = document.querySelectorAll(".logo .links li ");
function scroll(elemrnts) {
  elemrnts.forEach((e) => {
    e.addEventListener("click", (s) => {
      s.preventDefault();
      //   document.querySelector(bullet.dataset.sction).scrollIntoView({
      //     behavior: "somooth",
      //   });
      window.scrollTo({
        left: 0,
        top: document.querySelector(s.target.dataset.sction).offsetTop - 100,
        behavior: "smooth",
      });
    });
  });
}
scroll(bullets);
scroll(links);
document.querySelectorAll(".bullets-option span").forEach((span) => {
  span.addEventListener("click", () => {
    if (span.classList.contains("yes")) {
      document.querySelector(".nav-bullets").style.display = "block";
      localStorage.setItem("bullit", "block");
    } else {
      document.querySelector(".nav-bullets").style.display = "none";
      localStorage.setItem("bullit", "none");
    }
    document.querySelectorAll(".bullets-option span").forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
  });
});
document.querySelector(".stting-box .reset-options").onclick = () => {
  localStorage.clear();
  window.location.reload();
};
document.querySelector(".links-container button").onclick = (e) => {
  e.stopPropagation();
document.querySelector(".links-container button").classList.toggle("active");
  document.querySelector(".links").classList.toggle("open")
}
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("toggle-menu")) {
    document
      .querySelector(".links-container button")
      .classList.toggle("active");
    document.querySelector(".links").classList.toggle("open");
  } else {
    document
      .querySelector(".links-container button")
      .classList.remove("active");
    document.querySelector(".links").classList.remove("open");
  }
})
