function toggle() {
  let button = document.querySelector('.button');
  if(button.textContent === 'Less'){
    button.textContent = 'More';
  } else {
    button.textContent = 'Less';
  }

  let text= document.querySelector('#extra');
  if(text.style.display === 'block'){
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
  }
}


