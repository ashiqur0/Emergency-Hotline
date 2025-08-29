const callHistory = [];


/* Hearc Count Functionality*/
const heartIcon = document.getElementsByClassName('heart-icon');
for (const heart of heartIcon) {
    heart.addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heart-count').innerText);
        document.getElementById('heart-count').innerText = ++heartCount;
    })
}


/* Call Button Functionality*/

document.getElementById('call-btn-1').addEventListener('click', function () {
    let coinNumber = parseInt(document.getElementById('coinNumber').innerText);
    if (coinNumber < 20) {
        alert('Insufficient coin. You need at least 20 coins to call');
        return;
    }

    coinNumber -= 20;
    document.getElementById('coinNumber').innerText = coinNumber;

    const subTitle = document.getElementById('sub-title-1').innerText;
    const number = document.getElementById('number-1').innerText;
    const alertText = 'calling ' + subTitle + ' ' + number + '...';
    alert(alertText);

    const title = document.getElementById('title-1').innerText;

    const call = {
        name: title,
        number: number,
        time: new Date().toLocaleTimeString()
    }

    callHistory.push(call);

    // update call history
    let history = document.getElementById('history');
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
});

