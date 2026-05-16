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
### Backend Setup
The backend runs on Google Colab and uses the trained model weights stored in Google Drive. Before running the frontend, you need to start the backend first.
1. Open the notebook Proyecto_Modelos_Definitivos.ipynb in Google Colab.
2. Make sure the model weights are stored in your Google Drive.
3. Go to the "Conexión con la Interfaz" section on Google Colab and run that cell. It will install the required dependencies, load both models and start the FastAPI server exposed through ngrok.
4. Once the cell finishes loading, it will print a public URL like this:
```
Endpoint: https://xxxx-xxxx-xxxx.ngrok-free.dev
```
5. Copy that URL and paste it in the .env file at the root of the frontend project:
```
VITE_BACKEND_URL=https://xxxx-xxxx-xxxx.ngrok-free.dev
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
