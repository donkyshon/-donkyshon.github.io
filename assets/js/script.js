'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}


const filterFunc = function (selectedValue) {
  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// Sample project data
const projectsData = [
  {
    category: "Android App",
    title: "Harry Potter™ Strategy Game",
    imageSrc: "./assets/images/project-1.png",
    link: "https://github.com/0HugoHu/Harry-Potter-Strategy-Game"
  },
  {
    category: "Web App",
    title: "AI Powered Picture Generator",
    imageSrc: "./assets/images/project-4.png",
    link: "https://github.com/0HugoHu/IDS721-Dalle2"
  },
];

const projectList = document.getElementById("project-list");


// Iterate through the project data and generate list items
projectsData.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.className = "project-item active";
  listItem.setAttribute("data-filter-item", "");
  listItem.setAttribute("data-category", project.category.toLowerCase());

  listItem.innerHTML = `
      <a href="${project.link}" target="_blank">
          <figure class="project-img">
              <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${project.imageSrc}" alt="${project.category}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
      </a>
  `;

  projectList.appendChild(listItem);
});



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


const data = [
  {
    src: "./assets/images/photos/Great Smoky Mountain/DSCF8748.jpg",
    alt: "Great Smoky Mountain",
    category: "Travel",
    date: "Oct 22, 2023",
    title: "Great Smoky Mountain",
    text: "The name \"Smoky\" comes from the natural fog that often hangs over the range and presents as large smoke plumes from a distance."
  },
  {
    src: "./assets/images/photos/Duke/DUKE Fall 01.jpg",
    alt: "Duke Fall 2022",
    category: "Activity",
    date: "Oct 15, 2022",
    title: "Duke Fall 2022",
    text: "The first fall at Duke University. As the maple leaves turn red, the chapel view becomes more beautiful."
  }

];


const folderMapping = {
  "Duke Fall 2022": "Duke",
};

// Get the ul element where the list items will be added
const ul = document.getElementById("showcase-list");

// Get the pop-up elements
const popupContainer = document.getElementById("popup-container");
const popupOverlay = document.getElementById("popup-overlay");
const popupContent = document.getElementById("popup-content");
const popupClose = document.getElementById("popup-close");
const popupTitle = document.getElementById("popup-title");
const popupCategory = document.getElementById("popup-category");
const popupDate = document.getElementById("popup-date");
const popupText = document.getElementById("popup-text");
const popupImages = document.getElementById("popup-images");


// Function to open the pop-up with data
function openPopup(item) {
  popupTitle.textContent = item.title;
  popupCategory.textContent = item.category;
  popupDate.textContent = item.date;
  popupText.textContent = item.text;

  // Load images for the current title
  loadImagesForTitle(item.title);

  popupContainer.classList.toggle("active");
  popupOverlay.classList.toggle("active");
}

// Function to close the pop-up
function closePopup() {
  popupContainer.classList.toggle("active");
  popupOverlay.classList.toggle("active");
}


// Loop through the data and generate list items
data.forEach(item => {
  const li = document.createElement("li");
  li.className = "showcase-post-item";

  li.innerHTML = `
      <a href="#">
          <figure class="showcase-banner-box">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
          </figure>
          <div class="showcase-content">
              <div class="showcase-meta">
                  <p class="showcase-category">${item.category}</p>
                  <span class="dot"></span>
                  <time datetime="2022-02-23">${item.date}</time>
              </div>
              <h3 class="h3 showcase-item-title">${item.title}</h3>
              <p class="showcase-text">${item.text}</p>
          </div>
      </a>
  `;

  li.addEventListener("click", () => {
    openPopup(item);
  });

  ul.appendChild(li);
});


// Close pop-up when the close button is clicked
popupClose.addEventListener("click", closePopup);

// Close pop-up when clicking outside the content area
popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});

const container = document.getElementById("image-list-container");
const enlargeContainer = document.getElementById("enlarge-container");
const enlargeOverlay = document.getElementById("enlarge-overlay");
const modal = document.getElementById("enlarge-modal");
const modalImage = document.getElementById("enlarge-image");
const closeBtn = document.getElementById("enlarge-close");

// Function to open the modal and display the clicked image
function openModal(imageSrc) {
  enlargeContainer.classList.toggle("active");
  enlargeOverlay.classList.toggle("active");
  modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  enlargeContainer.classList.toggle("active");
  enlargeOverlay.classList.toggle("active");
}


// Event listener for opening the modal when an image is clicked
container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    openModal(e.target.src);
  }
});

// Event listener for closing the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Event listener for closing the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


async function loadImagesForTitle(title) {
  const folderName = folderMapping[title];


  if (!folderName) {
    console.error("Folder mapping not found for title: " + title);
    return;
  }

  // Clear existing images
  container.innerHTML = "";

  try {
    const response = await fetch(`./assets/images/photos/${folderName}/images.json`);
    const imageUrls = await response.json();

    // Load images from the folder
    for (const imageUrl of imageUrls) {
      const img = document.createElement("img");
      img.src = `./assets/images/photos/${folderName}/${imageUrl}`;
      container.appendChild(img);
    }

  } catch (error) {
    console.error("Error loading images:", error);
  }
}