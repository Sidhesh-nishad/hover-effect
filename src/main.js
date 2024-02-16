//selection of that particluar div where i want to inject html

const mainContainer = document.querySelector(".main_container");

// this array includes all details of card
const imageCardArr = [
  {
    image: "../public/images/firstImage.png",
    titleyellow1: "",
    titleyellow2: "Development",
    titlewhite1: "Holistic",
    titlewhite2: "",
    description: "Right Mix of Curricular and Co-Curricular Activities.",
  },
  {
    image: "../public/images/secondImage.png",
    titleyellow1: "Proven",
    titleyellow2: "Tested",
    titlewhite1: "and",
    titlewhite2: "Centralized Curriculum",
    description:
      "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students.",
  },
  {
    image: "../public/images/thirdImage.png",
    titleyellow1: "Innovative",
    titleyellow2: "Challenging",
    titlewhite1: "and",
    titlewhite2: "learning Methodologies",
    description:
      "Facilitate excellence through critical thinking and profound learning",
  },
  {
    image: "../public/images/fourthImage.png",
    title: "Faculty Enrichment Program",
    titleyellow1: "Faculty",
    titleyellow2: "",
    titlewhite1: "Enrichment Program",
    titlewhite2: "",
    description: "Regular teacher training and curriculum workshops",
  },
];

// injecting html

mainContainer.insertAdjacentHTML(
  "afterbegin",
  imageCardArr
    .map(
      (cardItems) =>
        `<div class="container">
        <img class="image" src=${cardItems.image} alt="Your Image" />
        <div class="overlay">
          <div class="overlay_content">
            <h1>
            <span class="text_yellow">${cardItems.titleyellow1}</span>
            <span class="text_white">${cardItems.titlewhite1}</span>
            <span class="text_yellow">${cardItems.titleyellow2}</span>
            <span class="text_white">${cardItems.titlewhite2}</span>
            </h1>
            <p class="description">
              ${cardItems.description}
            </p>
          </div>
        </div>
        <div class="bottom">
          <h1>
          <span class="text_yellow">${cardItems.titleyellow1}</span>
          <span class="text_white">${cardItems.titlewhite1}</span>
          <span class="text_yellow">${cardItems.titleyellow2}</span>
          <span class="text_white">${cardItems.titlewhite2}</span>
          </h1>
        </div>
      </div>`
    )
    .join(" ")
);
