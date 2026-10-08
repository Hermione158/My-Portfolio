const Var = document.getElementById("var1")
const Input = document.getElementById("input-name")
const Image = document.getElementById("image")
const Output2 = document.getElementById("output")
const BtnClick = document.getElementById("btn-click")
const BtnDbClick = document.getElementById("btn-dbclick")
const BtnPress = document.getElementById("btn-press")
const Course = document.getElementById("select")
Image.addEventListener (
    "mouseover", function(){
        Image.style.transform = "scale(1.5)";
    }
)

Image.addEventListener (
    "mouseout", function(){
        Image.style.transform = "scale(1)";
    }
)

Image.addEventListener (
    "mouseover", function(){
        Output2.innerHTML = "Mouse reach the Image"
    }
)

Image.addEventListener (
    "mouseout", function(){
        Output2.innerHTML = "Mouse didn't reach the Image"
    }
)

Input.addEventListener(
    "input", function(){
        Var.innerHTML = Input.value || "Hermione";
        Output2.innerHTML = "The user is Typing";
    }
)

Input.addEventListener(
    "change", function(){
        Var.innerHTML = "Hello: " + Input.value + " "
    }
)

BtnClick.addEventListener (
    "click", function(){
        Var.innerHTML = "Michael";
        Output2.innerHTML = "You click the Click button";

    }
)

BtnDbClick.addEventListener (
    "dblclick", function(){
        Var.style.color = "Blue";
        Output2.innerHTML = "You click the DoubleClick button";
    }
)

BtnPress.addEventListener (
    "mousedown", function(){
        BtnPress.style.backgroundColor = "black";
         BtnPress.style.transform = "scale(0.5)";
        Output2.innerHTML = "You Hold the Button";
    }
)


BtnPress.addEventListener (
    "mouseup", function(){
        BtnPress.style.backgroundColor = "blue";
        BtnPress.style.transform = "scale(1)";
        Output2.innerHTML = "You Released the Button";
    }
)


Course.addEventListener (
    "click", function(){
        Output2.innerText = "You Pick: " + Course.value
    }
)
