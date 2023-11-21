let pets = {
  data: [
    {
      petName: "deskirpsi hewan",
      category: "dog",
      image: "images/dog1.jpg",
    },
    {
      petName: "deskirpsi hewan",
      category: "cat",
      image: "images/cat2.jpg",
    },
    {
      petName: "deskirpsi hewan",
      category: "others",
      image: "images/others1.jpg",
    },
    {
      petName: "anjing hitam",
      category: "dog",
      image: "images/dog2.jpg",
    },
    {
      petName: "deskirpsi hewan",
      category: "bird",
      image: "images/bird (2).jpg",
    },
    {
      petName: "deskirpsi hewan",
      category: "cat",
      image: "images/cat1.jpg",
    },
    {
      petName: "BIRDs BROS/ barudak ",
      category: "bird",
      image: "images/bird (1).jpg",
    },
    {
      petName: "babi spidermen",
      category: "others",
      image: "images/others.jpg",
    },
  ],
};

for (let i of pets.data) {

  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("pet-name");
  name.innerText = i.petName.toUpperCase();
  container.appendChild(name);

  let clickHereButton = document.createElement("button");
  clickHereButton.innerText = "Click Here";
  clickHereButton.addEventListener("click", redirectToAnotherPage); 
  container.appendChild(clickHereButton);

  card.appendChild(container);
  document.getElementById("pets").appendChild(card);
}

function redirectToAnotherPage(event) {
  let category = event.currentTarget.parentElement.classList[1]; 
  let newPageURL = ""; 

  switch (category) {
    case "dog":
      newPageURL = "dog.html"; // URL for dog products
      break;
    case "cat":
      newPageURL = "cat.html"; // URL for cat products
      break;
    case "bird":
      newPageURL = "bird.html"; // URL for bird products
      break;
    case "others":
      newPageURL = "other.html"; // URL for other products
      break;
    default:
      newPageURL = "default.html"; // URL for default products or handle other cases
      break;
  }

  window.location.href = newPageURL;
}

function filterPet(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value === "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".pet-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});


window.onload = () => {
  filterPet("all");
};