# Hoops Home Court

An installable at-home basketball practice app for kids and parents.

Live app:

```text
https://skids2310.github.io/hoops-home-court/
```

## Run locally

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Host Online

### Netlify

1. Go to Netlify and create a new site.
2. Drag this whole folder into Netlify deploys, or connect it to a Git repository.
3. The app is static, so there is no build command.
4. The publish directory is the project root.

### GitHub Pages

1. Create a new GitHub repository.
2. Upload this project folder.
3. In repository settings, enable Pages.
4. Set the source to deploy from a branch.
5. Choose the `master` branch and the root folder.

## App Features

- Installable PWA metadata
- Offline caching through `service-worker.js`
- At-home session builder
- Skills and records library
- Record score tracking with top 3 results
- Daily progress streaks and achievement badges
