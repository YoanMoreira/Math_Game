let score = 0;
let timer;
let correctAnswer;
let level = 1;
let time = 0;

function generateEquation() {
    // Génère 2 numéros aléatoires en fonction du niveux
    const num1 = Math.floor(Math.random() * 10*level) + 1;
    const num2 = Math.floor(Math.random() * 10*level) + 1;
    // Sélectionne un opérateur aléatoire
    const operators = ["+", "-", "*", "/"]; 
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let equation = num1 + " " + operator + " " + num2 + " = ?";
    document.getElementById("equation").innerText = equation;

    switch (operator){
        case '+':
            correctAnswer = Number(num1)+Number(num2)
            break
        case '-':
            correctAnswer = Number(num1)-Number(num2)
            break   
        case '*':
            correctAnswer = Number(num1)*Number(num2)
            break
        case '/':
            correctAnswer = Number(num1)/Number(num2)
            break    
    }
    //si la réponse n'est pas un nombre entier ou en dessous de 0 
    //regenere unee équation 
    if(!Number.isInteger(correctAnswer)|| correctAnswer <0){
        console.log("old equation", equation)
        generateEquation();
        
    }

    console.log("Correct answer: ",correctAnswer)
}

function checkAnswer(){
    //check si la reponse de l'utilisateur et la meme
    const answer = Number(document.getElementById("answer").value)

    if(answer === correctAnswer){
        // update du score
       score ++;
       document.getElementById("score").textContent = score;
       if (score > level *10){
        level +=1
        document.getElementById("level").innerText =level;
       }

       //genere une autre equation
       generateEquation()
       document.getElementById("answer").value =""
    }

}
function starTimer() {
    time = 0;
    timer = setInterval(()=>{
        time ++;
        document.getElementById("time").textContent=time
    },1000)
}

generateEquation();
starTimer()