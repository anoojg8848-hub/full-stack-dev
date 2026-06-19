function addCart() {
    alert("Plant added to cart successfully!");
}

function darkMode() {
    document.body.classList.toggle("dark");
}

function changeColor() {
    document.getElementById("heading").style.color = "yellow";
}

function showTime() {
    document.getElementById("time").innerHTML =
        new Date().toLocaleString();
}

setInterval(showTime, 1000);