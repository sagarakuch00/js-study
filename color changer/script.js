const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener('click', (e) => {
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

    //    this example with switch case //

    // let color = e.target.id;
    // switch (color) {
    //   case (e.target.id = 'grey'):
    //     body.style.backgroundColor = e.target.id;
    //   case (e.target.id = 'white'):
    //     body.style.backgroundColor = e.target.id;
    //   case (e.target.id = 'blue'):
    //     body.style.backgroundColor = e.target.id;
    //   case (e.target.id = 'yellow'):
    //     body.style.backgroundColor = e.target.id;
    // }
  });
});
