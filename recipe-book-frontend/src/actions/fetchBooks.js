export function fetchBooks(){
  console.log("inside fetchbooks")
  fetch("http://localhost:3000/books")
  .then(resp => resp.json())
  .then(data => console.log(data))
    
}