async function fetchCarsData() {
  try {
    const response = await fetch("masinos.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

function createCarCard(brand, models) {
  const carCard = document.createElement("div");
  carCard.classList.add("car-card");

  const brandElement = document.createElement("h2");
  brandElement.textContent = brand;
  carCard.appendChild(brandElement);

  const modelsList = document.createElement("ul");
  models.forEach((model) => {
    const modelItem = document.createElement("li");
    modelItem.textContent = model;
    modelsList.appendChild(modelItem);
  });
  carCard.appendChild(modelsList);

  return carCard;
}

async function displayCarsData() {
  const carsData = await fetchCarsData();
  if (carsData) {
    const carsList = document.getElementById("cars-list");
    carsData.forEach((car) => {
      const carCard = createCarCard(car.brand, car.models);
      carsList.appendChild(carCard);
    });
  }
}

displayCarsData();
