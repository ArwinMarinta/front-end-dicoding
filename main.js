const submitAction = document.getElementById("inputBook");

submitAction.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputBookTitle = document.getElementById("inputBookTitle").value;
  const inputBookAuthor = document.getElementById("inputBookAuthor").value;
  const inputBookYear = parseInt(document.getElementById("inputBookYear").value);
  const inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;

  const book = {
    id: +new Date(),
    title: inputBookTitle,
    author: inputBookAuthor,
    year: inputBookYear,
    isComplete: inputBookIsComplete,
  };

  var booksArray = JSON.parse(localStorage.getItem("book") || "[]");
  booksArray.push(book);
  localStorage.setItem("book", JSON.stringify(booksArray));
});
