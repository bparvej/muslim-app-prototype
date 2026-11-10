# Muslim Ummah — Technical Documentation & Design Decisions

This document outlines the architecture, UX decisions, API integration workflows, and state management implemented for the **Muslim Ummah** application.

---

## 1. Architectural Overview

The application is structured as a client-side Single Page Application (SPA) written in standard **JavaScript (ES6+)**, **HTML5**, and **CSS3**, completely free of heavy framework bloat.

### Architecture Components

1. **Configuration Layer (`.env` and `config.js`)**:
   - `config.js` sets the baseline default configuration window object (`window.APP_CONFIG`).
   - If running via an HTTP server, `config.js` asynchronously fetches `.env` using standard `fetch()`, parses `KEY=VALUE` pairs, overrides coordinates, radius, and endpoints, and fires an `env-loaded` event to re-query external APIs.
   - When opened via `file://`, graceful fallback values ensure 100% operational integrity without errors.

2. **Core Real-Time Engine (`script.js`)**:
   - **Live Clock Loop**: An interval tick (`setInterval`, 1000ms) drives the live digital clock (`HH:MM:SS`), computes the remaining seconds until the upcoming prayer, and checks alarm triggers against the current minute.
   - **Aladhan API Integration**: Performs an asynchronous `fetch()` to `https://api.aladhan.com/v1/timings` specifying latitude, longitude, and calculation method.
   - **Local Storage State Persistence**: User alarm preferences and custom alert timings are serialized into `localStorage` (`muslim_ummah_alarms`).

3. **Mosque Discovery & Jamat (Zamat) Calculation**:
   - Coordinates: Base position `23°41'37.1"N 90°27'01.2"E` (`lat: 23.693639, lng: 90.450333`).
   - Radius: Defined as `MOSQUE_SEARCH_RADIUS_KM=1.0` in `.env`.
   - Haversine distance formula calculates the distance between base coordinates and discovered mosques.
   - **Next Jamat Computation**: Calculates next congregational prayer based on prayer start times and standard Sunnah offsets (Fajr +38 min, Dhuhr 1:15 PM, Asr +25 min, Maghrib +10 min, Isha 7:45 PM, Jumu'ah 1:30 PM).

---

## 2. Key Design & Technical Decisions

### 2.1 Rebranding & "মুসাফির" (Musafir) Concept
- In Islamic tradition, "Musafir" (traveler / guest of the world) carries deep spiritual meaning. All references to generic "Guest" or "অতিথি" have been replaced with **মুসাফির**.
- Brand name updated to **Muslim Ummah**.

### 2.2 Alarm Feature Implementation
- Added an alarm summary banner directly under the daily prayer list on the home screen and a quick config modal on the prayer details screen.
- Used the **Web Audio API** (`AudioContext` oscillator and exponential gain ramps) to synthesize gentle melodic chime frequencies (A4, C#5, E5, A5), eliminating external audio file load failures or CORS issues.
- Interactive modal supports enabling/disabling individual prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) and configuring custom alarm times via `<input type="time">`.

### 2.3 Font Awesome 6.5.1 & Visual Icon Polish
- Upgraded to Font Awesome 6.5.1 CDN.
- Replaced missing or deprecated icons:
  - Sparkles replaced with `fa-wand-magic-sparkles`.
  - Added dedicated prayer icons (`fa-cloud-sun`, `fa-sun`, `fa-cloud`, `fa-mountain-sun`, `fa-moon`).
  - Added navigation icons and crosshair badges (`fa-location-crosshairs`, `fa-diamond-turn-right`).

---

## 3. Environment Variables Reference

| Variable | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `BASE_LAT` | Float | `23.693639` | Latitude for 23°41'37.1"N |
| `BASE_LNG` | Float | `90.450333` | Longitude for 90°27'01.2"E |
| `BASE_LOCATION_NAME` | String | `যাত্রাবাড়ী/দনিয়া, ঢাকা` | Display name for base coordinate |
| `MOSQUE_SEARCH_RADIUS_KM`| Float | `1.0` | Search radius in kilometers |
| `PRAYER_CALC_METHOD` | Int | `1` | 1 = Univ. of Islamic Sciences Karachi (IFB compatible) |
| `PRAYER_API_BASE_URL` | String | `https://api.aladhan.com/v1` | Free public Aladhan API endpoint |
| `OSM_NOMINATIM_API_URL` | String | `https://nominatim.openstreetmap.org/search` | OpenStreetMap search endpoint |

---

## 4. Verification and Testing

1. **JavaScript Syntax Verification**: Verified with `node -c config.js` and `node -c script.js` (0 syntax errors).
2. **Clock & Timer Precision**: Real-time ticker validated with 1-second cadence.
3. **API Fallback Grace**: Tested behavior when offline or disconnected; system falls back to standard vetted local mosques and Karachi computation without breaking UI rendering.
