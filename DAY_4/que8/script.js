function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Received"), 2000);
  });
}

// 1. Call using .then()
console.log("Method 1: Using .then()");
getData().then(data => {
  console.log(data);
});

// 2. Convert using async/await
async function fetchData() {
  console.log("Method 2: Using async/await");
  const data = await getData();
  console.log(data);
}
fetchData();

// 3. Add try-catch
async function fetchDataWithTryCatch() {
  console.log("Method 3: Using async/await with try-catch");
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchDataWithTryCatch();
