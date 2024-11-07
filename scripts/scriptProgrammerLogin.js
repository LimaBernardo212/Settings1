const eyer = document.querySelector("#eyer");
const pin = document.querySelector("#pin");
const ever = document.querySelector("#ever");
const sobpin = document.querySelector("#sobpin");
var everImageTrocar = "images/olho.png";
var everImage = "images/olho (1).png";
eyer.addEventListener("click", function (){
    pin.type = pin.type === "password" ? "text" : "password";
    document.getElementById("everIMg").src = everImage;
    let aux = everImageTrocar
    everImageTrocar = everImage
    everImage = aux
})
ever.addEventListener("click", function (){
    sobpin.type = sobpin.type === "password" ? "text" : "password";
    document.getElementById("Everelson").src = everImage;
    let aux = everImageTrocar
    everImageTrocar = everImage
    everImage = aux
})
