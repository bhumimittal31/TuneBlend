// backend/server.js
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const request = require('request');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const { error } = require('console');
const cors = require('cors');
const path = require('path'); //change
const {exec} = require('child_process');//change

const client_id = process.env.REACT_APP_CLIENT_ID; // Your client id
const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
const redirect_uri = 'http://localhost:5000/callback'; // Your redirect uri

const app = express();
const stateKey = 'spotify_auth_state';
const upload = multer({dest : 'uploads/'});

app.use(cors({
    origin: 'https://bhumimittal31.github.io'
}));

app.use(cookieParser());
app.use(express.static('public'));

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email playlist-read-private';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        const queryParams = querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        });

        res.redirect(`http://localhost:3000/?${queryParams}`);
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.post('/upload', upload.fields([{name : 'video'}, {name: 'music'}]), (req,res)=>{
  //console.log('Received files:', req.files);
    
    if (!req.files.video || !req.files.video[0] || !req.files.music || !req.files.music[0]) {
        return res.status(400).send('Both video and music files are required');
    }

  // const videoStream = req.files.video[0].size;
  // const musicStream = req.files.music[0].buffer;
  const outputPath = `processed_${Date.now()}.mp4`;
  console.log(req.files.video[0].path); //change
  console.log(req.files.music[0].path);//change

  console.log('Processing video and music...');

exec(`ffmpeg -i ${req.files.video[0].path} -i ${req.files.music[0].path} -c copy -map 0:v:0 -map 1:a:0 ${outputPath}`,(err)=>{
  if(err) {console.log(err);}
  else{
    console.log("video merged");
    res.download(outputPath,()=>{
      console.log("Video downloaded");
    })
  }
})

  // ffmpeg(videoStream).addInput(musicStream).on('end' , ()=>{
  //   console.log('Processing completed, sending file...');
  //   res.download(outputPath , (err) =>{
  //       if(err) {console.error('Error during download:' , err);}
  //       // fs.unlink(videoPath,()=>{});
  //       // fs.unlink(musicPath,()=>{});
  //       fs.unlink(outputPath,()=>{});
  //   });
  // }).on('error' , (err) =>{
  //   console.error('Error during processing:' , err);
  //   res.status(500).send('Error during processing');
  // }).save(outputPath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
