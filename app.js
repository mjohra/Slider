const images = [
  "images/player-1.png",
  "images/player-2.png",
  "images/player-3.png",
  "images/player-4.png",
  "images/player-5.png",
  "images/player-6.png",
  "images/player-7.png",
  "images/player-8.png",
  "images/player-9.png",
  "images/player-10.png",
  "images/player-12.png"
];
let imgIndex=0;
const imgElement=document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex>=images.length){
imgIndex=0;
    }
    const imgUrl=images[imgIndex];
    imgElement.setAttribute('src',imgUrl);
    imgIndex++;
}, 2000);
