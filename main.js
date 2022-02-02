const optionsBlock = document.querySelector(".options");
const options = optionsBlock.querySelectorAll("option");
const car = document.querySelector(".car");
const price = document.querySelector(".price");

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

optionsBlock.addEventListener("change", (e) => {
  let content = e.target.value;
  getData("cars.json")
    .then((data) => {
      data.cars.forEach((element) => {
        if (element.brand === content) {
          car.innerText = "Тачка " + element.brand + " " + element.model;
          price.innerText = "Цена: " + element.price + "$";
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

getData("cars.json")
  .then((data) => {
    data.cars.forEach((element) => {
      let newOption = document.createElement("option");
      optionsBlock.append(newOption);
      newOption.textContent = element.brand;
    });
  })
  .catch((error) => {
    console.log(error);
  });
