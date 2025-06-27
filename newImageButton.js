const images = [
    "https://cdn.pixabay.com/photo/2014/10/21/19/17/apple-496981_1280.jpg",
    "https://i.pinimg.com/736x/4a/6a/01/4a6a019b3cfe64a012ead0980874edd7.jpg",
    "./watermelonman.jpg"
];

let currentIndex = 0;

const button = document.querySelector("#myButton");
const image = document.querySelector("#sillyImage");

button.addEventListener("pointerup", () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});