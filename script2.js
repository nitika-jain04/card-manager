const cardname = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-no");
const validity = document.querySelector(".validity");
const cv = document.querySelector(".card-back-cv");

const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem("cardDetails"));

  if (!data) return;

  //   console.log(data);
  cardname.textContent = data.name;
  cardNumber.textContent = data.number;
  validity.textContent = `${data.month}/${data.year}`;
  cv.textContent = data.Cv;
};

getLocalStorage();
