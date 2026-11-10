# Muslim Ummah

A lightweight, mobile-first, and fully responsive web application and prototype designed for the everyday Muslim lifestyle in Bangladesh.

The application is built in modern, clean vanilla **JavaScript**, **HTML5**, and **CSS3**, featuring real-time prayer calculations, dynamic clock and countdown timers, live mosque discovery with Jamat (Zamat) schedules based on custom coordinates and search radius, audio prayer alarms, and a rich suite of worship (Ibadat) utilities.

---

## 🌟 Key Features

1. **Brand Identity & Localized Terminology (`মুসাফির`)**:
   - Renamed from "Ummah Connect" to **Muslim Ummah**.
   - Replaced all references to "Guest" / "অতিথি" with **মুসাফির (Musafir)** across splash, onboarding, greetings, and user profile.

2. **Real-time Live Clock & Prayer Timings**:
   - Integrated live seconds clock running every second.
   - Live synchronization with **Aladhan Free API** (using Method 1 - University of Islamic Sciences Karachi / Islamic Foundation Bangladesh standard).
   - Dynamic real-time countdown to the next prayer (Fajr, Dhuhr, Asr, Maghrib, Isha).
   - Calculates exact Imsak (Sehri end) and Iftar timings.

3. **Prayer Time Alarms & Custom Audio Alerts**:
   - Dedicated alarm option under the prayer timings schedule and Ibadat modules.
   - In-app Web Audio synthesizer playing gentle adhan chimes/beeps without external dependencies.
   - Interactive configuration modal allowing users to toggle alarms on/off for each prayer and specify custom alarm times.
   - Persistent preferences stored in browser `localStorage`.

4. **Mosque Locator with Configurable Radius & Jamat (Zamat) Times**:
   - Centered around user's base coordinate: **`23°41'37.1"N 90°27'01.2"E`** (Jatrabari / Dania / Nurpur area).
   - Configurable search radius (default `1.0 km`) controlled via `.env` file.
   - Dynamic UI banner indicating the active search radius to the user.
   - Integrates with OpenStreetMap Nominatim API with fallback to vetted localized mosques.
   - Calculates and displays the **Next Jamat (জামাত) Time** for each mosque based on Waqt offsets and local congregational timings.
   - One-click navigation opening directions in **Google Maps**.

5. **Configuration via `.env` and `config.js`**:
   - Introduced `.env` for system parameters (coordinates, radius, API endpoints).
   - Dynamic runtime loader `config.js` with browser fallback.
   - Project `.gitignore` tracking and ignoring environment files and temp artifacts.

6. **Complete UI Icon Coverage**:
   - Modern FontAwesome 6.5.1 library with all missing icons restored (cloud-sun, wand-magic-sparkles, bed, moon, star-and-crescent, etc.).

---

## 📁 Project Structure

```text
muslim-app-prototype/
├── .env                              # Active environment variables (git-ignored)
├── .env.example                      # Template environment configuration file
├── .gitignore                        # Git ignore patterns (.env, node, os logs)
├── index.html                        # App views, modals, and screen architecture
├── styles.css                        # Mobile frame, emerald-gold-ivory styling, modals & badges
├── config.js                         # Dynamic .env parser and environment provider
├── script.js                         # Core JavaScript: clock, API fetching, alarms, OSM
├── README.md                         # Product overview and usage instructions
└── User_Journey_and_Design_Decisions.md  # Technical documentation and architectural rationale
```

---

## ⚙️ Environment Configuration (`.env`)

```properties
# Base Coordinates: 23°41'37.1"N 90°27'01.2"E
BASE_LAT=23.693639
BASE_LNG=90.450333
BASE_LOCATION_NAME=যাত্রাবাড়ী/দনিয়া, ঢাকা

# Mosque Search Radius in kilometers
MOSQUE_SEARCH_RADIUS_KM=1.0

# Prayer Times Calculation Method (1 = Karachi / Islamic Foundation Bangladesh)
PRAYER_CALC_METHOD=1

# External Free APIs
PRAYER_API_BASE_URL=https://api.aladhan.com/v1
OSM_NOMINATIM_API_URL=https://nominatim.openstreetmap.org/search
OSM_OVERPASS_API_URL=https://overpass-api.de/api/interpreter
```

---

## 🚀 How to Run

Because this is written in pure vanilla JavaScript, you can run it immediately without npm dependencies:

### Option 1: Direct File
Open `index.html` directly in any web browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Or using Node:
```bash
npx serve .
```
Then visit: `http://localhost:8000`

---

## 🕌 APIs & Data Sources

- **Prayer Timings API**: [Aladhan REST API](https://api.aladhan.com) (free, public, no key required).
- **Mosque Locator API**: [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org) with bounded coordinates.
- **Audio Synthesis**: Native HTML5 Web Audio API `AudioContext` with custom Azan melodies from Baitul Mukarrom, Makkah, Madinah, and Al-Aqsa.
- **Live Waqt & Makruh Detection**: Automatic detection of active Waqt, plus automated alerts for the 3 canonical forbidden prayer times (Sunrise, Zawwal, and Sunset).
- **Masnoon Duas**: Authentic hadith references, full Arabic text, Bengali pronunciation, and Bengali translation.
- **Weekly Schedule**: Dynamic 7-day prayer schedule based on solar calculation and Islamic Foundation Bangladesh standards.
