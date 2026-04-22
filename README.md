# Avocado_Classifier
Web interface to classify the ripeness stage of Hass avocados and predict their remaining shelf life in days using deep learning models.

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher
- ngrok account (free) - sign up at ngrok.com

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
To run the website normally use
```
npm run dev
```
This starts the server at http://localhost:5173/inicio.

#### Sharing the app publicly
If you need to access the website from other devices or share it over a public network, use ngrok.
1. Install and configure ngrok
```
npm install ngrok
```
Add your ngrok authtoken (get it from ngrok dashboard):
```
npx ngrok config add-authtoken <your-authtoken>
```
2. Run the website
   
In one terminal, run it normally:
```
npm run dev
```
3. Start the ngrok tunnel

In a second terminal, inside the project folder run:
```
npx ngrok http 5173
```
ngrok will show a public URL like this one:
```
Forwarding   https://xxxx-xxxx-xxxx.ngrok-free.dev -> http://localhost:5173
```
Copy the URL and open it on any device, regardless of the network they are on.
