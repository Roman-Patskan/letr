const yearSelectElement = document.getElementById('year-select');
  
  for (let year = 2022; 1900 <= year; year--) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', year);
    optionElement.innerHTML = year;
  
    yearSelectElement.insertAdjacentElement('beforeEnd', optionElement);
  }

 

  