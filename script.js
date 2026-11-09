const translations = {
    bn: {
        tagline: 'আপনার দৈনন্দিন মুসলিম সঙ্গী',
        welcome: 'স্বাগতম',
        selectLanguage: 'ভাষা নির্বাচন করুন / Choose your language',
        locationAccess: 'লোকেশন অ্যাকসেস',
        locationHelp: 'নামাজের সময় ও কিবলার জন্য প্রয়োজন',
        continueGuest: 'অতিথি হিসেবে চালিয়ে যান',
        registerLogin: 'নিবন্ধন / লগইন',
        assalamuAlaikum: 'আসসালামু আলাইকুম, অতিথি',
        nextPrayerLabel: 'পরবর্তী নামায',
        nextPrayerTime: 'আসর শুরু: ৩:৪৫ PM',
        naflPrayer: 'নফল নামায',
        adhkar: 'আমল',
        dua: 'দোয়া',
        qibla: 'কিবলা',
        todayReminder: 'আজকের বিশেষ অনুপ্রেরণা',
        upcomingFasting: 'আসন্ন সুন্নত রোজা',
        nearbyMosque: 'কাছের মসজিদ',
        sehriIftar: 'সেহরি / ইফতার',
        ibadat: 'ইবাদত',
        duaLibrary: 'দোয়া লাইব্রেরি',
        adhanAlarm: 'আজানের অ্যালার্ম',
        restrictedPrayer: 'নিষিদ্ধ সময়',
        ramadan: 'রমজান',
        sunnahFasting: 'সুন্নত রোজা',
        more: 'আরও',
        prayerTimes: 'নামাযের সময়সূচী',
        weeklySchedule: 'সাপ্তাহিক সময়সূচি',
        calcMethod: 'গণনা পদ্ধতি: ইসলামিক ফাউন্ডেশন বাংলাদেশ',
        mosqueFinder: 'মসজিদ খুঁজুন',
        islamicCalendar: 'ইসলামিক ক্যালেন্ডার',
        qiblaDirection: 'কিবলা দিক',
        profile: 'প্রোফাইল',
        language: 'ভাষা',
        location: 'লোকেশন',
        notifications: 'নোটিশ',
        prayerMethod: 'নামাজের ক্যালকুলেশন',
        navHome: 'হোম',
        navIbadat: 'ইবাদত',
        navMosque: 'মসজিদ',
        navCalendar: 'ক্যালেন্ডার',
        navProfile: 'প্রোফাইল',
        tag: 'আপনার দৈনন্দিন মুসলিম সঙ্গী'
    },
    en: {
        tagline: 'Your everyday Muslim companion',
        welcome: 'Welcome',
        selectLanguage: 'Choose your language / ভাষা নির্বাচন করুন',
        locationAccess: 'Location Access',
        locationHelp: 'Required for prayer times and qibla',
        continueGuest: 'Continue as Guest',
        registerLogin: 'Register / Login',
        assalamuAlaikum: 'Assalamu Alaikum, Guest',
        nextPrayerLabel: 'Next Prayer',
        nextPrayerTime: 'Asr starts at 3:45 PM',
        naflPrayer: 'Nafl Prayer',
        adhkar: 'Adhkar',
        dua: 'Dua',
        qibla: 'Qibla',
        todayReminder: 'Today\'s Special Reminder',
        upcomingFasting: 'Upcoming Sunnah Fasting',
        nearbyMosque: 'Nearby Mosque',
        sehriIftar: 'Sehri / Iftar',
        ibadat: 'Ibadat',
        duaLibrary: 'Dua Library',
        adhanAlarm: 'Adhan Alarm',
        restrictedPrayer: 'Restricted Times',
        ramadan: 'Ramadan',
        sunnahFasting: 'Sunnah Fasting',
        more: 'More',
        prayerTimes: 'Prayer Times',
        weeklySchedule: 'Weekly Schedule',
        calcMethod: 'Calc Method: Islamic Foundation Bangladesh',
        mosqueFinder: 'Mosque Finder',
        islamicCalendar: 'Islamic Calendar',
        qiblaDirection: 'Qibla Direction',
        profile: 'Profile',
        language: 'Language',
        location: 'Location',
        notifications: 'Notifications',
        prayerMethod: 'Prayer Calculation',
        navHome: 'Home',
        navIbadat: 'Ibadat',
        navMosque: 'Mosque',
        navCalendar: 'Calendar',
        navProfile: 'Profile',
        tag: 'Your everyday Muslim companion'
    }
};

const state = { lang: 'bn' };

function updateLanguageButtons() {
    document.querySelectorAll('[data-lang]').forEach((button) => {
        const isActive = button.dataset.lang === state.lang;
        button.classList.toggle('active', isActive);
    });
}

function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const value = translations[state.lang][key];
        if (value) {
            element.textContent = value;
        }
    });
    updateLanguageButtons();
}

function setLanguage(lang) {
    state.lang = lang;
    applyTranslations();
}

function toggleCounter(button) {
    const status = button.parentElement.querySelector('.status-pill');
    const current = Number(button.dataset.count || 0);
    const next = current < 10 ? current + 1 : 0;
    button.dataset.count = next;
    button.textContent = `অবস্থান: ${next}/১০`;
    status.classList.toggle('done', next >= 10);
    status.textContent = next >= 10 ? 'সমাপ্ত' : 'অসমাপ্ত';
}

function navTo(screenId, navElement = null) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => screen.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('active'));

    if (navElement) {
        navElement.classList.add('active');
        return;
    }

    if (screenId === 'screen-home' || screenId === 'screen-prayer' || screenId === 'screen-qibla' || screenId === 'screen-splash') {
        document.querySelector('.nav-item:nth-child(1)')?.classList.add('active');
    } else if (screenId === 'screen-ibadat' || screenId === 'screen-nafl' || screenId === 'screen-adhkar' || screenId === 'screen-dua' || screenId === 'screen-adhan' || screenId === 'screen-restricted' || screenId === 'screen-fasting' || screenId === 'screen-sunnah-fasting' || screenId === 'screen-more') {
        document.querySelector('.nav-item:nth-child(2)')?.classList.add('active');
    } else if (screenId === 'screen-mosques' || screenId === 'screen-mosque-detail' || screenId === 'screen-bazaar' || screenId === 'screen-biz-detail') {
        document.querySelector('.nav-item:nth-child(3)')?.classList.add('active');
    } else if (screenId === 'screen-calendar' || screenId === 'screen-special-day') {
        document.querySelector('.nav-item:nth-child(4)')?.classList.add('active');
    } else if (screenId === 'screen-profile') {
        document.querySelector('.nav-item:nth-child(5)')?.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    document.querySelectorAll('.chip').forEach((chip) => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach((item) => item.classList.remove('active'));
            chip.classList.add('active');
        });
    });

    document.querySelectorAll('.toggle').forEach((toggle) => {
        toggle.addEventListener('click', () => toggle.classList.toggle('active'));
    });

    setTimeout(() => {
        const splash = document.getElementById('screen-splash');
        const onboarding = document.getElementById('screen-onboarding');
        if (splash && onboarding) {
            splash.classList.remove('active');
            onboarding.classList.add('active');
        }
    }, 1800);

    applyTranslations();
});

