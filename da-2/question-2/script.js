let checkedArray = [];
let answerArray = [0, 0, 0]

const showQuizClasses = () => {
    const quizClasses = document.getElementsByClassName("option");
    
    console.log(quizClasses);
    
    Array.from(quizClasses).forEach((element, index)=>{
        if(element.checked){
            checkedArray.push(index%4)
        }
    })
    let calcAnswer = 0;
    
    for(let i = 0; i<answerArray.length; i++){
        if(checkedArray[i] == answerArray[i]){
            calcAnswer += 1;
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `You got ${calcAnswer} out of 3 questions right!`
    result.innerHTML += "<br>Correct Answers are...<br>"
    answerArray.forEach((element, index) => {
        result.innerHTML += `${quizClasses[element+4*index].id} <br>`; 
    })

    console.log(calcAnswer);
    checkedArray = [];
    answerArray = [0, 0, 0];
}
