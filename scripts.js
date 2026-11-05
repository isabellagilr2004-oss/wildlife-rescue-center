function menu() {
  document.getElementById("navigation").classList.toggle("open");

  if (document.getElementById("navigation").classList.contains("open")) {
    document
      .getElementById("menu-button")
      .setAttribute("aria-expanded", "true");
  } else {
    document
      .getElementById("menu-button")
      .setAttribute("aria-expanded", "false");
  }
}

function ans1() {
  document.getElementById("answer").innerHTML =
    "We help injured and orphaned wild animals.";
}

function ans2() {
  document.getElementById("answer").innerHTML =
    "Yes, people can volunteer or donate.";
}

function ans3() {
  document.getElementById("answer").innerHTML =
    "We help animals like raccoons, hawks and tortoises.";
}

function ans4() {
  document.getElementById("answer").innerHTML =
    "Visit our Contact page to find our phone number and email.";
}
