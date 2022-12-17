// Write your code here


// function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode("Click me");
//     x.appendChild(t);
//     document.body.appendChild(x);
//     alert("Please wait for 20 minutes")
//   }

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