# express-with-alexa-app

There is two version of this project.

### Branch master:
Using alexa-app to handle AWS alexa's request, and deal with the request by mqtt.

### Branch openHAB:
In this branch, we use alexa-app and express to handle AWS alexa's request, actually express is willing to provide all-intent handle.
Besides we use API of openHAB to communicate with mqtt server.

# Start project

### master
```=bash
git clone https://Hakalon@git.ntust.ml/Hakalon/express-with-alexa-app.git
cd express-with-alexa-app // or your project directory name
npm install // or if you have yarn, use yarn install
node index
```

### openHAB
```=bash
git clone https://Hakalon@git.ntust.ml/Hakalon/express-with-alexa-app.git -b openHAB
cd express-with-alexa-app // or your project directory name
npm install --production // or if you have yarn, use yarn install
npm start
```