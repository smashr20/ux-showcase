

## Plan: Replace Project Thumbnails with Real Images

### Asset Setup
- Copy `user-uploads://Logo.jpg` → `src/assets/maayari-thumb.jpg` (Maayari project)
- Copy `user-uploads://Screenshot_2026-03-08_233338.png` → `src/assets/melodicmind-thumb.png` (Melodic Mind project)

### Changes to `src/components/ProjectsSection.tsx`

1. Import the two images plus a placeholder for Paul Davids (use an Unsplash guitar/music image URL or a gradient fallback).

2. Add a `thumbnail` field to each project object in the array:
   - Melodic Mind → `melodicmindThumb`
   - Maayari → `maayariThumb`
   - Paul Davids → random guitar-related Unsplash image URL

3. Replace the thumbnail placeholder `div` content — remove the `<span>0{i+1}</span>` number and instead render an `<img>` with:
   - `src={project.thumbnail}`
   - `alt={project.title}`
   - `className="w-full h-full object-cover"` to fill the container
   - Keep the existing gradient overlay `div` on top for visual consistency

