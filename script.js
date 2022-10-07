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

const filterInput = document.querySelector(".filter-input");
const output = document.querySelector(".output");
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
    let userInput = e.target.value.toLowerCase();
    const result = listArray.filter(item => item.toLowerCase().includes(userInput))

    loadList(result)
})

function fadeInList () {
    $('.list-item').each( function (i) {
        $(this).css('opacity', 0);
        $(this).delay(100 * i).animate({
          'opacity': 1.0
        }, 200);
      });
      
}