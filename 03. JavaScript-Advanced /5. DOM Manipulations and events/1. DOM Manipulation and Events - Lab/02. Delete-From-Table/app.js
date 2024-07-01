function deleteByEmail() {
  let emailInputElement = document.querySelector('input[name="email"]');
  let emailTdElements = document.querySelectorAll("tr td");
let resultElement = document.getElementById('result')
  let emailElements = Array.from(emailTdElements);
  let targetElements = emailElements.find(x => x.textContent === emailInputElement.value);

  if(targetElements){
      targetElements.parentNode.remove();
      resultElement.textContent = "Deleted.";
  }else{
    resultElement.textContent = "Not found."; 
  }
}
//The old way  of deleting
//    targetElements.parentNode.removeChild(targetElements);

//Applies only for Nodelist
//emailTdElements.forEach(0);

//Applies of NodeList and HTML Collection
//for (const email of emailTdElements) {
//}
