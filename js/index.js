const idModulesArray = [];
const modulesByClass = Array.from(document.getElementsByClassName("module__img"));
console.log(modulesByClass);
const idClassContainerArray = [];
const classByClassName = Array.from(document.getElementsByClassName("module__class-conteiner"));
console.log(classByClassName);

function getIdModules() {
  modulesByClass.forEach(function(item){
    let id = item.getAttribute("id");
    idModulesArray.push(id);
  })
};

getIdModules();
console.log(idModulesArray);

function getIdClass() {
  classByClassName.forEach(function(item){
    let id = item.getAttribute("id");
    idClassContainerArray.push(id);
  })
};

getIdClass();
console.log(idClassContainerArray);

function desplegarModulo(index) {
  document.getElementById(`Module${index + 1}`).classList.toggle("is-active");
  document.getElementById(`class-conteiner${index + 1}`).classList.toggle("is-active");
}