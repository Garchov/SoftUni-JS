function editElement(el, match, replacement) {
  while (el.textContent.includes(match)) {
    el.textContent.replace(match, replacement);
  }
  //Regex Solutions
  // let pattern=new RegExp(match, 'g');
  // element.textContent=element.textContent.replace(pattern,replacement);
}

