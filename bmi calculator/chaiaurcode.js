const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    // show the result
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let bmiMsg = ''
    if (bmi < 18.6) {
      bmiMsg = 'under weight'
  }else if (bmi >= 18.6 && bmi < 24.9) {
      bmiMsg = 'normal weight'
  }else if (bmi >= 24.9) {
      bmiMsg = 'over weight'
  }else{
    bmiMsg = 'obese'
  }
  results.innerHTML = `your bmi is <span>${bmi}</span>, which considered as ${bmiMsg}. `;
}
});
