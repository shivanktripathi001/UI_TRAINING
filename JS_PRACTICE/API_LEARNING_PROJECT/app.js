const URL = "https://catfact.ninja/fact";
const factpara = document.querySelector('#fact');
const btn = document.querySelector('#btn');



const getfacts = async () =>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data.fact;
};
btn.addEventListener("click",getfacts);

getfacts();