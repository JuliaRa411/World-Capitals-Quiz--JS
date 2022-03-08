const button = document.querySelector("#btn");
button.addEventListener("click", result);


const par  = document.querySelector("#show");

function result(e){
    e.preventDefault()
    
 let points = 0

if (document.querySelector("#answerOne").checked){
    points++;
}

if (document.querySelector("#answerTwo").checked){
    points++;
}

if (document.querySelector("#answerThree").checked){
    points++;
}

if (document.querySelector("#answerFour").checked){
    points++;
}

if (document.querySelector("#answerFive").checked){
    points++;
}

if (document.querySelector("#answerSix").checked){
    points++;
}

if (document.querySelector("#answerSeven").checked){
    points++;
}

 if (document.querySelector("#answerOne","#answerTwo", "#answerThree","#answerFour", "#answerFive", "#answerSix","#answerSeven" ).checked) {  

    Swal.fire({
    
        text: 'Good Job!!!',
        imageUrl: 'https://images.unsplash.com/photo-1499233983070-99a5f004e720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',   
              
        imageWidth: 450,
        imageHeight: 400,
      })
}

 
else  {
    Swal.fire({
      
        title: 'Oops...',
        text: 'Try again!',
         
      })
}
 par.textContent = "Your points:  " + points;
}