
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  history.replaceState(null, null, " ");
});



const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function () {

    links.forEach(l => l.classList.remove("active"));

    this.classList.add("active");

  });
});



const roles = [
  "Cyber Security Analyst",
  "Ethical Hacker",
  "Web Developer"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {

  const text = document.getElementById("text");

  if (!text) return;

  let current = roles[i];

  if (!isDeleting) {

    text.innerHTML = current.substring(0, j);
    j++;

    if (j > current.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }

  } else {

    text.innerHTML = current.substring(0, j);

    j--;

    if (j < 0) {

      isDeleting = false;

      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();



let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  let currentScroll = window.pageYOffset;


  
  if (currentScroll > lastScroll) {

    header.classList.add("hide");

  } else {

    header.classList.remove("hide");
  }


  
  if (currentScroll > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;


  
  revealOnScroll();

});



function revealOnScroll() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {

    const windowHeight = window.innerHeight;

    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {

      el.classList.add("active");

    } else {

      el.classList.remove("active");
    }

  });
}

window.addEventListener("load", revealOnScroll);




emailjs.init("VHpanrVQ73tUpjX7E");



const form = document.getElementById("contact-form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_4i6mibl",
      "template_yvms0yq",
      this
    )

    .then(() => {

      alert("Message sent successfully 🚀");

      this.reset();

    })

    .catch((error) => {

      alert("Failed ❌ " + error.text);

    });

  });

}