const ENDPOINT = "https://api.github.com/users";
const showUsersButton = document.getElementById("showUsersButton");
const outputDiv = document.getElementById("output");

showUsersButton.addEventListener("click", () => {
  showUsersButton.style.display = "none";

  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}">
          <span>${user.login}</span>
        `;
        outputDiv.appendChild(userCard);
      });
    })
    .catch((error) => console.error("Error fetching users:", error));
});
