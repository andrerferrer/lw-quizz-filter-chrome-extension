chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: `
    	const filterTables=()=>{const t=document.querySelector("body > div > div:nth-child(3) > div > div:nth-child(1)");if(t){const e='\n\t\t\t<div class="m-3">\n\t\t\t\t<label for="filter">Which status are you looking for?</label>\n\t\t\t\t<select id="filter">\n\t\t\t\t  <option value="Started">Both</option>\n\t\t\t\t  <option value="Not Started">Not Started</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t',n=t=>{const e=t.currentTarget.value,n=new RegExp(e,"i");document.querySelectorAll("tbody .quiz-row").forEach(t=>{const e=t.querySelector("td.quiz-status").innerText;t.style.display=n.test(e)?"":"none"})};t.insertAdjacentHTML("afterbegin",e),document.getElementById("filter").addEventListener("change",n)}};filterTables();
    `
  });
});