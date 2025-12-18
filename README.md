# Fodder 🎴

**Conversation Starters for Family & Friends**

A Progressive Web App (PWA) for sparking meaningful conversations at family gatherings, dinner parties, and holiday celebrations.

🌐 **Live at:** [fodder.523.life](https://fodder.523.life)

## Features

- 📱 **Works Offline** - Install as a PWA and use without internet
- 🏷️ **Tag-Based Filtering** - Include or exclude prompts by category
- 🎲 **Random Selection** - Get a random prompt or shuffle all
- 👆 **Swipe Navigation** - Touch-friendly for mobile devices
- 🎨 **Beautiful Design** - Warm, cozy aesthetic perfect for gatherings

## Tag Categories

### Topic Tags
`food`, `travel`, `career`, `memories`, `holidays`, `family`, `friends`, `hobbies`, `entertainment`, `nature`, `home`, `school`, `sports`

### Type Tags
- `preference` - Favorites and opinions
- `experience` - Things you've done
- `hypothetical` - "What if" scenarios
- `reflection` - Looking back
- `aspiration` - Goals and dreams
- `opinion` - Views on topics

### Mood Tags
`fun`, `silly`, `deep`, `heartwarming`, `nostalgic`, `creative`, `thoughtful`, `adventurous`, `cozy`

### Audience Tags
`all-ages`, `teens`, `adults`, `family-friendly`

## How to Use

1. **Filter by Tags** - Tap tags to include or exclude categories
   - Use "Include" mode to show only prompts with selected tags
   - Use "Exclude" mode to hide prompts with selected tags

2. **Get Prompts**
   - Tap "Random Prompt" for a single random card
   - Tap "Shuffle All" to randomize the entire filtered list
   - Tap the card or swipe to get the next prompt

3. **View All** - Tap "View All Prompts" to see the full filtered list

## Installation (as PWA)

On mobile or desktop, visit [fodder.523.life](https://fodder.523.life) and:

- **iOS**: Tap Share → "Add to Home Screen"
- **Android**: Tap menu → "Install app" or "Add to Home Screen"
- **Desktop Chrome/Edge**: Click install icon in address bar

## Development

This is a plain HTML/CSS/JS PWA with no build step required.

### File Structure

```
fodder/
├── docs/                    # GitHub Pages root
│   ├── index.html          # Main app
│   ├── manifest.json       # PWA manifest
│   ├── sw.js               # Service worker
│   ├── CNAME               # Custom domain
│   ├── css/
│   │   └── styles.css      # All styles
│   ├── js/
│   │   ├── app.js          # App logic
│   │   └── prompts.js      # Prompt database
│   └── assets/
│       └── icons/          # PWA icons
├── README.md
└── LICENSE
```

### Local Development

Simply serve the `docs` directory with any static file server:

```bash
# Using Python
cd docs && python -m http.server 8000

# Using Node.js
npx serve docs

# Using PHP
cd docs && php -S localhost:8000
```

Then visit `http://localhost:8000`

### Adding New Prompts

Edit `docs/js/prompts.js` and add entries to the `PROMPTS` array:

```javascript
{
    text: "Your conversation prompt here?",
    tags: ["tag1", "tag2", "tag3"]
}
```

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks
- **Service Worker** - Offline support
- **Web App Manifest** - PWA installation

## Design Philosophy

The design is inspired by:
- Vintage playing cards
- Fireside gatherings
- Holiday coziness
- Warm, inviting color palettes

Fonts:
- **Crimson Pro** - Display/headings (elegant serif)
- **Outfit** - Body text (modern sans-serif)

Colors:
- Cream, parchment, gold, sienna, mahogany, espresso
- Accent: Ruby red, forest green

## Contributing

Feel free to submit pull requests with:
- New conversation prompts
- Bug fixes
- Design improvements
- Accessibility enhancements

## License

MIT License - See [LICENSE](LICENSE) file

---

Made with ❤️ for family conversations
