const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");
//variable to display bit by bit authors
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];
//fetching and catching data from server
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    //the data of the server cconsole.log("Author Data Array: ",authorDataArr);
    authorDataArr = data;
    //slicing data to show only the first 8
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex));
  })
  .catch((err) => {
    //to see the error - console.error(`There was an error: ${err}`);
    authorContainer.innerHTML = `
    <p class="error-msg">There was an error loading the authors</p>
    `;
  })

//method to load more
const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex));
    //event where no more data or end of data showing
    if(authorDataArr.length <= endingIndex){
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No more data to load";
        loadMoreBtn.style.cursor = "not-allowed";
    }
};

//putting to web the authors from fetch
const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += `
            <div id = "${index}" class = "user-card">
                <h2 class = "author-name">${author}</h2>
                <img class = "user-img" src = "${image}" alt = "${author} avatar">
                <div class = "purple-divider"></div>
                <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
                <a class = "author-link" href = "${url}" target = "_blank">${author}'s author page</a>
            </div>
        `;
    });
};

//event to load more
loadMoreBtn.addEventListener("click",fetchMoreAuthors);