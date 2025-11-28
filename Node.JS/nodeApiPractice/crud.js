
// 1. Base URL for the API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// 2. READ: Get all users
async function getAllUsers() {
  console.log("Getting all users...");

  const response = await fetch(BASE_URL);
  const data = await response.json();

  console.log("All users:");
  console.log(data);
}

// 3. READ: Get one user by ID
async function getUserById(id) {
  console.log(`Getting user with id = ${id} ...`);

  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();

  console.log(`User with id = ${id}:`);
  console.log(data);
}

// 4. CREATE: Add a new user
async function createUser() {
  console.log("Creating a new user...");

  const newUser = {
    name: "Kushal Test",
    username: "kushal_test",
    email: "kushal@example.com",
  };

  const response = await fetch(BASE_URL, {
    method: "POST",   // Specify POST method, we are doing a CREATE operation.
    headers: {
      "Content-Type": "application/json",  // Specify JSON content
    },
    body: JSON.stringify(newUser),  // Convert JS object to JSON string
  });

  const data = await response.json(); // The created user data

  console.log("Response after creating user (fake):");
  console.log(data);
}

// 5. UPDATE: Update an existing user (PUT)
async function updateUser(id) {
  console.log(`Updating user with id = ${id} ...`);

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

  console.log("Response after updating user (fake):");
  console.log(data);
}

// 6. DELETE: Delete a user
async function deleteUser(id) {
  console.log(`Deleting user with id = ${id} ...`);

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  console.log("Status code after delete (fake):", response.status);
}

// 7. Call the functions to test one by one
async function main() {
  // Uncomment one at a time to see clearly

  await getAllUsers();
//   await getUserById(1);
//   await createUser();
//   await updateUser(1);
//   await deleteUser(1);
}

main();
