const idModulesArray = [];
const modulesByClass = Array.from(document.getElementsByClassName("module__img"));
console.log(modulesByClass);

function getIdModules() {
  modulesByClass.forEach(function(item){
    let id = item.getAttribute("id");
    idModulesArray.push(id);
  })
};

getIdModules();
console.log(idModulesArray);

function desplegarModulo(index) {
document.getElementById(`Module${index + 1}`).classList.toggle("is-active");
}