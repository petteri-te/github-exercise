document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const searchInput = document.getElementById("header-search-input");
  const searchResults = document.getElementById("search-results");
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");
  const registerPassword = document.getElementById("register-password");
  const registerVerifPassword = document.getElementById(
    "register-verif-password"
  );

  // TODO: Create a check input for form

  // TODO: Create a check for input when login

  // TODO: Handle display register form

  // TODO: Handle display login form

  menuIcon.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
    menuIcon.classList.toggle("rotate");
  });

  //Show a pop-up to clarify the changes in the form
  alert(
    "The form was simplified earlier with just 'Name' and 'Address'. It has now been expanded into 'Last name', 'First name', 'Street address', and 'Post code and City' for improved detail and clarity.\n\n- Updated by Md Waliullah"
  );

  searchInput.addEventListener("input", async function () {
    const searchValue = searchInput.value;

    if (searchValue.length > 2 && !searchResults.classList.contains("show")) {
      searchResults.classList.add("show");
    } else if (
      searchValue.length <= 2 &&
      searchResults.classList.contains("show")
    ) {
      searchResults.classList.remove("show");
    }

    if (searchValue.length > 2) {
      const response = await fetch(`/search?q=${searchValue}`);
      const data = await response.json();
      displaySearchResults(data, searchValue);
    }
  });

  loginButton.addEventListener("click", function () {
    console.log("login button clicked");
  });

  registerButton.addEventListener("click", function () {
    console.log("register button clicked");
  });

  function displaySearchResults(results, searchValue) {
    const resultsContainer = document.querySelector(
      ".header-search-results-container"
    );

    resultsContainer.innerHTML = "";
    if (results.length === 0) {
      const h1 = document.createElement("h1");
      h1.innerHTML = `
      <h1>No results found with "${searchValue}"</h1>
      `;
      resultsContainer.appendChild(h1);
    } else {
      const grid = document.createElement("table");
      grid.classList.add("grid");
      grid.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      `;
      resultsContainer.appendChild(grid);
      const tbody = grid.querySelector("tbody");
      results.forEach((result) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${result.name}</td>
          <td>${result.address}</td>
          <td>${result.city || "No city"}</td>
          <td>${result.state || "No state"}</td>
          <td>${result.zip || "No zip"}</td>
      `;
        tbody.appendChild(tr);
      });
    }
  }
});
