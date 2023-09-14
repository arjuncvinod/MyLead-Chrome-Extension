let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads()
  inputEl.value = "";

});

function renderLeads() {
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
  console.log(leadsFromLocalStorage);
  let listItems = "";
  for (let i = 0; i < leadsFromLocalStorage.length; i++) {
    listItems += `<li>
                <a target='_blank' href='${leadsFromLocalStorage[i]}'>
                    ${leadsFromLocalStorage[i]}
                </a>
            </li>`;
  }
  ulEl.innerHTML = listItems;
}
