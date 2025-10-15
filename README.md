# Cal Day Ham Personal Website

A minimalist personal website showcasing portfolio projects, blog posts, and professional information.

## Site Structure

```
basic-html-caldayham.com/
├── index.html              # Home page (about, site info, links)
├── portfolio.html          # Portfolio overview page (dynamically loads projects)
├── blog.html              # Blog listing page (dynamically loads posts)
├── style.css              # Global stylesheet (used by ALL pages)
├── portfolio.js           # JavaScript to load portfolio items from JSON
├── blog.js                # JavaScript to load blog posts from JSON
├── portfolio/             # Portfolio content directory
│   ├── 0-portfolio-data.json # Portfolio projects data (EDIT THIS to add projects)
│   ├── anesthesia-mask.html
│   ├── system-pavers.html
│   ├── dubia-roach-farm.html
│   ├── vertical-pole.html
│   ├── strandbeest.html
│   └── [other-project].html
├── blog/                  # Blog content directory
│   ├── 0-blog-data.json   # Blog posts data (EDIT THIS to add posts)
│   ├── growth-phases.html
│   ├── lossy-compression.html
│   ├── markdown files/    # Original markdown files (optional)
│   └── [other-post].html
└── README.md              # This file
```

## Design Philosophy

**Minimalism**: Clean, simple design with maximum readability and minimal code.

