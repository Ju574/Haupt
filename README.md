# KFZ-Sachverständigenbüro Reichel - Webseite

Moderne, responsive Webseite für das KFZ-Sachverständigenbüro Reichel.

## Features

- Vollständig responsive Design für Desktop, Tablet und Mobile
- Modernes Design in Anthrazit/Grau/Weiß
- 4 Hauptseiten:
  - Startseite (index.html)
  - Leistungen (leistungen.html)
  - Über uns (ueber-uns.html)
  - Kontakt (kontakt.html)
- Mobile-First Navigation mit Hamburger-Menü
- Professionelles Farbschema
- Optimiert für alle Endgeräte

## Technologien

- HTML5
- CSS3 (mit CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Installation & Verwendung

### Lokale Vorschau

1. Repository klonen oder herunterladen
2. `index.html` in einem modernen Browser öffnen
3. Alternativ: Einen lokalen Webserver starten (z.B. mit Python):
   ```bash
   python -m http.server 8000
   ```
   Dann im Browser: `http://localhost:8000`

### GitHub Pages Deployment

#### Option 1: Über GitHub Web-Interface

1. Pushe den Code in dein GitHub Repository
2. Gehe zu deinem Repository auf GitHub.com
3. Klicke auf **Settings** (Einstellungen)
4. Scrolle runter zu **Pages** im linken Menü
5. Unter **Source** wähle:
   - Branch: `main` (oder `master`)
   - Folder: `/ (root)`
6. Klicke auf **Save**
7. Warte einige Minuten - deine Seite ist dann verfügbar unter:
   `https://[dein-username].github.io/[repository-name]/`

#### Option 2: Über Git Bash/Terminal

```bash
# Code committen
git add .
git commit -m "Initial commit - Webseite erstellt"

# Zum GitHub Repository pushen
git push origin main
```

Dann folge den Schritten von Option 1, Punkt 2-7.

## Anpassungen

### 1. Platzhalter ersetzen

Suche in allen HTML-Dateien nach folgenden Platzhaltern und ersetze sie:

- `[Straße & Hausnummer]` - Ihre Geschäftsadresse
- `[PLZ & Stadt]` - Postleitzahl und Stadt
- `[TELEFONNUMMER]` - Ihre Telefonnummer
- `[MOBILNUMMER]` - Ihre Mobilnummer
- `[E-MAIL]` - Ihre E-Mail-Adresse
- `[09:00 - 18:00 Uhr]` - Ihre Öffnungszeiten
- `[Name des Sachverständigen]` - Name der Mitarbeiter

### 2. Logo austauschen

1. Speichere dein Logo als `logo.png` im `assets/` Ordner
2. Empfohlene Größe: 200x60 Pixel (oder höher für Retina-Displays)
3. In allen HTML-Dateien: Ändere `assets/logo-placeholder.svg` zu `assets/logo.png`

### 3. Farben anpassen

Die Farben sind zentral in der `styles.css` im `:root` Bereich definiert:

```css
:root {
    --color-primary: #1a1a1a;      /* Haupt-Dunkelgrau */
    --color-secondary: #2d2d2d;    /* Sekundär-Grau */
    --color-accent: #e63946;       /* Akzentfarbe (Rot) */
    /* ... weitere Farben */
}
```

Passe diese Werte nach deinen Corporate Identity Farben an.

### 4. Kontaktformular funktionsfähig machen

Das Kontaktformular ist aktuell ein Frontend-Demo. Für echte Funktionalität gibt es mehrere Optionen:

#### Option A: Formspree (Einfach & Kostenlos)

1. Gehe zu [formspree.io](https://formspree.io)
2. Erstelle einen kostenlosen Account
3. Erstelle ein neues Formular
4. Kopiere den Formspree-Endpunkt
5. In `kontakt.html`, ändere:
   ```html
   <form action="https://formspree.io/f/DEIN-CODE" method="POST">
   ```

#### Option B: Netlify Forms (Wenn auf Netlify gehostet)

1. Füge `netlify` Attribut zum Form hinzu:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

#### Option C: Eigenes Backend

Implementiere ein eigenes Backend mit PHP, Node.js, Python, etc.

### 5. Google Maps einbinden

In `kontakt.html` findest du einen Platzhalter für eine Karte. So bindest du Google Maps ein:

1. Erstelle einen [Google Maps API Key](https://developers.google.com/maps)
2. Ersetze den Platzhalter-Div mit:
   ```html
   <iframe
     src="https://www.google.com/maps/embed?pb=DEIN_EMBED_CODE"
     width="100%"
     height="450"
     style="border:0;"
     allowfullscreen=""
     loading="lazy">
   </iframe>
   ```

## Dateistruktur

```
/
├── index.html           # Startseite
├── leistungen.html      # Leistungsübersicht
├── ueber-uns.html       # Über uns Seite
├── kontakt.html         # Kontaktseite
├── styles.css           # Alle Styles
├── script.js            # JavaScript (Mobile Menu, etc.)
├── README.md            # Diese Datei
├── assets/              # Bilder und Medien
│   ├── logo-placeholder.svg
│   └── README.md
├── Test.html            # Kann gelöscht werden
└── neuerTest.html       # Kann gelöscht werden
```

## Browser-Kompatibilität

- Chrome/Edge (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Mobile Browser (iOS Safari, Chrome Mobile)

## Performance-Optimierung

Für beste Performance:

1. **Bilder komprimieren**: Nutze Tools wie TinyPNG oder ImageOptim
2. **WebP Format**: Konvertiere Bilder zu WebP für moderne Browser
3. **Lazy Loading**: Füge `loading="lazy"` zu Bildern hinzu
4. **CDN**: Nutze ein CDN für statische Assets

## SEO-Optimierung

Die Seite ist bereits SEO-freundlich mit:

- ✅ Meta-Beschreibungen
- ✅ Semantisches HTML
- ✅ Alt-Tags für Bilder
- ✅ Responsive Design
- ✅ Schnelle Ladezeiten

Zusätzliche Empfehlungen:

1. Erstelle eine `sitemap.xml`
2. Erstelle eine `robots.txt`
3. Füge Google Analytics hinzu
4. Registriere die Seite in der Google Search Console

## Cookie-Banner

Die Webseite enthält einen DSGVO-konformen Cookie-Banner:

- **Automatische Anzeige**: Wird beim ersten Besuch angezeigt
- **Speicherung**: Cookie-Einstellungen werden 365 Tage gespeichert
- **Zwei Optionen**:
  - "Alle akzeptieren" - Erlaubt alle Cookies (inkl. Analytics)
  - "Nur notwendige" - Nur technisch notwendige Cookies

### Analytics einbinden

Wenn du Google Analytics oder andere Tracking-Tools verwenden möchtest:

1. Öffne [cookie-banner.js](cookie-banner.js)
2. Gehe zur Funktion `loadAnalytics()` (Zeile ~53)
3. Füge deinen Analytics-Code ein, z.B.:
   ```javascript
   function loadAnalytics() {
       // Google Analytics 4
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX'); // Deine Measurement ID
   }
   ```

Das Script wird nur geladen, wenn der Nutzer "Alle akzeptieren" wählt.

## Support & Weiterentwicklung

Für Fragen oder Anpassungen an der Webseite:

- Dokumentation durchlesen
- Code-Kommentare beachten
- Bei Problemen: GitHub Issues erstellen

## Lizenz

Diese Webseite wurde für das KFZ-Sachverständigenbüro Reichel erstellt.

---

**Erstellt mit Claude Code** 🤖
