const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("Random Number:", randomNumber);
  document.getElementById('output').innerHTML = `<p>Random Number: ${randomNumber}</p>`;
  
  if (randomNumber > 5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((result) => {
    console.log(result);
    document.getElementById('output').innerHTML += `<p style="color: green;">Result: ${result}</p>`;
  })
  .catch((error) => {
    console.log(error);
    document.getElementById('output').innerHTML += `<p style="color: red;">Result: ${error}</p>`;
  });

document.body.style.fontFamily = 'Arial';
document.body.style.padding = '20px';
