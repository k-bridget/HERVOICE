# HERVOICE

HERVOICE is an offline education and communication platform on sexual reproductive health for adolescents with disabilities in Rwanda.

**Overview**

HERVOICE is a Progressive Web App (PWA) built to address the need for accessible sexual reproductive health resources. It can be installed on both desktop and mobile devices and can be used completely offline in areas with low or no internet connectivity.

**Features**

Offline Access: Content can be accessed without an active internet connection.

Text-to-Speech Accessibility: The app can read lessons out loud for visually impaired users.

Bilingual: Supports switching between English and Kinyarwanda.

Admin Dashboard: An integrated dashboard to update lessons and doctor data securely.

Help & Support: Directly connect to youth-friendly partner doctors through SMS or phone calls.

# How to run the app

Clone the repository: git clone: https://github.com/k-bridget/HERVOICE.git

**Navigate to the project folder**

cd HERVOICE

Open the folder in vscode.

Right-click on the index.html file and click "Open with Live Server".The application will automatically open in your default browser at http://127.0.0.1:5500

OR

**python -m http.server 8000**. Then, open your browser and navigate to http://localhost:8000.

**Verify PWA Registration**
   
Once the site is loaded at http://localhost:5500, Press ( Ctrl+Shift+I) to open Developer Tools.

Click the Application tab at the top.

On the left sidebar, click Manifest. Ensure the app's icons are displayed.

On the left sidebar, click Service workers.

Disconnect From the Internet

There are two ways to do this to test the app:

Option A : Stay on the Service workers tab in Developer Tools and check the Offline checkbox.

Option B: Turn off your computer's Wi-Fi to test if you can see the app's content offline.

**Application deployed link** : https://hervoice-xi.vercel.app/

**Built With**
HTML5

Vanilla CSS

Vanilla JavaScript

Service Workers & Manifest API (PWA functionality)
