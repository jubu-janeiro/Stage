/* PAGE OF BLOG */

const  inputCreateReponse = document.querySelector(".create-reponse-input");
const createReponse = document.getElementById("need-create-reponse");
const createQuestion = document.querySelector(".create-new-question");
const inputCreateQuestion = document.querySelector(".create-question");

createReponse.addEventListener("click", () =>{
    let x = inputCreateReponse.classList.toggle('show');  
    if (x == 1) {
        createReponse.textContent = 'Hide Post Response';
    }
    else {
       createReponse.textContent = 'Post Response'; 
    }
    
})
createQuestion.addEventListener("click", () =>{
    let x = inputCreateQuestion.classList.toggle('show');  
    if (x == 1) {
        createQuestion.classList.add('clicked');
        createQuestion.textContent = 'Hide Post Question';
    }
    else {
        createQuestion.classList.remove('clicked');
       createQuestion.textContent = 'Post Question'; 
    }
    
})