# RomaNET Website

A multilingual website for the RomaNET European project, dedicated to fighting hate speech and hate crimes against Roma communities.

## 🌍 Project Overview

RomaNET is a European initiative funded under the CERV-2024-CHAR-LITI-SPEECH programme. This website serves as the central hub for:
- Sharing information about the project
- Educating about hate speech and antigypsyism
- Providing reporting resources and support
- Showcasing AI-powered counter-narratives
- Publishing news and updates
- Connecting partner organizations

## ✨ Features

- **Multilingual Support**: Full support for 4 languages (English, Spanish, Italian, Greek)
- **Content Management**: Decap CMS for easy content editing
- **Responsive Design**: Mobile-first approach with RomaNET's official color palette
- **SEO Optimized**: Proper meta tags and language alternates
- **EU Compliance**: Funding disclaimer and GDPR-compliant setup
- **Social Media Integration**: Links to Instagram, TikTok, and Facebook

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sergiovs6/web-romanet.git
cd web-romanet

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📁 Project Structure

```
web-romanet/
├── public/
│   ├── admin/              # CMS configuration
│   │   ├── index.html
│   │   └── config.yml
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── Card.astro
│   ├── content/            # Content collections
│   │   ├── pages/          # Page content (4 languages)
│   │   ├── news/           # News articles (4 languages)
│   │   ├── partners/       # Partner profiles
│   │   └── config.ts       # Content schema definitions
│   ├── layouts/
│   │   └── Layout.astro    # Main layout
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Redirects to /en
│   │   └── [lang]/         # Dynamic language routes
│   └── styles/
│       └── global.css      # Global styles
├── astro.config.mjs        # Astro configuration
├── netlify.toml            # Netlify deployment config
└── package.json
```

## 🌐 Supported Languages

- **EN** (English) - Default language
- **ES** (Español) - Spanish
- **IT** (Italiano) - Italian
- **GR** (Ελληνικά) - Greek

All content, navigation, and UI elements are fully translated.

## 📝 Content Management

### Accessing the CMS

1. Navigate to `/admin` on your deployed site
2. Login with Netlify Identity credentials
3. Edit pages, create news articles, or update partner information

### Content Structure

#### Pages
- Home (with tagline and CTA buttons)
- About RomaNET
- About Hate Speech & Hate Crimes
- Report & Get Support
- AI Against Hate
- News (listing page)
- Partners & Network

#### News Categories
- Project News
- Events & Trainings
- Roundtables
- Calls to Action

#### Partners
- Kamira (Spain)
- Romni (Italy)
- Association of Greek Roma Mediators (Greece)
- Universidad de Jaén (Spain)

## 🎨 Design System

### Color Palette

```css
--roma-black: #060606
--roma-white: #FEFEFE
--roma-offwhite: #ECE2D7
--roma-blue-dark: #1F3C4F
--roma-blue-soft: #5E7381
--roma-red: #ED4143
--roma-pink: #F86D74
--roma-pink-light: #FA9FA1
--roma-green: #1D9939
--roma-green-soft: #55B471
--roma-yellow: #E4A73C
--roma-mustard: #EBBD6D
--roma-apricot: #F0D3A0
```

## 🚢 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Enable Netlify Identity for CMS authentication
4. Invite team members to edit content

### Environment Variables

No environment variables are required for the basic setup. Netlify Identity is configured automatically when enabled in the Netlify dashboard.

## 🔧 Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI commands
```

### Adding Content

#### New Page
1. Create markdown file in `src/content/pages/[lang]/`
2. Add corresponding route in `src/pages/[lang]/`
3. Update CMS config in `public/admin/config.yml`

#### New News Article
1. Use CMS at `/admin` or create markdown in `src/content/news/[lang]/`
2. Follow naming convention: `YYYY-MM-DD-slug.md`

#### New Partner
1. Use CMS at `/admin` or create markdown in `src/content/partners/`
2. Include all 4 language descriptions

## 🤝 Contributing

This is a project-specific website. Content contributions should be made through the CMS by authorized team members.

## 📄 License

This project is part of the RomaNET European initiative.

## 🔗 Links

- **Instagram**: [@project_romanet](https://www.instagram.com/project_romanet)
- **TikTok**: [@romanet.project](https://www.tiktok.com/@romanet.project)
- **Facebook**: [RomaNET Project](https://www.facebook.com/share/1HLpAtArtH/)

## 📞 Contact

For project information and partnership inquiries, please visit the website or contact through official channels.

---

**Funded by the European Union** under the CERV-2024-CHAR-LITI-SPEECH programme.

*Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.*

