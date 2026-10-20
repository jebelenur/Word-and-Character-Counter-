const passInput = document.querySelector(".passInput");
const checkPassBtn = document.querySelector(".checkPassBtn");
const passMessage = document.querySelector(".passMessage");

checkPassBtn.addEventListener("click", () => {
  if (passInput.value.length < 6) {
    passMessage.innerHTML = "Too short!";
    passInput.style.border = "1px solid red";
  } else {
    passMessage.innerHTML = "Strong password!";
    passInput.style.border = "1px solid green";
  }
});

const ageInput = document.querySelector(".ageInput");
const ageBtn = document.querySelector(".ageBtn");
const ageResult = document.querySelector(".ageResult");

ageBtn.addEventListener("click", () => {
  if (ageInput.value >= 18) {
    ageResult.innerHTML = "Access Granted";
  } else {
    ageResult.innerHTML = "Access Denied";
  }
});

const toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
});