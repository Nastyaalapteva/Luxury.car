// ===== ФИЛЬТР МАШИН =====
const filterItems = document.querySelectorAll(".cars-filter ul li");
const cars = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    
    // убрать active у всех
    filterItems.forEach((el) => el.classList.remove("active"));

    // добавить active текущему
    item.classList.add("active");

    const filterText = item.textContent.toLowerCase();

    cars.forEach((car) => {
      const title = car.querySelector("h4").textContent.toLowerCase();

      if (
        filterText === "все марки" ||
        title.includes(filterText)
      ) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }
    });

    // прокрутка к списку (мобилка тоже ок)
    carsContent.scrollIntoView({ behavior: "smooth" });
  });
});


// ===== ФОРМА БРОНИ =====
const formButton = document.querySelector(".order-form button");
const carField = document.querySelector(".order-form input[placeholder='Автомобиль']");
const nameField = document.querySelector(".order-form input[placeholder='Ваше имя']");
const phoneField = document.querySelector(".order-form input[placeholder='Ваше телефон']");

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const fields = [carField, nameField, phoneField];
  let hasError = false;

  fields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "red";
      hasError = true;
    } else {
      field.style.borderColor = "white";
    }
  });

  if (!hasError) {
    alert("Спасибо за заявку! Мы скоро свяжемся с вами!");

    fields.forEach((field) => (field.value = ""));
  }
});