const questionJson = 
[
    {
        "question": "What is the capital of France?",
        "correctAnswer": "Paris",
        "options": ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        "question": "What planet is known as the Red Planet?",
        "correctAnswer": "Mars",
        "options": ["Venus", "Earth", "Mars", "Jupiter"]
    },
    {
        "question": "Who was the first President of the United States?",
        "correctAnswer": "George Washington",
        "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"]
    },
    {
        "question": "Which sport is known as 'the beautiful game'?",
        "correctAnswer": "Soccer",
        "options": ["Basketball", "Soccer", "Tennis", "Baseball"]
    },
    {
        "question": "Who directed the movie 'Inception'?",
        "correctAnswer": "Christopher Nolan",
        "options": ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"]
    },
    {
        "question": "Which is the largest ocean on Earth?",
        "correctAnswer": "Pacific Ocean",
        "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]
    },
    {
        "question": "What is the square root of 64?",
        "correctAnswer": "8",
        "options": ["6", "7", "8", "9"]
    },
    {
        "question": "Who wrote '1984'?",
        "correctAnswer": "George Orwell",
        "options": ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"]
    },
    {
        "question": "What does 'HTTP' stand for?",
        "correctAnswer": "HyperText Transfer Protocol",
        "options": ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "HyperText Translation Protocol"]
    },
    {
        "question": "Who is known as the 'King of Pop'?",
        "correctAnswer": "Michael Jackson",
        "options": ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"]
    }
];

    
    

    let score=0;
    let currentQuestion=0;
    const totalScore=questionJson.length;
    
    const questEl = document.getElementById('question');
    const optnEl = document.getElementById('options');
    const scoreEl = document.getElementById('score');
    const nextEl = document.getElementById('next');

    showQuestion();

    nextEl.addEventListener('click', ()=>{
        scoreEl.textContent=`score: ${score} / ${totalScore}`;
        nextQuestion();
    })

    function showQuestion(){
        //destructure of the object for direct access
        const {
            question,
            correctAnswer,
            options 
        } = questionJson[currentQuestion];

        questEl.textContent=question;

        const shuffleoption = shuffle(options);
        shuffleoption.forEach((opt)=>{
            const btn = document.createElement('button');
            btn.textContent=opt;
            optnEl.appendChild(btn);
    
            btn.addEventListener('click',()=>{
                if(opt===correctAnswer){
                    score++;
                }
                else{
                    score=score - 0.25;
                }
    
                console.log(score);
                scoreEl.textContent=`score: ${score} / ${totalScore}`;
                nextQuestion();
            });
        })

    }

    function nextQuestion(){
        currentQuestion++;
        optnEl.textContent='';
        if(currentQuestion>=questionJson.length){
            questEl.textContent="Test Completed!!";
            nextEl.remove();
        }
        else{
            showQuestion();
        }
    };

    //Shuffeld the option array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    

    
