# HERVOICE
**HERVOICE is an offline education and communication platform on sexual reproductive health for adolescents with disabilities in Rwanda.**

## Overview
HERVOICE is a Progressive Web App (PWA) built to address the need for accessible sexual reproductive health resources. It can be installed on both desktop and mobile devices and can be used **completely offline** in areas with low or no internet connectivity.

## Features
* **Offline Access:** Content can be accessed without an active internet connection.
* **Text-to-Speech Accessibility:** The app can read lessons out loud for visually impaired users.
* **Bilingual:** Supports switching between English and Kinyarwanda.
* **Admin Dashboard:** An integrated dashboard to update lessons and doctor data securely.
* **Help & Support:** Directly connect to youth-friendly partner doctors through SMS or phone calls.

# How to Test the Offline Mode
Because this application is a Progressive Web App (PWA) with a functioning Service Worker, you can test it offline by following these steps using any browser.

### 1. Run the App Locally
Use the VS Code **Live Server** extension (or any local server) to serve the app locally at `http://127.0.0.1:5500/` or `http://localhost:5500/`.

### 2. Verify PWA Registration
1. Once the site is loaded at `http://localhost:5500`, Press ( `Ctrl+Shift+I`) to open Developer Tools.
2. Click the **Application** tab at the top.
3. On the left sidebar, click **Manifest**. Ensure the app's metadata and icons are successfully displaying.
4. On the left sidebar, click **Service workers**. You should see a green circle and the text `Activated and is running` next to `sw.js`.

### 3. Disconnect From the Internet
There are two ways to do this to test the app:
* **Option A (DevTools Simulation):** Stay on the **Service workers** tab in Developer Tools and check the **Offline** checkbox. 
* **Option B:** Turn off your computer's Wi-Fi to test if you can get see the apps content offline.


### Application deployed link : https://hervoice-xi.vercel.app/


## 🛠️ Built With
* HTML5
* Vanilla CSS
* Vanilla JavaScript
* Service Workers & Manifest API (PWA functionality)
