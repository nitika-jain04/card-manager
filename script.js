const cardname = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-no");
const validity = document.querySelector(".validity");
const cv = document.querySelector(".card-back-cv");
const cardNumberError = document.querySelector(".card-no-error");
const dateError = document.querySelector(".date-error");
const CVError = document.querySelector(".Cv-error");
const confirm = document.querySelector(".btn");

const nameInput = document.querySelector(".name");
const numberInput = document.querySelector(".number");
const monthInput = document.querySelector(".date--month");
const yearInput = document.querySelector(".date--year");
const CV = document.querySelector(".CVC");
nameInput.focus();

confirm.addEventListener("click", function (e) {
  let check = numberInput.value.replaceAll(" ", "");
  // console.log(numberInput.value);

  if (numberInput.value === "") {
    cardNumberError.style.opacity = 1;
    return;
  } else {
    cardNumberError.style.opacity = 0;
  }

  if (isFinite(+check)) {
    cardNumberError.style.opacity = 0;
  } else {
    cardNumberError.style.opacity = 1;
    return;
  }

  if (monthInput.value === "" || yearInput.value === "") {
    dateError.style.opacity = 1;
    return;
  } else {
    dateError.style.opacity = 0;
  }

  if (CV.value === "") {
    CVError.style.opacity = 1;
    return;
  } else {
    CVError.style.opacity = 0;
  }

  if (isFinite(+monthInput.value)) {
    validity.textContent = `${monthInput.value}/${yearInput.value}`;
  }
  if (isFinite(+yearInput.value)) {
    validity.textContent = `${monthInput.value}/${yearInput.value}`;
  } else {
    dateError.style.opacity = 1;
  }

  cardNumber.textContent = numberInput.value;
  cardname.textContent = nameInput.value;

  if (isFinite(+CV.value)) {
    cv.textContent = CV.value;
  } else {
    CVError.style.opacity = 1;
  }

  const data = {
    name: nameInput.value,
    number: numberInput.value,
    month: monthInput.value,
    year: yearInput.value,
    Cv: CV.value,
  };

  setTimeout(function () {
    setLocalStorage();
    window.location.href = "http://127.0.0.1:5500/thankyou.html";
  }, 1000);

  const setLocalStorage = function () {
    localStorage.setItem("cardDetails", JSON.stringify(data));
  };
});
