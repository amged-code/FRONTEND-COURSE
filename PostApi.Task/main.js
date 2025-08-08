const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const saveBtn = document.getElementById("saveBtn");
const postList = document.getElementById("postList");

let isEditing = false;
let editingLi = null;
let allUsers = []; 

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      allUsers = users;
    })
    .catch(err => console.error("Failed to load users:", err));
});

saveBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    alert("Please enter title and body.");
    return;
  }

  if (isEditing && editingLi) {
    editingLi.querySelector(".post-title").textContent = title;
    editingLi.querySelector(".post-body").textContent = body;
    resetForm();
  } else {
    const matchedUser = allUsers.find(
      user =>
        user.name.toLowerCase() === title.toLowerCase() && user.email.toLowerCase() === body.toLowerCase()
    );

    if (matchedUser) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="post-card">
          <h3 class="post-title">${matchedUser.name}</h3>
          <p class="post-body">${matchedUser.email}</p>
          <button class="btn btn-danger delete-btn">Delete</button>
          <button class="btn btn-success edit-btn">Edit</button>
        </div>
      `;

      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });

      li.querySelector(".edit-btn").addEventListener("click", () => {
        titleInput.value = matchedUser.name;
        bodyInput.value = matchedUser.email;
        isEditing = true;
        editingLi = li;
        saveBtn.textContent = "Update Post";
      });

      postList.appendChild(li);
      resetForm();
    } else {
      alert("User not found!");
    }
  }
});

function resetForm() {
  titleInput.value = "";
  bodyInput.value = "";
  isEditing = false;
  editingLi = null;
  saveBtn.textContent = "Save Post";
}
