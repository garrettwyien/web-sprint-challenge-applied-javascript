import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerdiv = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerdiv);
  authorDiv.appendChild(authorName);
  imgContainerdiv.appendChild(image);

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainerdiv.classList.add('img-container');

  headlineDiv.textContent = `${article.headline}`;
  authorName.textContent = `By ${article.authorName}`;

  image.setAttribute('src', `${article.authorPhoto}`);
  return cardDiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
 
const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      res.data.articles.javascript.forEach(elem => {
        let newArticle = Card(elem);
        const newObj = document.querySelector(`${selector}`);
        newObj.appendChild(newArticle);
        return newObj;
      })
      res.data.articles.bootstrap.forEach(elem => {
        let newArticle = Card(elem);
        const newObj = document.querySelector(`${selector}`);
        newObj.appendChild(newArticle);
        return newObj;
      })
      res.data.articles.technology.forEach(elem => {
        let newArticle = Card(elem);
        const newObj = document.querySelector(`${selector}`);
        newObj.appendChild(newArticle);
        return newObj;
      })
      res.data.articles.jquery.forEach(elem => {
        let newArticle = Card(elem);
        const newObj = document.querySelector(`${selector}`);
        newObj.appendChild(newArticle);
        return newObj;
      })
      res.data.articles.node.forEach(elem => {
        let newArticle = Card(elem);
        const newObj = document.querySelector(`${selector}`);
        newObj.appendChild(newArticle);
        return newObj;
      })
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
