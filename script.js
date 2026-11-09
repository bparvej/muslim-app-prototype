// Mock Splash Screen delay
setTimeout(() => {
    document.getElementById('screen-splash').classList.remove('active');
    document.getElementById('screen-onboarding').classList.add('active');
}, 2000);

// Navigation Function
function navTo(screenId, navElement = null) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    // Show target screen
    document.getElementById(screenId).classList.add('active');

    // Update bottom nav state if a nav item was clicked
    if (navElement) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        navElement.classList.add('active');
    } else {
        // If navigated from elsewhere (like an interior page), map back to correct nav tab
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        
        if(screenId === 'screen-home' || screenId === 'screen-prayer' || screenId === 'screen-qibla') {
            document.querySelector('.nav-item:nth-child(1)').classList.add('active');
        } else if(screenId === 'screen-mosques' || screenId === 'screen-mosque-detail') {
            document.querySelector('.nav-item:nth-child(2)').classList.add('active');
        } else if(screenId === 'screen-bazaar' || screenId === 'screen-biz-detail') {
            document.querySelector('.nav-item:nth-child(3)').classList.add('active');
        } else if(screenId === 'screen-content') {
            document.querySelector('.nav-item:nth-child(4)').classList.add('active');
        } else if(screenId === 'screen-profile') {
            document.querySelector('.nav-item:nth-child(5)').classList.add('active');
        }
    }
}
