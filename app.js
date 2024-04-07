const thumbContainer = document.getElementById("thumbContainer");
const displayImage = document.getElementById("displayImage");
/*const elements = document.querySelectorAll("image");*/

const images = [
  {
    url: "https://images.unsplash.com/photo-1590346320751-876ff414c050?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Space",
    class: "thumbImage",
    placeholder: "Image",
    ariaPlaceholder: "Image",
  },
  {
    url: "https://images.unsplash.com/photo-1616529927764-173a543493ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Circuit board",
    class: "thumbImage",
    placeholder: "Image",
    ariaPlaceholder: "Image",
  },
  {
    url: "https://images.unsplash.com/photo-1624806992221-12d8062c35e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cheese",
    class: "thumbImage",
    placeholder: "Image",
    ariaPlaceholder: "Image",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");

    img.src = image.url;
    img.alt = image.alt;
    img.class = image.class;

    thumbContainer.appendChild(img);

    img.addEventListener("click", function () {
      createBigImage(image);
    });
  });
}

function createBigImage(image) {
  displayImage.innerHTML = "";

  const bigImg = document.createElement("img");

  bigImg.src = image.url;
  bigImg.alt = image.alt;

  displayImage.appendChild(bigImg);
}

/*elements.forEach(function (element) {
  element.addEventListener("focus", (e) => {
    console.log(`Element ${e.currentTarget} is focused`);
  });
});
const ArrowRight = document.querySelector("ArrowRight");
let imageIndex = 0;

document.getElementById("ArrowRight").addEventListener("keydown", nextImage);

function nextImage() {
  let imageIndex = imageIndex++;
  if (imageIndex === 3) {
    let imageIndex = 0;
  }
}*/

createThumbnails();
createBigImage(images[0]);
