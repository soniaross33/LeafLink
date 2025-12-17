(Part 1) - Instructions to run the program:

Download the project files to your computer.

Ensure all project files (index.html, style.css, app.js, scrollFade.js, and the images folder) are in the same directory.

The project uses Firebase, so you must run it using a local server.

To do this, first install VS Code. Then in VS Code, install the Live Server extension by following these steps:
    (a) Open Visual Studio Code.
    (b) Click the Extensions icon in the left sidebar (it looks like four squares)
    (c) In the search bar at the top, type Live Server.
    (d) Find the extension named “Live Server” by Ritwick Dey.
    (e) Click Install.
    (f) Once installed, restart VS Code.

Now open VS code and open the project folder.

Right-click index.html and select "Open with Live Server".

The app will open in your browser and automatically load sitter requests data from Firebase. Success!



(Part 2) - A brief description of the tools used:

HTML: Defines the structure of the screen's user interface.

CSS: Handles the layout, styling, and animations to mimic an iPhone screen.

JavaScript: Handles the scrolling behavior of the screen and gets the backend data (from Firebase) to populate values of html/css.

Firebase Firestore: Stores and retrieves sitter request data in real time.

Firebase Web SDK: Connects the frontend to the Firestore database.

VS Code Live Server: Used to serve the project locally so ES modules function correctly.



(Part 3) - Acknowledgments for any third-party code, libraries, or other resources:


# TODO