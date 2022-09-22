const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const body = document.querySelector(".accordian_body");


function showFaq(index) {
  const faq = document.querySelector(`.faq:nth-of-type(${index + 1}) p`);
  faq.classList.toggle("hidden")
  btnStatusUpdate(index)
}

function createFaq() {
  faqData.forEach((each, index) => {
    const eachFaq = document.createElement("div");
    eachFaq.className = "faq";
    eachFaq.innerHTML = `<div class="faq_header">
                            <h3>${each.question}</h3>
                            <button onclick="showFaq(${index})" class="show_btn">+</button>
                          </div>
                         <p>${each.answer}</p>`;

    body.appendChild(eachFaq);
  })
}

createFaq();


function btnStatusUpdate(index) {
  const btn = document.querySelector(`.faq:nth-of-type(${index + 1}) button`);
  if (btn.textContent === "+") {
    btn.textContent = "-";
  } else {
    btn.textContent = "+";
  }

}





