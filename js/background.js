const images = ['0.jpg', '4.jpg', '2.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const image=document.createElement("img");
image.src=`img/${chosenImage}`;
image.className="background";//클래스 추가



document.body.appendChild(image);