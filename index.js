// document.addEventListener("DOMContentLoaded", function () {
//     const cardData = [
//       {
//         image: "./assets/rooms.jpg",
//         category: "Rooms",
//         paragraph:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         image: "./assets/dining.jpg",
//         category: "Dining",
//         paragraph:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       // Add more card data as needed
//     ];
  
//     const cardContainer = document.querySelector(".card-container");
  
//     cardData.forEach((card) => {
//       const cardElement = createCard(card);
//       cardContainer.appendChild(cardElement);
//     });
//   });
  
//   function createCard(card) {
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");
  
//     const img = document.createElement("img");
//     img.src = card.image;
//     img.alt = "image";
//     cardDiv.appendChild(img);
  
//     const categoryDiv = document.createElement("div");
//     categoryDiv.classList.add("card-category");
//     categoryDiv.innerHTML = `<p>${card.category}</p>`;
//     cardDiv.appendChild(categoryDiv);
  
//     const paragraphDiv = document.createElement("div");
//     paragraphDiv.classList.add("card-paragraph");
//     paragraphDiv.innerHTML = `<p>${card.paragraph}</p>`;
//     cardDiv.appendChild(paragraphDiv);
  
//     const button = document.createElement("button");
//     button.textContent = "Learn More";
//     cardDiv.appendChild(button);
  
//     return cardDiv;
//   }