# Utpal's Portfolio Website

This is a Next.js portfolio website designed for a videographer.

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 How to Update Content

You can easily update the website content by editing the files in the `data/` folder. You do not need to touch the code.

### 1. Managing Projects (Videos/Photos)
Open `data/projects.json`. This file contains a list of your projects.

**To Add a New Project:**
Copy an existing block (from `{` to `}`), paste it, and change the details.

```json
{
  "id": "5",
  "title": "New Wedding Video",
  "category": "Wedding",
  "thumbnail": "https://your-image-url.com/image.jpg",
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "description": "Description of the video."
}
```

*   **`title`**: The name of the project.
*   **`category`**: e.g., Wedding, Commercial, Travel.
*   **`thumbnail`**: URL to the image. You can use images from the `public/` folder (e.g., `/my-image.jpg`) or external URLs.
*   **`videoUrl`**: **This is where the link goes.** If you want it to go to a YouTube video, paste the YouTube link here.

### 2. Updating About Page
Open `data/about.json`.

*   **`bio`**: Change your biography text here.
*   **`experience`**: Add or remove items from the `experience` list.
*   **`moments`**: Add image URLs to the `moments` list to show them in the gallery.

## 🎨 Customization

*   **Colors/Fonts**: Edit `app/globals.css`.
*   **Images**: Place local images in the `public/` folder and reference them like `/image-name.jpg`.

## 部署 (Deployment)

This site is ready for Netlify.
1.  Push to GitHub.
2.  Import to Netlify.
3.  The contact form will work automatically.
