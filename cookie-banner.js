// Cookie Banner Management
(function() {
    'use strict';

    // Cookie-Funktionen
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Cookie-Banner anzeigen/verstecken
    function showCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 500);
        }
    }

    function hideCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('show');
        }
    }

    // Cookies akzeptieren
    function acceptAllCookies() {
        setCookie('cookieConsent', 'all', 365);
        hideCookieBanner();

        // Hier kannst du Analytics/Tracking-Skripte laden
        // loadAnalytics();

        console.log('Alle Cookies akzeptiert');
    }

    function acceptNecessaryCookies() {
        setCookie('cookieConsent', 'necessary', 365);
        hideCookieBanner();

        console.log('Nur notwendige Cookies akzeptiert');
    }

    // Analytics laden (Beispiel für Google Analytics)
    function loadAnalytics() {
        // Beispiel: Google Analytics Code hier einfügen
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments);}
        // gtag('js', new Date());
        // gtag('config', 'GA_MEASUREMENT_ID');
    }

    // Initialisierung beim Laden der Seite
    function init() {
        const consent = getCookie('cookieConsent');

        if (!consent) {
            // Kein Cookie gesetzt - Banner anzeigen
            showCookieBanner();
        } else if (consent === 'all') {
            // Alle Cookies akzeptiert - Analytics laden
            // loadAnalytics();
        }

        // Event Listener für Buttons
        const acceptAllBtn = document.getElementById('acceptAllCookies');
        const acceptNecessaryBtn = document.getElementById('acceptNecessaryCookies');

        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', acceptAllCookies);
        }

        if (acceptNecessaryBtn) {
            acceptNecessaryBtn.addEventListener('click', acceptNecessaryCookies);
        }
    }

    // Warten bis DOM geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
