type Question = {
  No: number;
  content: string;
  answer: string;
};

const question: Question[] = [
  {
    No: 1,
    content: "朝ごはんは必ず食べる？",
    answer: "",
  },
  {
    No: 2,
    content: "休日でも早起きする？",
    answer: "",
  },
  {
    No: 3,
    content: "コンビニはよく行く？",
    answer: "",
  },
];

const questionNumber = document.getElementById("question_number");
const questionContent = document.getElementById("question_content");
const answers = document.querySelectorAll(".answer");
const questionLength = question.length;
const questionSection = document.getElementById("question");

let pageCount: number = 1;

const showQuestion = (pageCount: number) => {
  questionNumber!.textContent = `質問 ${pageCount}`;
  questionContent!.textContent = question[pageCount - 1].content;
};

const saveAnswer = (question: Question[]) => {
  const answerJSONDate = JSON.stringify(question);
  localStorage.setItem("three_seconde_question", answerJSONDate);
};

showQuestion(pageCount);

//答えた時
answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    const answerContent = answer.innerHTML;
    question[pageCount - 1].answer = answerContent;

    if (questionLength === pageCount) {
      saveAnswer(question);
      questionSection!.style.display = "none";
      return;
    }
    pageCount++;
    showQuestion(pageCount);
  });

  setTimeout(() => {
    question[pageCount - 1].answer = "無回答";
    pageCount++;
    showQuestion(pageCount);

    alert(pageCount)

    if (questionLength === pageCount) {
      question[pageCount - 1].answer = "無回答";
      saveAnswer(question);
      questionSection!.style.display = "none";
      return;
    }
  }, 3000);
});
