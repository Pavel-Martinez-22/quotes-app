const quote = document.querySelector(".quote");

const generate = document.getElementById("generate");

const category = document.getElementById("category");

const likeQuote = document.getElementById("likeQuote");

const likeList = document.getElementById("likeList");

const baseUrl = "https://full-stack-api-and-random-quote-generator.onrender.com/";

window.addEventListener("load", () => {
  generateQuotes();
});

document.getElementById("generate").addEventListener("click", generateQuotes);

function generateQuotes() {
  let div = document.createElement("div");
  quote.innerHTML = `Loading New Random Quotes...<i class = "fa-solid fa-sync fa-spin"></i>`;
  generate.innerHTML = "Generating...";

  fetch(`${baseUrl}api/quotes/read_single.php/?random=true`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      generate.innerHTML = "New Random Quote";

      quote.innerHTML = "";
      div.innerHTML += '<i class ="fa-solid fa-quote-left"></i> &nbsp;';
      div.innerHTML += data.quote;
      div.innerHTML += '&nbsp; <i class ="fa-solid fa-quote-right"></i>';

      div.innerHTML += `<div class="author"><span>__</span>${data.author}</div>`;
      quote.append(div);

      category.innerHTML = data.category;
    });
}
