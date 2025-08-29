/** Shared Code or Reusable Function */
const callHistory = [];

// Get Integer Number
function getNumber(coinNumberID) {
    return parseInt(document.getElementById(coinNumberID).innerText)
}

// Call Button Functionality
function callButton(callID, titleID, subTitleID, numberID) {
    document.getElementById(callID).addEventListener('click', function () {
        
        let coinNumber = getNumber('coin-number');
        if (coinNumber < 20) {
            alert('❌ Insufficient coin. You need at least 20 coins to call');
            return;
        }

        coinNumber -= 20;
        document.getElementById('coin-number').innerText = coinNumber;

        const subTitle = document.getElementById(subTitleID).innerText;
        const number = document.getElementById(numberID).innerText;
        const alertText = '📞 calling ' + subTitle + ' ' + number + '...';
        alert(alertText);

        const title = document.getElementById(titleID).innerText;

        const call = {
            name: title,
            number: number,
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(call);
        
        updateCallHistory('history');
    });
}


/** Update Call History Functionality*/
function updateCallHistory(id) {
    let history = document.getElementById(id);
    history.innerText = '';
    for (const callH of callHistory) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="h-21 p-4 mb-2 rounded-xl flex justify-between items-center bg-gray-100">
            <div>
                <h2 class="font-inter font-semibold text-[18px]">${callH.name}</h2>
                <h3 class="text-gray-700 text-[18px]">${callH.number}</h3>
            </div>
            <p class="text-[#111111] text-[18px]">${callH.time}</p>
        </div>
        `
        history.appendChild(div);
    }
}

/* Heart Count Functionality*/
const heartIcon = document.getElementsByClassName('heart-icon');
for (const heart of heartIcon) {
    heart.addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heart-count').innerText);
        document.getElementById('heart-count').innerText = ++heartCount;
    })
}

/* Call Button Functionality*/
const callClassId = {
    'call-btn-1': ['title-1', 'sub-title-1', 'number-1'],
    'call-btn-2': ['title-2', 'sub-title-2', 'number-2'],
    'call-btn-3': ['title-3', 'sub-title-3', 'number-3'],
    'call-btn-4': ['title-4', 'sub-title-4', 'number-4'],
    'call-btn-5': ['title-5', 'sub-title-5', 'number-5'],
    'call-btn-6': ['title-6', 'sub-title-6', 'number-6'],
    'call-btn-7': ['title-7', 'sub-title-7', 'number-7'],
    'call-btn-8': ['title-8', 'sub-title-8', 'number-8'],
    'call-btn-9': ['title-9', 'sub-title-9', 'number-9']
};

for (const key in callClassId) {
    callButton(key, callClassId[key][0], callClassId[key][1], callClassId[key][2]);
}

// clear button functionality
document.getElementById('clear-button').addEventListener('click', function () {
    document.getElementById('history').innerText = '';
    callHistory.length = 0;
});