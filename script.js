// const timeNodes = document.querySelectorAll('[data-time]');
// !!! retunes a Node List

// There are two ways to convert it into an array:
// 1. using spread to spread it into a new array (ES6)
// const timeNodes = [...document.querySelectorAll('[data-time]')];

// 2. Array.from around the query
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// retunes an Array of strings

// from an array of list items into an array of strings:
const seconds = timeNodes
  .map(node => node.dataset.time) // the li element has a dataset property containing a DOMStringMap
  .map(timeCode => {
    // es6
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds );

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log("%s",hours, mins, secondsLeft);

