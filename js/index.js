const idModulesArray = [];
const modulesByClass = Array.from(document.getElementsByClassName("module__img"));
const idClassContainerArray = [];
const classByClassName = Array.from(document.getElementsByClassName("module__class-conteiner"));
const idFaqIconArray = [];
const faqIconByClass = Array.from(document.getElementsByClassName("faq__icon"));
const idFaqAnswerArray = [];
const faqAnswerByClass = Array.from(document.getElementsByClassName("faq__answer"));

function getIdModules() {
  modulesByClass.forEach(function(item){
    let id = item.getAttribute("id");
    idModulesArray.push(id);
  })
};

getIdModules();

function getIdClass() {
  classByClassName.forEach(function(item){
    let id = item.getAttribute("id");
    idClassContainerArray.push(id);
  })
};

getIdClass();

function getIdFaqIcon() {
  faqIconByClass.forEach(function(item){
    let id = item.getAttribute("id");
    idFaqIconArray.push(id);
  })
};

getIdFaqIcon();

function getIdFaqAnswer() {
  faqAnswerByClass.forEach(function(item){
    let id = item.getAttribute("id");
    idFaqAnswerArray.push(id);
  })
};

getIdFaqAnswer();

function desplegarModulo(index) {
  document.getElementById(`Module${index + 1}`).classList.toggle("is-active");
  document.getElementById(`class-conteiner${index + 1}`).classList.toggle("is-active");
}

function desplegarRespuesta(index) {
  document.getElementById(`faq-icon${index + 1}`).classList.toggle("is-active");
  document.getElementById(`faq-answer${index + 1}`).classList.toggle("is-active");
}

let prevUrl = document.referrer;
console.log(prevUrl);
