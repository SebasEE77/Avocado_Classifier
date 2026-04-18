# Avocado_Classifier
Web interface to classify the ripeness stage of Hass avocados and predict their remaining shelf life in days using deep learning models.

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation
Clone the repository and navigate to the project folder using
```
git clone "repository-url" 
```
Then, install the dependencies:
```
npm install
```
### Running
To run the app normally use
```
npm run dev
```
This starts the server at http://localhost:5173/inicio.

#### Viewing the app on mobile (Same WiFi network)
To access the app from mobile devise on the same network, run the app but with the --host flag:
```
npm run dev -- --host
```
The terminal will show something like this:
```
  ➜  Local:   http://localhost:5173/inicio
  ➜  Network: http://192.168.X.X:5173/inicio
  ➜  Network: http://192.168.1.X:5173/inicio
  ➜  Network: http://192.168.X.X:5173/inicio
```
Copy the third option and open it in your phone's browser. The device must be connected to the same WiFi network as your computer.


