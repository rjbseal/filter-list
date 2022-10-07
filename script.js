// Array to populate <li>
const listArray = [
    "Steve",
    "Max",
    "Will",
    "Johnathan",
    "Eleven",
    "Billy",
    "Mike",
    "Hopper",
    "Dustin",
    "Robin",
    "Nancy"
]

// Get DOM elements
const filterInput = document.querySelector(".filter-input");
const output = document.querySelector(".output");

// load list elements to page dynamically
window.addEventListener("DOMContentLoaded", loadList(listArray))

function loadList(arr) {

    let html = `<ul class="list-items">`
    arr.forEach(item => {
        html += `<li class="list-item">${item}</li>`
    })

    html += `</ul>`;
    output.innerHTML = html;
    fadeInList()

}

filterInput.addEventListener("input", (e) => {
    // store user input and convert to lower case
    let userInput = e.target.value.toLowerCase();

    // if listArray contains same element as the users input
    // then return new array with matching element
    const result = listArray.filter(item => item.toLowerCase().includes(userInput))

    // display the matching element(s) to the DOM 
    loadList(result)
})

// fade in each <li> with 0.1 sec delay for each one
// fade in effect should take 0.2 sec
function fadeInList () {
    $('.list-item').each( function (i) {
        $(this).css('opacity', 0);
        $(this).delay(100 * i).animate({
          'opacity': 1.0
        }, 200);
      });
      
}