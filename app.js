const images = [
  "images/1.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  //"images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  //"images/9.jpg",
 // "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  //"images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.jpg",
  "images/21.jpg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  //"images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
 // "images/30.jpg",
  "images/31.jpg",
  "images/32.jpg",
  "images/33.jpg",
  //"images/34.jpg",
  "images/35.jpg",
  "images/36.jpg",
  "images/37.jpg"
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
