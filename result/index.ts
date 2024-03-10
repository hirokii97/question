type Answer = {
  No: number;
  content: string;
  answer: string;
};

const answerDates = JSON.parse(String(localStorage.getItem("three_seconde_question")));

const answersSection = document.getElementsByClassName("answers");

answerDates.forEach((answerDate: Answer) => {
  const answerBox = document.createElement("div");
  answerBox.className = "answer_box";

  const questionContent = document.createElement("p");
  questionContent.className = "question_content";
  questionContent.innerHTML = answerDate.content;
  answerBox.appendChild(questionContent);

  const yourAnswer = document.createElement("p");
  yourAnswer.className = "your_answer";
  yourAnswer.innerHTML = answerDate.answer || '無回答';
  answerBox.appendChild(yourAnswer);

  answersSection[0].appendChild(answerBox);
});
