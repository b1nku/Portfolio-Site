# Portfolio-Site
A vite+react portfolio site with Three.js functionality and a MongoDB + API based weather app.

Frontend:
Bootstrap for visuals
React for functionality

Backend:
MongoDB for data management
OpenWeatherAPI for getting current weather based on location.

Project setup:
Built version is live on killmouski.com -> this version talks to a MongoDB Atlas cluster
Dev version is on the master branch on this repository:

Master-branch:
client and server folder for front and backend.

Client:
Killmouskiweb project-folder containing the vite+react project.
Static pages and images are stored in the public folder, these static .html pages are not used.
Src folder contains the individual react components and pages.
Some react pages contain unique functionality, eg. Three.js gimmicks and weather app.
Routing is done via the react router package in App.jsx.

Server:
server.js file containing the node express server.
