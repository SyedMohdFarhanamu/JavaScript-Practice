# Project Related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 Solution

``` javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons); // nodelist
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution

```
const form = document.querySelector('form');
// console.log(form)
// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value)
// console.log(height)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your bmi is ${bmi} & you are underweight category</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Your bmi is ${bmi} & you are normal weight category</span>`;
    } else {
      results.innerHTML = `<span>Your bmi is ${bmi} & you are overweight category</span>`;
    }
  }
});

```
