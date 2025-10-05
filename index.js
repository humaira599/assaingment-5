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