# Dhrut Patel — Developer Portfolio

A personal portfolio showcasing my software projects, development experience, and interest in artificial intelligence. Built with HTML, CSS, and JavaScript, with a dark cinematic design and animated typography.

**[GitHub](https://github.com/dhrutpatel277-bot)** · **[LinkedIn](https://www.linkedin.com/in/dhrut-patel-12668b32b)** · **[Email](mailto:DhrutPatel277@gmail.com)**

## About me

I’m pursuing a B.S. in Computer Science with an Artificial Intelligence emphasis at the University of Wisconsin–Green Bay, with an expected graduation in May 2028. I enjoy building responsive interfaces, working with APIs and databases, and understanding how the pieces of an application fit together.

This portfolio brings together my work with React, JavaScript, Node.js, Java, Python, and SQL.

## Features

- **Opening sequence:** A centered 0–100 intro counter followed by a reveal transition. The counter is a visual introduction, not a measurement of downloaded assets.
- **Animated name:** Individual letters change weight and width to create a moving typographic composition.
- **Atmospheric lighting:** Drifting red light and a pointer-responsive glow give the hero depth.
- **Project showcases:** Custom visual concepts, descriptions, GitHub links, and expandable project notes.
- **Interactive details:** Project panels respond to pointer movement, and artwork reveals as it enters the viewport.
- **Professional background:** Education, technical skills, research interests, and development experience.
- **Contact tools:** Email link, copy-email button, social links, and a downloadable résumé.
- **Responsive layout:** Layout adjustments for desktop, tablet, and mobile screens.
- **Motion preferences:** Continuous animations are disabled when a visitor requests reduced motion.

## Built with

| Technology | Purpose |
| --- | --- |
| HTML5 | Content, semantic page structure, and project dialogs |
| CSS3 | Layout, responsive styles, gradients, and keyframe animations |
| JavaScript | Intro sequence, typography animation, dialogs, and pointer interactions |
| Google Fonts | Barlow Condensed, Space Grotesk, and DM Mono |

No package installation, framework, build step, or backend server is required. Google Fonts loads from an external service; fallback fonts are available when it cannot load.

## Project structure

```text
Dhrut-Portfolio-Cinematic/
├── index.html                 # Main page for editing and GitHub Pages
├── styles.css                 # Design, responsive layouts, and CSS animations
├── script.js                  # Interactions and JavaScript animations
├── START-HERE.html             # Self-contained preview with embedded CSS and JS
├── Dhrut-Patel-Resume.pdf       # Downloadable résumé
└── README.md                  # Setup and maintenance instructions
```

## Open the portfolio

### Quick preview

1. Download and extract the project ZIP.
2. Open the extracted folder in Finder or File Explorer.
3. Double-click `START-HERE.html` to open it in a browser.
4. Use **Replay intro** in the bottom-right corner to see the opening again.

`START-HERE.html` contains its own CSS and JavaScript. It is useful for a quick preview, but it is a separate snapshot of the website.

### Edit in VS Code

1. Open VS Code.
2. Choose **File → Open Folder…** and select the extracted project folder.
3. Edit `index.html`, `styles.css`, and `script.js`.
4. Open `index.html` in your browser to view the changes. For automatic refresh, use the **Live Server** extension and choose **Open with Live Server** on `index.html`.

Open the extracted folder, not the ZIP archive. HTML, CSS, and JavaScript files should open as readable text in VS Code. The résumé PDF is a binary document, not a source-code file.

> Changes to the three source files do not automatically update `START-HERE.html`. Use `index.html` when editing or publishing the website.

## Featured projects

### Tanning Tropical

A responsive website presenting a tanning salon’s services, pricing, branding, and contact information.

- **Technologies:** React, JavaScript, HTML, CSS, Vite
- **[Live website](https://tanning-tropical.vercel.app)**
- **[Source code](https://github.com/dhrutpatel277-bot/Tanning-Tropical)**

### AI Chat Application

A conversational application connecting a JavaScript interface to an external AI service through Node.js, Express, and REST APIs.

- **Technologies:** JavaScript, Node.js, Express, REST APIs
- Browse additional work on my **[GitHub profile](https://github.com/dhrutpatel277-bot)**.

### Student Management System

A menu-driven Java application for managing student records, GPA information, searching, sorting, and persistent file storage.

- **Technologies:** Java, object-oriented programming, file I/O
- **[Source code](https://github.com/dhrutpatel277-bot/student-management-system)**

### Personal Expense Manager

A Python tool for recording expenses, retaining transaction history in CSV files, and reviewing category totals and summaries.

- **Technologies:** Python, CSV, reporting
- **[Source code](https://github.com/dhrutpatel277-bot/ExpenseManager)**

The project previews in this portfolio are illustrative visual concepts. They are not screenshots of the original applications. Follow the live demo and source-code links to see the actual implementations. The illustrated chat panel does not run an AI service.

## Customize the website

| What to change | Where to edit |
| --- | --- |
| Name, introduction, education, and experience | `index.html` |
| Project titles, descriptions, and links | `index.html` |
| Expanded project notes | The `details` object in `script.js` |
| Colors and typography | `styles.css`; the cinematic overrides appear near the end |
| Mobile layouts | Media queries in `styles.css` |
| Intro timing and replay behavior | `playIntro()` and `closeIntro()` in `script.js` |
| Animated name | `animateName()` in `script.js` |
| Contact email | Contact links in `index.html` and the clipboard handler in `script.js` |
| Résumé | Replace `Dhrut-Patel-Resume.pdf`, keeping the filename unchanged |

When adding a project-detail button, its `data-detail` value must match a key in the `details` object. Keep section IDs consistent with the navigation links.

## Publish with GitHub Pages

1. Create a repository on GitHub, or open your existing portfolio repository.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `Dhrut-Patel-Resume.pdf`
   - `README.md`
3. Commit the files to your publishing branch, usually `main`.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select your publishing branch and **/(root)**, then click **Save**.
7. Wait for GitHub’s deployment to finish and open the website URL shown on the Pages screen.

Upload the files themselves to the root, rather than putting the entire extracted folder inside another folder. Keep filenames and capitalization unchanged so relative links continue to work.

`START-HERE.html` is optional for publishing. GitHub Pages uses `index.html` as the home page.

## Troubleshooting

**VS Code says the file is binary or has an unsupported encoding.**

Check the filename. Extract the ZIP first, then open the folder and select `index.html`, `styles.css`, or `script.js`. Do not open the ZIP or résumé PDF as source code.

**The page has no styling or animation.**

Make sure all three source files are in the same folder and their names match the references in `index.html`. Alternatively, open `START-HERE.html` for the self-contained preview. JavaScript must be enabled for interactive effects.

**Some animations are disabled.**

Check your device’s reduced-motion preference. The portfolio respects that setting. The **Replay intro** button restarts the opening, while reduced-motion mode keeps it brief and static.

**My edits are not appearing.**

Preview `index.html`, rather than the separate `START-HERE.html` snapshot. Save the source files and refresh the browser. On GitHub Pages, wait for the newest deployment to complete.

**The résumé link is broken.**

Confirm that `Dhrut-Patel-Resume.pdf` is in the same folder as `index.html` and that its spelling and capitalization match exactly.

**Copy email does not work.**

Some browser contexts restrict clipboard access. The site falls back to opening an email draft; you can also use the visible email link.

## Accessibility and performance

The site includes semantic sections, keyboard-operable project dialogs, visible focus styles, a skip link, and reduced-motion support. Motion effects are decorative; project information remains available without them. The name animation pauses its calculations while the hero is offscreen or the document is hidden.

This project does not include analytics, account registration, a contact-form backend, or API credentials. The external project and social links open their respective websites.

## Contact

**Dhrut Patel**  
[DhrutPatel277@gmail.com](mailto:DhrutPatel277@gmail.com)  
[GitHub](https://github.com/dhrutpatel277-bot) · [LinkedIn](https://www.linkedin.com/in/dhrut-patel-12668b32b)
