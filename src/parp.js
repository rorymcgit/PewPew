var soundFiles = ['sharp-fart.wav', 'poop-splat.wav', 'fart-trail.wav'];
var loadedSounds = [];

function loadSounds() {
  for (var i = 0; i < soundFiles.length; i++) {
    loadSound(soundFiles[i]);
  }
}

function loadSound(file) {
  var sound = new Audio('https://s3-eu-west-1.amazonaws.com/my-fart-bucket/' + file);
  loadedSounds.push(sound);
}

chrome.tabs.onRemoved.addListener(function (_, _) {
  'https://s3-eu-west-1.amazonaws.com/my-fart-bucket/sharp-fart.wav'.play();
  var rand = Math.floor(Math.random() * (loadedSounds.length + 2)); // Add 2 so rand isn't always in index range

  if (loadedSounds[rand]) {
    loadedSounds[rand].play();
  }
});

loadSounds();
