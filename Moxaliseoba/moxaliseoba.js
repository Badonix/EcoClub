const input = document.getElementById("saxgvar");
const elfost = document.getElementById("elfost");
const class1 = document.getElementById("class");
const fb = document.getElementById("fb");
const about = document.getElementById("about");
const btn = document.getElementById("contact-submit");

btn.addEventListener("click", function () {
  setTimeout(function () {
    console.log("done");
    input.value = "";
    elfost.value = "";
    class1.value = "";
    fb.value = "";
    about.value = "";
  }, 2000);
});
