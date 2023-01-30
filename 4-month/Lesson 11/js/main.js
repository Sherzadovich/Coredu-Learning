const inputFrom = document.querySelector("#currency__from")
const inputTo = document.querySelector("#currency__to")
const selectOption = document.querySelector("#currency__select")
const historyEl = document.querySelector("#history")

let history = JSON.parse(localStorage.getItem("history")) || [];

renderHistory();

let data = null;
let currentCurrency = null;

fetch("http://xolisnazar.uz/api/index/currency")
.then((res) => {
    return res.json();
}).then(res => {
    console.log(res);
    data = res.currencyData;
    data.forEach(currency => {
        selectOption.innerHTML += `<option value="${currency.Ccy}">${currency.CcyNm_UZ}</option>`
    });
}).catch(err => console.log(err))

selectOption.addEventListener('change' , (event) => {
    currentCurrency = event.target.value;
    inputFrom.placeholder = event.target.value;
    convertFrom();
});

inputFrom.addEventListener("change", convertFrom);

function convertFrom() {
    const foundObj = currentCurrency
        ? data.find((ccy) => ccy.Ccy === currentCurrency) 
            : null;
    
        if(foundObj) {
            const result = foundObj.Rate * inputFrom.value;
            inputTo.value = Math.floor(result);
            addToHistory({
                type: currentCurrency + " -> UZS",
                curr1: inputFrom.value,
                curr2: inputTo.value
            })
        } else {
            alert("Valyutani kirgizing!")
        }
}

inputTo.addEventListener("change", convertTo);

function convertTo() {
    const foundObj = currentCurrency
        ? data.find((ccy) => ccy.Ccy === currentCurrency) 
            : null;
    
        if(foundObj) {
            const result =inputTo.value / foundObj.Rate;
            inputFrom.value = Math.floor(result);
            addToHistory({
                type: "UZS -> " + currentCurrency,
                curr1: inputTo.value,
                curr2: inputFrom.value,
            })
        } else {
            alert("Valyutani kirgizing!")
        }
}

function addToHistory({type, curr1, curr2}) {
    const date = new Date();
    const months = ['Jan', "Feb", 'March', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    history.push({
        id: history.length,
        type: type,
        curr1,
        curr2,
        time: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes : date.getMinutes()}`
    })
    localStorage.setItem("history", JSON.stringify(history))
    renderHistory();
}

function renderHistory() {
    historyEl.innerHTML = "";
    history.reverse().forEach((item) => {
        const template = `
            <div class="card mt-3">
                <div class="card-header d-flex justify-content-between">
                    <span>${item.type}</span>
                    <span>${item.time}</span>
                </div>
                <div class="card-body d-flex justify-content-between">
                    <blockquote class="blockquote mb-0">
                        <p>${item.curr1} -> ${item.curr2}</p>
                    </blockquote>
                    <button id="btn" class="btn btn-danger" onclick="deleteHistory(${item.id})">Delete</button>
                </div>
            </div>
        `
        historyEl.innerHTML += template;
    })

}

function deleteHistory(id) {
    const isAccepted = confirm("Do you really delete this todo?")
    if(isAccepted) {
        const newArray = [];
        history.forEach(item => {
            if(item.id !== id) {
                newArray.push(item);
            }
        })
        history = newArray;
        renderHistory();
    }
}