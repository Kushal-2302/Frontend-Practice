// crud.js

// 1. Base URL for the API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// 2. Get reference to the output area and input box (HTML elements)
const outputElement = document.getElementById("output");
const userIdInput = document.getElementById("userIdInput");

// Small helper to show messages on the screen
function showOutput(title, data) {
  // title: string
  // data: any (object, array, etc.)

  outputElement.textContent = title + "\n\n" + JSON.stringify(data, null, 2);
}

// 3. READ: Get all users
async function getAllUsers() {
  showOutput("Getting all users...", "");

  const response = await fetch(BASE_URL);
  const data = await response.json();

  showOutput("All users:", data);
  console.log("All users:", data); // also log in console
}

// 4. READ: Get one user by ID
async function getUserById(id) {
  showOutput(`Getting user with id = ${id} ...`, "");

  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();

  showOutput(`User with id = ${id}:`, data);
  console.log(`User with id = ${id}:`, data);
}

// 5. CREATE: Add a new user
async function createUser() {
  showOutput("Creating a new user...", "");

  const newUser = {
    name: "Kushal Test",
    username: "kushal_test",
    email: "kushal@example.com",
  };

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  showOutput("Response after creating user (fake):", data);
  console.log("Response after creating user (fake):", data);
}

// 6. UPDATE: Update an existing user (PUT)
async function updateUser(id) {
  showOutput(`Updating user with id = ${id} ...`, "");

  const updatedUser = {
    id: id,
    name: "Updated Kushal",
    username: "updated_kushal",
    email: "updated@example.com",
  };

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  const data = await response.json();

  showOutput("Response after updating user (fake):", data);
  console.log("Response after updating user (fake):", data);
}

// 7. DELETE: Delete a user
async function deleteUser(id) {
  showOutput(`Deleting user with id = ${id} ...`, "");

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  showOutput("Status code after delete (fake):", { status: response.status });
  console.log("Status code after delete (fake):", response.status);
}

// 8. EVENT HANDLERS (this is the "events" concept)

// Get references to all buttons
const btnGetAll = document.getElementById("btnGetAll");
const btnGetOne = document.getElementById("btnGetOne");
const btnCreate = document.getElementById("btnCreate");
const btnUpdate = document.getElementById("btnUpdate");
const btnDelete = document.getElementById("btnDelete");

// Add "click" event listeners to buttons
btnGetAll.addEventListener("click", () => {
  // This function runs when "Get All Users" button is clicked
  getAllUsers();
});

btnGetOne.addEventListener("click", () => {
  // Get the id from the input box
  const id = userIdInput.value || 1; // default 1 if empty
  getUserById(id);
});

btnCreate.addEventListener("click", () => {
  createUser();
});

btnUpdate.addEventListener("click", () => {
  const id = userIdInput.value || 1;
  updateUser(id);
});

btnDelete.addEventListener("click", () => {
  const id = userIdInput.value || 1;
  deleteUser(id);
});
