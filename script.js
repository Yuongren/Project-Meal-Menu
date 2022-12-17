// Write your code here
// document.addEventListener('DOMContentLoaded', (evetn) => {
//     getfoodsdrinksandsnacks()
// })

// function getFoodsdrinksandsnacks(){
//     fetch("http://localhost:3000/foodsdrinksandsnacks").then(res => res.json()).then(data => {
//         console.log(data);
//         data.forEach(foodsdrinksandsnacks => {
//             displayFoodsdrinksandsnacks(foodsdrinksandsnacks)
//         })
//     })
// }

function myFunction() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    x.appendChild(t);
    document.body.appendChild(x);
    alert("Please wait for 20 minutes")
  }

const star = document.querySelector(".stars a")
const stars = document.querySelectorAll(".stars a")

stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
        star.classList.add("disabled")
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx){
                otherStar.classList.add("active")
            }
        })
        console.log(`star of index ${idx +1} was clicked`);

    })
})