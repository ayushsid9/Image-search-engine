const accessKey = "meFv3waTR2j049vMCJRQg2jVLlN7RqmM3suLAfVjIq0";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const respone = await fetch(url);
  const data = await respone.json();


//   for showing indiviual type of search element

  if (page === 1) {
    searchResult.innerHTML = '';
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank"; //"_blank" opens image link in new tab insted of in the search page

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
 showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); //for prevention of blank page
  page = 1;
  searchImages();
});

//to see more images:
showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
