var modal = document.getElementById('myModal');
var img = document.querySelectorAll('.slick__imagem');
var modalImg = document.getElementById("image");

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

modal.onclick = function () {
    modal.style.display = "none";
}

modalImg.onclick = function (event) {
    event.stopPropagation();
}