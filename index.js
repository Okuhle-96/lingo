function names(){
    let thename = document.querySelector(".name").value;
    console.log(thename);
    localStorage.setItem('names', JSON.stringify(thename));
}