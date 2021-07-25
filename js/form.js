const courseField = document.getElementById("course");
let prevUrl = document.referrer;
const keywordsPages = ["index", "guitarElec", "guitar", "batery", "bajo", "piano", "sing"]

window.addEventListener("load", function(){
  if (prevUrl.search(keywordsPages[0]) != -1) {
    courseField.value="Home de Melifluo";
  } else if (prevUrl.search(keywordsPages[1]) != -1) {
    courseField.value=keywordsPages[1];
  } else if (prevUrl.search(keywordsPages[2]) != -1) {
    courseField.value=keywordsPages[2];
  } else if (prevUrl.search(keywordsPages[3]) != -1) {
    courseField.value=keywordsPages[3];
  } else if (prevUrl.search(keywordsPages[4]) != -1) {
    courseField.value=keywordsPages[4];
  } else if (prevUrl.search(keywordsPages[5]) != -1) {
    courseField.value=keywordsPages[5];
  } else if (prevUrl.search(keywordsPages[6]) != -1) {
    courseField.value=keywordsPages[6];
  }
});
