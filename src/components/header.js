const Header = (title, date, temp) => {
  const headObj = document.createElement('div')
  const dateObj = document.createElement('span')
  const titleObj = document.createElement('h1')
  const tempObj = document.createElement('span')

  headObj.appendChild(dateObj)
  headObj.appendChild(titleObj)
  headObj.appendChild(tempObj)

  headObj.classList.add('header')
  dateObj.classList.add('date')
  tempObj.classList.add('temp')

  dateObj.textContent = date
  titleObj.textContent = title
  tempObj.textContent = temp

  return headObj;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const selectedObj = document.querySelector(`${selector}`)
  selectedObj.appendChild(Header('The weather today!', '7/9/21', '68 degrees'))
  return selectedObj;

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}


export { Header, headerAppender }
