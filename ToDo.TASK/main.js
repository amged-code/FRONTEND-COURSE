const inputLanguage = document.getElementById("input-language");
const listLanguage = document.getElementById("list-language");

const btn = document.querySelector(".Add");
const courses = [
  {
    title: "JavaScript",
    level: "Hard",
    description: "A versatile scripting language mainly used for adding interactivity and dynamic content to websites. Runs in browsers and on servers (Node.js).",
    icon: "fa-brands fa-js",
  },
  {
    title: "Python",
    level: "Easy",
    description: "A high-level, interpreted programming language known for its readability and simplicity. Widely used in web development, data science, automation and more",
    icon: "fa-brands fa-python",
  },
  {
    title: "Css",
    level: "Normal",
    description: "A style sheet language used to describe the presentation and layout of web pages, controlling colors, fonts, spacing, and responsiveness.",
    icon: "fa-brands fa-css3",
  },
  {
    title: "Html",
    level: "Easy",
    description: "The standard markup language for creating the structure of web pages. It defines elements like headings, paragraphs, images, and links",
    icon: "fa-brands fa-html5",
  },
];


courses.forEach(course => {
  console.log("Title:", course.title);
  console.log("Level:", course.level);
  console.log("Description:", course.description);
  console.log("--------------");
});

function addLanguage() {
  let languageValue = inputLanguage.value;
  if (languageValue === "") {
    alert("You must add Programming Language");
    return;
  }
   const course = courses.find(c => c.title.toLowerCase() === languageValue.toLowerCase());
  if (!course) {
    alert("Language not found in database");
    return;
  }
  let li = document.createElement("li");
  let span = document.createElement("span");
  let editBtn = document.createElement("button"); 
  let icon = document.createElement("i");
      icon.className = course.icon;

    
  let title = document.createElement("strong");
  title.textContent = course.title;

  let level = document.createElement("p");
  level.textContent = course.level;

  let desc = document.createElement("p");
  desc.textContent = course.description;  

  li.innerHTML = languageValue + " ";

  span.innerHTML = "&times;";
  span.onclick = function () {
    li.remove();
  };

  editBtn.innerHTML = "Edit";
  editBtn.onclick = function () {

  let newLevel = prompt("Edit Level:", course.level);
  if (newLevel) {
    course.level = newLevel;
    level.textContent = "Level: " + newLevel;
  }

  let newDesc = prompt("Edit Description:", course.description);
  if (newDesc) {
    course.description = newDesc;
    desc.textContent = newDesc;
  }
};
  
  editBtn.style.background = "linear-gradient(to right, rgb(12, 17, 113), rgb(55, 64, 227))";
  editBtn.style.color = "white";
  editBtn.style.fontSize = "14px";
  editBtn.style.padding = "5px 10px";
  editBtn.style.borderRadius = "5px";
  editBtn.style.border = "none";
  editBtn.style.cursor = "pointer";
  editBtn.style.display="flex";
  editBtn.style.marginLeft="200px";


  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(icon);
  li.appendChild(title);
  li.appendChild(level);
  li.appendChild(desc);

  listLanguage.appendChild(li);
  inputLanguage.value = "";
}

btn.addEventListener("click", addLanguage);
