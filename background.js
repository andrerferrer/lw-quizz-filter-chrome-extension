chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: `
    	const filterTables=()=>{const t=document.querySelector("body > div > div:nth-child(3) > div > div:nth-child(1)");if(t){const e='<div class="m-3"><label for="filter">Which status are you looking for?</label><select id="filter">  <option value="Started">All</option>  <option value="Not Started">Not Started</option>  <option value="Finished">Finished</option></select></div>',n=t=>{const e=t.currentTarget.value,n=document.querySelectorAll(".table tbody .quiz-row");if("Finished"==e)n.forEach(t=>{const e=t.querySelector("td:nth-child(2)").innerText;t.style.display=/-/.test(e)?"none":""});else{const t=new RegExp(e,"i");n.forEach(e=>{const n=e.querySelector("td.quiz-status").innerText;e.style.display=t.test(n)?"":"none"})}};t.insertAdjacentHTML("afterbegin",e),document.getElementById("filter").addEventListener("change",n)}};filterTables();
    `
  });
});