**Key Design Elements**:
- System fonts for fast loading and native feel
- Centered layout with 650px max-width for optimal reading
- Generous whitespace
- Responsive design for mobile devices
- Simple blue links (#0066cc) on white background

## CSS Architecture

### Global Styles (`style.css`)

All pages use the same stylesheet for consistency. Key classes:

#### `.callout`
Aesthetic bordered boxes for highlighting content:
- Border: 1px solid #d0d0d0 (thin, light gray)
- Background: #f8f8f8 (slightly light gray)
- Padding: 1.5rem
- Square corners (no border-radius)

**Usage**: Wrap important sections, quotes, or highlighted information
```html
<div class="callout">
    <p>Your highlighted content here</p>
</div>
```

#### `nav`
Navigation bar with bottom border:
- Links to all main pages (Home, Portfolio, Blog)
- Active page gets `.active` class with bold font weight
- Appears consistently on ALL pages

#### `.subtitle`
Secondary text styling:
- Color: #666 (medium gray)
- Used for roles, dates, categories

### Typography
- **h1**: 2rem, 600 weight (page title)
- **h2**: 1.25rem, 600 weight (section headers)
- **h3**: Used for subsections (inherits from browser defaults)
- **Body**: 1.6 line-height for readability
- **Lists**: No bullets by default (can be styled per-page)

## Page Templates

### Main Pages Structure

All main pages follow this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Cal Day Ham</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <header>
            <h1>Cal Day Ham</h1>
            <p class="subtitle">Page Subtitle</p>
        </header>

        <nav>
            <a href="index.html">Home</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="blog.html">Blog</a>
        </nav>

        <!-- Page content sections here -->
    </main>
</body>
</html>
```

### Detail Pages Structure (Portfolio/Blog)

Detail pages in subdirectories need relative paths:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Page Title - Cal Day Ham</title>
    <link rel="stylesheet" href="../style.css">  <!-- Note: ../ for parent directory -->
</head>
<body>
    <main>
        <header>
            <h1>Cal Day Ham</h1>
            <p class="subtitle"><a href="../blog.html">← Back to Blog</a></p>  <!-- Back link -->
        </header>

        <nav>
            <a href="../index.html">Home</a>  <!-- Note: ../ for all nav links -->
            <a href="../portfolio.html">Portfolio</a>
            <a href="../blog.html" class="active">Blog</a>
        </nav>

        <article>
            <!-- Content sections here -->
        </article>
    </main>
</body>
</html>
```

**IMPORTANT**: Detail pages in subdirectories must use `../` prefix for all links back to main pages and CSS.

## Content Management

### Dynamic Content Loading

**IMPORTANT**: Portfolio projects and blog posts are loaded dynamically from JSON files. You **DO NOT** need to edit the HTML files directly - just edit the JSON!

### Adding a New Portfolio Project

**Simple 2-Step Process:**

1. **Edit `portfolio/0-portfolio-data.json`**: Add a new project object to the `projects` array:
   ```json
   {
     "title": "Your Project Name",
     "description": "Description of the project, what it does, impact, etc.",
     "technologies": "Tech1, Tech2, Tech3",
     "link": "portfolio/project-filename.html",
     "date": "2024-01-15",
     "tags": ["Research", "Design"],
     "views": 0
   }
   ```

   **Field Details:**
   - `date`: Use ISO format YYYY-MM-DD for the project completion/start date
   - `tags`: Choose from "Research", "Design", "Personal" (can have multiple)
   - `views`: Start with 0 or estimated view count for sorting

2. **Create detail page**: `portfolio/project-filename.html`
   - Use the detail page template below
   - Include project description, technologies, outcomes
   - Use callout boxes for key information
   - Add back link: `<a href="../portfolio.html">← Back to Portfolio</a>`

**The portfolio.html page will automatically display your new project!** No need to edit the HTML.

### Adding a New Blog Post

**Simple 3-Step Process:**

1. **Edit `blog/0-blog-data.json`**: Add a new post object to the `posts` array (at the top for most recent):
   ```json
   {
     "title": "Your Blog Post Title",
     "date": "2024-09-15",
     "excerpt": "Brief summary or excerpt of your post that appears on the listing page.",
     "link": "blog/post-filename.html",
     "tags": ["Personal Development", "Systems Thinking & Cognition"],
     "views": 0
   }
   ```

   **Field Details:**
   - `date`: Use ISO format YYYY-MM-DD for the publication date
   - `tags`: Array of category tags - should match topics from the topics array
   - `views`: Start with 0 or estimated view count for sorting

2. **(Optional) Add topic**: If using a new category tag, add it to the `topics` array in `blog/0-blog-data.json`

3. **Create detail page**: `blog/post-filename.html`
   - Use the detail page template below
   - Convert markdown headers to HTML headers (# → h2, ## → h3, etc.)
   - Convert markdown lists to `<ul>` and `<li>` tags
   - Wrap important sections in `.callout` divs
   - Use `<article>` tag for main content
   - Add subtitle with date: `<p class="subtitle">2024-09-15</p>`

**The blog.html page will automatically display your new post!** No need to edit the HTML.

### Converting Markdown to HTML

When you have a markdown file (`.md`) for a blog post:

1. Place the `.md` file in the `blog/` directory (optional, for reference)
2. Create a corresponding `.html` file with the same name
3. Convert the markdown syntax to HTML:
   - `# Title` → `<h2>Title</h2>` (use h2 for main sections)
   - `## Subtitle` → `<h3>Subtitle</h3>`
   - `- List item` → `<li>List item</li>` (wrap in `<ul>`)
   - `**Bold**` → `<strong>Bold</strong>`
   - Use `<div class="callout">` for highlighted sections
4. Add the post to `blog/0-blog-data.json` with link to the HTML file

### Blog Content Philosophy

The blog section is for **personal thoughts, reflections, and insights** rather than just project documentation. Content can include:
- Strategy and business philosophy
- Systems thinking and mental models
- Lessons learned from experiences
- Technical deep-dives with personal perspective
- Reflections on growth and development

## Navigation Best Practices

### Active Page Highlighting
Always mark the current page with `.active` class:
```html
<!-- On blog.html -->
<nav>
    <a href="index.html">Home</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="blog.html" class="active">Blog</a>  <!-- Current page -->
</nav>
```

### Link Consistency
- Main pages link to each other directly: `href="portfolio.html"`
- Detail pages link with parent directory prefix: `href="../portfolio.html"`
- Detail pages link to main page at top: `<p class="subtitle"><a href="../blog.html">← Back to Blog</a></p>`

## Styling Guidelines

### When to Use Callout Boxes

**DO use callout boxes for**:
- Key takeaways or important insights
- Project summaries on listing pages
- Highlighted quotes or core concepts
- Lists of features or characteristics
- Strategic frameworks or methodologies

**DON'T use callout boxes for**:
- Regular paragraph text
- Navigation elements
- Every section (use sparingly for emphasis)

### Content Hierarchy

```
<h1> - Site name (Cal Day Ham) - appears in header
<h2> - Page title or major section
<h3> - Subsections within page
<h4> - Sub-subsections (use sparingly)
.subtitle - Dates, categories, secondary info
```

## Editing Workflow

### For AI Agents
1. Read existing pages to understand current structure
2. Match the established style and patterns
3. Use callout boxes consistently with existing usage
4. Maintain relative path structure (`../` for subdirectories)
5. **Edit JSON files** (`portfolio/0-portfolio-data.json`, `blog/0-blog-data.json`) to add portfolio/blog items - **NOT the HTML files**
6. Create detail pages for new portfolio projects or blog posts
7. Keep navigation consistent across all pages
8. Preserve minimalist aesthetic - don't add unnecessary elements

### For Humans
1. **To add portfolio/blog items**: Edit the JSON files (`portfolio/0-portfolio-data.json`, `blog/0-blog-data.json`)
2. **To add detail pages**: Create new HTML files in `portfolio/` or `blog/` directories
3. Preview in browser by opening the HTML file (use a local server for JSON loading)
4. All styling is in `style.css` - edit once, affects all pages
5. Follow the templates above for new pages
6. Keep it simple - resist the urge to add complexity

**Quick Workflow Example:**
- Want to add a blog post? → Edit `blog/0-blog-data.json` + create `blog/new-post.html`
- Want to add a portfolio project? → Edit `portfolio/0-portfolio-data.json` + create `portfolio/new-project.html`

## Technical Notes

- **Minimal JavaScript**: Uses vanilla JavaScript only for dynamic content loading from JSON
- **No frameworks**: Pure HTML/CSS/JS for minimal dependencies
- **No build process**: Edit files directly, no compilation needed
- **Mobile-first responsive**: Media queries at 600px breakpoint
- **System fonts**: Fast loading, native appearance

### How Dynamic Loading Works

1. **portfolio.html** and **blog.html** include `<script>` tags that load JavaScript files from root directory
2. **portfolio.js** fetches `portfolio/0-portfolio-data.json` and generates HTML for each project
3. **blog.js** fetches `blog/0-blog-data.json` and generates HTML for each post and topic
4. Content is injected into placeholder `<div>` elements with specific IDs:
   - `#portfolio-projects` - where portfolio items appear
   - `#blog-posts` - where blog post previews appear
   - `#blog-topics` - where topic links appear

### Filtering System

Both portfolio and blog pages feature dropdown filters that allow users to sort and filter content:

**Portfolio Filters:**
- **Recent**: Sorts projects by date (newest first)
- **Popular**: Sorts projects by view count (highest first)
- **Research**: Shows only projects tagged with "Research"
- **Design**: Shows only projects tagged with "Design"
- **Personal**: Shows only projects tagged with "Personal"

**Blog Filters:**
- **Recent**: Sorts posts by date (newest first)
- **Popular**: Sorts posts by view count (highest first)
- **Personal Development**: Shows only posts tagged with "Personal Development"
- **Systems Thinking & Cognition**: Shows only posts with this category tag
- **Strategy & Growth Philosophy**: Shows only posts with this category tag
- **Complexity & Philosophy**: Shows only posts with this category tag

The dropdown is styled to blend seamlessly into the heading, appearing as part of the text. When category filters are applied (Research, Design, etc.), items are still sorted by date within that filtered set.

### JSON Data Structure

**portfolio/0-portfolio-data.json**:
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Full description...",
      "technologies": "Tech1, Tech2, Tech3",
      "link": "portfolio/filename.html",
      "date": "2024-01-15",
      "tags": ["Research", "Design", "Personal"],
      "views": 150
    }
  ]
}
```

**Required Fields:**
- `title`: Project name (string)
- `description`: Full project description (string)
- `technologies`: Comma-separated technologies used (string)
- `link`: Relative path to detail page (string)
- `date`: ISO date format YYYY-MM-DD (string) - used for "Recent" sorting
- `tags`: Array of tags for filtering (array) - options: "Research", "Design", "Personal"
- `views`: View count for popularity sorting (number)

**blog/0-blog-data.json**:
```json
{
  "posts": [
    {
      "title": "Post Title",
      "date": "2024-09-15",
      "excerpt": "Brief summary...",
      "link": "blog/filename.html",
      "tags": ["Personal Development", "Systems Thinking & Cognition"],
      "views": 320
    }
  ],
  "topics": ["Personal Development", "Systems Thinking & Cognition", "Strategy & Growth Philosophy"]
}
```

**Required Fields:**
- `title`: Post title (string)
- `date`: ISO date format YYYY-MM-DD (string) - used for "Recent" sorting
- `excerpt`: Brief post summary (string)
- `link`: Relative path to detail page (string)
- `tags`: Array of category tags (array) - should match topics in the topics array
- `views`: View count for popularity sorting (number)

## File Naming Conventions

- Use lowercase, hyphenated names: `project-name.html`, `blog-post.html`
- Keep names descriptive but concise
- Avoid special characters, spaces, or underscores

## Future Enhancements

Possible additions that maintain the minimalist philosophy:
- RSS feed for blog posts
- Topic/category filtering for blog
- Simple search functionality
- Dark mode toggle
- Print stylesheet

## Contact & Information

**Site Owner**: Cal Day Ham
**LinkedIn**: [linkedin.com/in/caldayham](https://linkedin.com/in/caldayham)
**Email**: cal@caldayham.com

---

**Last Updated**: 2024
**Version**: 1.0
**Maintained by**: Cal Day Ham
