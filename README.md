# Ummah Connect

A compact, mobile-first UI prototype for a Muslim lifestyle app targeting Dhaka users. The project simulates a realistic app experience with prayer tracking, mosque discovery, halal bazaar listings, daily inspiration, and user profile flows.

## AI Quick Context

- Type: static HTML/CSS/JavaScript prototype
- Goal: present a polished mobile app concept, not a production backend
- Audience: Bangladeshi Muslim users, with English + Bangla support
- Core theme: emerald / gold / ivory palette with warm, premium, trust-focused design

## Included Screens

1. Splash
2. Onboarding / language selection
3. Home dashboard
4. Prayer times
5. Qibla direction
6. Mosque discovery
7. Mosque details
8. Halal bazaar
9. Business detail
10. Daily inspiration / hadith
11. Profile

## Project Structure

- `index.html` — all screen markup and navigation structure
- `styles.css` — app styling, layout system, colors, cards, and mobile wrapper
- `script.js` — splash delay and screen transitions
- `User_Journey_and_Design_Decisions.md` — product rationale and UX decisions

## How to Run

Because this is a static prototype, there is no install step.

Option 1:
- Open `index.html` directly in a modern browser.

Option 2 (recommended for local serving):
```bash
cd /Users/mac/Documents/documents/parvej/muslim-app-prototype
python3 -m http.server 8000
```
Then open: http://localhost:8000

## Important Notes

- The app uses mock data and UI-only interactions.
- No backend, database, authentication, or real APIs are connected.
- Navigation is simulated with JavaScript; it is meant for presentation and prototype validation.
- The design intentionally reflects Dhaka context: mosque info, halal places, prayer timings, and localized UX references.

## Design Direction

- Emerald `#075B45` for primary actions and trust-building moments
- Gold `#D6B66D` for premium accents
- Ivory `#F7F5EE` for soft, readable background surfaces
- Inter for English, Noto Sans Bengali for Bangla

## Summary

This project is a concept prototype for an app called Ummah Connect, designed to help users manage daily worship, discover nearby mosques, find halal businesses, and consume daily Islamic inspiration in a clean mobile environment.
