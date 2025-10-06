// heart icon 
const favoriteCounter = document.getElementById('favoriteCounter'); 

const favoriteIcons = document.querySelectorAll('.favoriteIcon'); 

let currentFavoriteCount = parseInt(favoriteCounter.textContent.trim()) || 0; 

favoriteIcons.forEach(iconButton => {
    
    iconButton.addEventListener('click', function() {
        
        currentFavoriteCount++;
        
        favoriteCounter.textContent = currentFavoriteCount;
    });
});

// copy btn
document.addEventListener('DOMContentLoaded', function() {
    const cardCopyButtons = document.querySelectorAll('.copy-btn');
    
    const navbarCountSpan = document.getElementById('navbar-copy-count-span'); 

    if (!navbarCountSpan) {
        console.error("Navbar-এর কাউন্টারের জন্য 'navbar-copy-count-span' ID টি পাওয়া যায়নি।");
        return; 
    }
    cardCopyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const numberToCopy = this.getAttribute('data-number');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(numberToCopy)
                .then(() => {
                    
                    const alertMessage = `নম্বর কপি্ হয়েছে: ${numberToCopy}`;
                    alert(alertMessage);

                    let currentCount = parseInt(navbarCountSpan.textContent, 10);
                    currentCount += 1;
                    navbarCountSpan.textContent = currentCount;
                    
                })
                .catch(err => {
                    // কপি ব্যর্থ হলে
                    console.error('Copy failed: ', err);
                    alert('Failed to copy the number. Please copy it manually.'); 
                });
            } else {
                // পুরাতন ব্রাউজারের জন্য
                alert('	Your browser does not support the copy function.');
            }
        });
    });
});

//  call btn

const callCost = 20;
let currentCoins = 100;

const coinDisplays = document.getElementById('coin-count');
const historyList = document.getElementById('call-history-list');

function updateCoinDisplay(){
    if(coinDisplays) {
        coinDisplays.textContent = currentCoins;
    }
}

function addToCallHistory(name, number){
    if(!historyList) return;

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true
            });

    const newEntryHTML = `
                <div class="flex justify-between items-center bg-gray-100 px-3 py-3 rounded-md">
                    <div>
                        <p class="font-bold text-gray-700">${name}</p>
                        <p class="text-xs text-gray-500">${number}</p>
                    </div>
                    <span class="text-xs text-gray-600 font-medium">${timeString}</span>
                </div>
            `;
         historyList.insertAdjacentHTML('afterbegin', newEntryHTML);
}

function handleCallClick(event){
    const card = event.target.closest('.service-card');
    const serviceName = card.dataset.serviceName;
    const serviceNumber = card.dataset.serviceNumber;

    if (currentCoins < callCost) {
        alert(`Insufficient coins! You need ${callCost} coins to call ${serviceName}. You currently have: ${currentCoins} coins.`);
        return; 
    }
    else{
         alert(`Calling ${serviceName} at ${serviceNumber}...`);
    }

    currentCoins -= callCost;
    updateCoinDisplay();

    addToCallHistory(serviceName, serviceNumber);
}


 document.addEventListener('DOMContentLoaded', () => {
            updateCoinDisplay();
            
            const callButtons = document.querySelectorAll('.service-card .call-button'); 
            callButtons.forEach(button => {
                button.addEventListener('click', handleCallClick);
            });

            // Clear History
            const clearButton = document.getElementById('clear-history-button');
            if (clearButton) {
                clearButton.addEventListener('click', () => {
                    if (confirm("Are you sure you want to clear the call history?")) {
                        historyList.innerHTML = ''; 
                    }
                });
            }
        });