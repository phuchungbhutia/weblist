# Weblist - Auto-Generated Music Playlist Widget

A web widget that dynamically fetches music playlists from YouTube and Spotify based on search queries.

## Features

- 🔍 Dynamic song fetching from YouTube & Spotify
- 📜 Auto-updated playlist based on search queries
- 🎶 Clickable song links for playback in browser
- 🌎 Deployable on GitHub Pages

## 🛠️ Setting Up APIs for Weblist

This guide will walk you through the necessary steps to obtain API keys for YouTube and set up Spotify API credentials to make the Weblist widget fully functional.

### 🔑 1. Obtaining a YouTube Data API v3 Key

1. **Go to the Google Cloud Console:** Navigate to [https://console.cloud.google.com/](https://console.cloud.google.com/). If you don't have a project yet, you'll need to create one.
2. **Select or Create a Project:** Choose an existing project or click on the project dropdown at the top and select "New Project". Follow the prompts to create a new project and give it a name.
3. **Enable the YouTube Data API v3:**

   * In the Cloud Console, go to "Navigation menu" (three horizontal lines in the top-left corner) > "APIs & Services" > "Library".
   * In the search bar, type "YouTube Data API v3" and select it from the results.
   * Click the "Enable" button on the API's overview page.
4. **Create API Credentials:**

   * Go to "Navigation menu" > "APIs & Services" > "Credentials".
   * Click on the "Create credentials" button at the top and choose "API key".
   * A pop-up window will display your API key. Copy this key.
5. **Restrict Your API Key (Recommended):**

   * In the "Credentials" section, click on the name of the API key you just created.
   * Under "Application restrictions", select "HTTP referrers (websites)".
   * Add the URL of your GitHub Pages deployment (e.g., `https://YOUR_USERNAME.github.io/weblist/`) and click "Save". This helps prevent unauthorized use of your key.
6. **Update `credentials.json`:** Open the `config/credentials.json` file in your local Weblist project and replace `"YOUR_YOUTUBE_API_KEY"` with the API key you copied.

   **JSON**

   ```
   {
     "youtubeApiKey": "YOUR_ACTUAL_YOUTUBE_API_KEY",
     "spotifyClientId": "YOUR_SPOTIFY_CLIENT_ID",
     "spotifyClientSecret": "YOUR_SPOTIFY_CLIENT_SECRET"
   }
   ```

### 🎧 2. Setting Up Spotify API Credentials

To integrate with the Spotify API, you'll need to register an application on the Spotify Developer Dashboard and obtain a Client ID and Client Secret. **Note:** For a purely client-side application like Weblist deployed on GitHub Pages, implementing the full Spotify API integration with user authentication (Authorization Code Flow) can be complex and may expose your Client Secret. A simpler approach for fetching public data might involve the Implicit Grant Flow, but be aware of its limitations. For this guide, we'll outline the steps to get the necessary credentials, keeping in mind the client-side constraints.

1. **Go to the Spotify Developer Dashboard:** Navigate to [https://developer.spotify.com/dashboard/](https://www.google.com/search?q=https://developer.spotify.com/dashboard/) and log in with your Spotify account.
2. **Create an App:**

   * Click on the "Create an app" button.
   * In the pop-up window, provide an "App name" (e.g., "Weblist") and a brief "App description".
   * Agree to the Spotify Developer Terms of Service and click "Create".
3. **Retrieve Client ID and Client Secret:**

   * Once your app is created, you'll see its overview page. Here, you'll find your "Client ID". Copy this value.
   * To get your "Client Secret", click on the "Show Client Secret" button. **Treat your Client Secret like a password and do not share it publicly, especially in client-side code that will be deployed on GitHub Pages.**
4. **Configure Redirect URIs (Important for Authorization Flows):**

   * In your app's settings, you'll find a section called "Redirect URIs". This is crucial for handling the authorization flow if you were to implement user authentication. For a purely client-side application using Implicit Grant Flow (if you choose this route), you would typically add the URL of your deployed GitHub Pages site as a Redirect URI (e.g., `https://YOUR_USERNAME.github.io/weblist/`). However, implementing the full Implicit Grant Flow is beyond the scope of the basic `script.js` provided and would require additional logic to handle the authentication response.
5. **Update `credentials.json`:** Open the `config/credentials.json` file in your local Weblist project and replace `"YOUR_SPOTIFY_CLIENT_ID"` and `"YOUR_SPOTIFY_CLIENT_SECRET"` with the values you obtained.

   **JSON**

   ```
   {
     "youtubeApiKey": "YOUR_ACTUAL_YOUTUBE_API_KEY",
     "spotifyClientId": "YOUR_ACTUAL_SPOTIFY_CLIENT_ID",
     "spotifyClientSecret": "YOUR_ACTUAL_SPOTIFY_CLIENT_SECRET"
   }
   ```

**Important Considerations for Spotify API in a Client-Side Project:**

* **Security:** Directly using the Client Secret in client-side JavaScript is **not recommended** as it can be exposed.
* **Authorization:** Many Spotify API endpoints require user authentication (an Access Token obtained through a user login process). Implementing this purely on the client-side for a GitHub Pages deployment is challenging.
* **Simplified Approach (as in the provided `script.js`):** The current `script.js` includes a placeholder for Spotify API integration due to the complexities of client-side authentication. To fully integrate Spotify, you would likely need a backend server to handle the OAuth flow and securely manage your Client Secret.

By following these steps, you'll have the necessary API keys and credentials to start fetching data from YouTube and be set up for potential future Spotify API integration (keeping in mind the client-side limitations). Remember to keep your API keys and secrets secure!

## Setup

1. Clone this repository.
2. Create a `config` folder and add `credentials.json` with your YouTube API key, Spotify Client ID, and Client Secret.
3. Populate `config/search_queries.txt` with your desired search terms (one per line).
4. Open `src/index.html` in your browser.

## 💾 Committing Your Changes to the Weblist Project

This guide outlines the standard workflow for committing and pushing your changes to the Weblist GitHub repository. Following these steps ensures a clean and organized project history.

### 🔄 Standard Commit Workflow

1. **Stage Your Changes:** Before committing, you need to tell Git which changes you want to include in your commit. Use the `git add` command.

   * **To stage all changes in the current directory and its subdirectories:**

     **Bash**

     ```
     git add .
     ```
   * **To stage specific files:**

     **Bash**

     ```
     git add src/script.js assets/styles.css README.md
     ```

     Replace `src/script.js`, `assets/styles.css`, and `README.md` with the actual paths to the files you've modified.
   * **To review the changes you've staged:**

     **Bash**

     ```
     git status
     ```

     This command will show you which files are staged for commit under the "Changes to be committed" section.
2. **Commit Your Staged Changes:** Once you've staged the desired changes, you can commit them with a descriptive message using the `git commit` command.

   **Bash**

   ```
   git commit -m "feat: Implement dynamic YouTube song fetching"
   ```

   * **Commit Message Guidelines:**

     * Keep your commit messages concise but informative.
     * Use the present tense ("Implement feature" not "Implemented feature").
     * Consider using a prefix to indicate the typ**e of change (e.g., **`<span class="citation-0 interactive-span-selected-v2">feat</span>` for a new feature, `<span class="citation-0 interactive-span-selected-v2">fix</span>` for a bug fix, `<span class="citation-0 interactive-span-selected-v2">docs</span>` for documentation changes, `<span class="citation-0 interactive-span-selected-v2">style</span>` for code style changes, `<span class="citation-0 interactive-span-selected-v2">refactor</span>` for code refactoring, `<span class="citation-0 interactive-span-selected-v2">test</span>`^1^ for adding tests, `chore` for other maintenance tasks).
     * If the change is small and self-explanatory, a short message is fine. For more complex changes, provide a brief summary of what you've done.
   * **For longer commit messages, you can omit the `-m` flag:**

     **Bash**

     ```
     git commit
     ```

     This will open a text editor where you can write a more detailed commit message, including a subject line and a body with more context.
3. **Push Your Local Commits to the Remote Repository:** After committing your changes locally, you need to push them to the remote GitHub repository so that others can see them and your deployed GitHub Pages site can be updated. Use the `git push` command.

   **Bash**

   ```
   git push origin main
   ```

   * `origin` is the standard alias for your remote repository on GitHub.
   * `main` is the name of the branch you are pushing to. If you are working on a different branch (e.g., `develop` or a feature branch), replace `main` with the name of your branch.
   * If this is your first time pushing, you might need to use:

     **Bash**

     ```
     git push -u origin main
     ```

     The `-u` flag (or `--set-upstream`) sets up a tracking connection between your local `main` branch and the remote `origin/main` branch. This means that in future pushes and pulls, you can simply use `git push` and `git pull` without specifying the remote and branch.

### ⚠️ Important Considerations

* **Commit Frequently:** It's generally better to make smaller, more frequent commits that logically group related changes. This makes it easier to understand the project history and to revert changes if necessary.
* **Write Meaningful Commit Messages:** Clear and descriptive commit messages are crucial for collaboration and for understanding the evolution of the project.
* **Avoid Committing Sensitive Information:** **Never commit your API keys (`credentials.json`) or other sensitive information directly to the repository.** Ensure that `config/credentials.json` is always in your `.gitignore` file.
* **Pull Regularly:** Before making new changes, it's good practice to pull the latest changes from the remote repository to avoid conflicts with work done by others:
  **Bash**

  ```
  git pull origin main
  ```

### 🌿 Example Workflow

Let's say you've made changes to the `src/script.js` file to improve the YouTube API error handling:

1. **Stage the changes:**

   **Bash**

   ```
   git add src/script.js
   ```
2. **Commit the changes with a descriptive message:**

   **Bash**

   ```
   git commit -m "feat: Improve YouTube API error handling and display messages to the user"
   ```
3. **Push the commit to the remote repository:**

   **Bash**

   ```
   git push origin main
   ```

By following this workflow, you can effectively contribute to the Weblist project and keep the codebase organized. Happy coding!

## 🚀 Deploying Your Weblist Widget with GitHub Pages

GitHub Pages is a fantastic service for hosting static websites directly from your GitHub repository. Here's how to deploy your Weblist widget using GitHub Pages:

### ⚙️ Step-by-Step Deployment Guide

1. **Ensure Your Code is on GitHub:** First, make sure all your Weblist project files (including `index.html`, CSS, JavaScript, and the `assets` folder) are committed to your GitHub repository (e.g., `https://github.com/YOUR_USERNAME/weblist`). If you haven't done this yet, follow the steps in the "Committing Your Changes" section of the README.
2. **Navigate to Your Repository Settings:** On your GitHub repository page for Weblist, click on the **"Settings"** tab (usually located towards the right side of the menu bar, next to "Code", "Issues", "Pull requests", etc.).
3. **Scroll Down to the "GitHub Pages" Section:** On the Settings page, scroll down until you find the section labeled  **"GitHub Pages"** .
4. **Choose Your Source Branch:** Under the "Source" heading, you'll see a dropdown menu that likely says "None". Click on this dropdown and select the branch you want GitHub Pages to build your site from.

   * **Common Choice: `main` Branch:** If your main project files (especially `index.html`) are in the root of your `main` branch, select `main`.
   * **`gh-pages` Branch:** Alternatively, you can choose to deploy from a dedicated `gh-pages` branch. If you select this, you'll need to ensure your website files are in the root of this branch.

   For a simple project like Weblist with `index.html` in the root, deploying from the `main` branch is usually the easiest option.
5. **Select the Folder (if applicable):** After selecting your branch, another dropdown might appear labeled "(root)" or allow you to select a folder. If your `index.html` file is in the root of your chosen branch, leave this as "(root)". If your website files are in a specific folder (though for Weblist, they should be in the root or the `src` folder which is a level down from the root), you would select that folder.
6. **Click "Save":** Once you've selected your source branch (and optionally the folder), click the **"Save"** button.
7. **Wait for Deployment:** GitHub Pages will now start building and deploying your website. This process might take a few minutes. You'll see a notification at the top of the page indicating the status.
8. **Find Your Deployed Website URL:** Once the deployment is complete, the "GitHub Pages" section in your repository settings will update with the URL of your live website. It will typically be in the format:

   ```
   Your site is live at https://YOUR_USERNAME.github.io/weblist/
   ```

   Replace `YOUR_USERNAME` with your GitHub username and `weblist` with the name of your repository.
9. **Access Your Weblist Widget:** Open the generated URL in your web browser to see your live Weblist widget. It should now be fetching data from YouTube (if you've correctly set up your API key) and displaying the placeholder for Spotify.

### 🛠️ Troubleshooting Common Issues

* **"Page build failed" error:** Check the "GitHub Pages" section in your repository settings for more details about the error. Common causes include issues with your HTML, CSS, or JavaScript files.
* **Website not updating after changes:** Make sure you have committed and pushed your latest changes to the branch you selected for GitHub Pages. It might take a few minutes for the changes to reflect on the live site. You might need to clear your browser's cache as well.
* **Incorrect file paths:** Double-check the paths to your CSS (`../assets/styles.css`) and JavaScript (`./script.js`) files in your `index.html` to ensure they are correct relative to the location of `index.html` in your repository.
* **Browser Developer Tools:** Use your browser's developer tools (usually opened by pressing F12) to inspect the console for any JavaScript errors or network requests that might be failing (especially API calls).

### 📝 Important Notes

* GitHub Pages is designed for static websites. Since Weblist primarily uses client-side JavaScript to fetch data, it fits this model.
* **API Keys:** Remember that your `credentials.json` file containing API keys should **not** be publicly accessible in your repository. Ensure it's in your `.gitignore`. The JavaScript code in `script.js` will attempt to fetch this file client-side, which is generally okay for public API keys (like YouTube's, with referrer restrictions), but be cautious with sensitive credentials if you were to implement a more secure Spotify integration. For more secure handling of API keys, a backend server is often recommended.
* **Deployment Time:** It might take a few minutes for your site to deploy after you click "Save" in the GitHub Pages settings.

## Contribution

See `CONTRIBUTING.md` for guidelines.

## License

MIT License. See [LICENSE](LICENSE) for details.
