// Exercise 1
console.groupCollapsed("Exercise 1")
myDiv.style.background = "lightblue";
const para1 = document.getElementById('para1').innerText;
console.log(para1);
const para2 = document.getElementById('para2').innerText;
console.log(para2);
console.groupEnd();

// Exercise 2
console.groupCollapsed('Exercise 2')
function changeBackground() {
const change = document.body
change.classList.toggle("dark-mode");
}
console.groupEnd();

// Exercise 3
console.groupCollapsed('Exercise 3')
    let buttons = document.querySelectorAll('.btn_onclick');
    buttons.forEach(function(button, index){
        button.onclick = function() {
            let randomColor = getRandomColor();
            document.body.style.backgroundColor = randomColor;
        }
        console.log('click')
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#'
        for( let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()* 16)];
        }
        return color;
    }

console.groupEnd()

// Exercise 4
console.groupCollapsed('Exercise 4')
const alertButton = document.getElementById("alertButton");

function alertFunction() {
    alert ("Button was clicked!");
}
alertButton.addEventListener("click", alertFunction)
console.groupEnd()

// Exercise 5
console.groupCollapsed('Exercise 5')
const input = document.getElementById("textInput")
const display = document.getElementById("textDisplay")

input.addEventListener("input", updateDisplay);

function updateDisplay(e) {
    display.textContent = e.target.value
}
console.groupEnd()

// Exercise 6 

const items = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'}
];

let list = document.getElementById("itemList")

for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.innerText = items[i].name;
    list.appendChild(li);
}

