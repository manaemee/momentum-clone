const today_song = [
    {
        song: "HONNE",
        singer: "free love 🎧",
    },
    {
        song: "Anson Seabra",
        singer: "Hindenburg Lover 🎧",
        
    },
    {
        song: "HONNE",
        singer: "la la la that's how it goes 🎧",
    },
    {
        song: "LANY",
        singer: "nobody else 🎧",
    },
    {
        song: "Rhye",
        singer: "The Fall 🎧",
    },
    {
        song: "Daniel Caesar",
        singer: "Blessed 🎧",
    }
  ];
  
  const songTitle = document.querySelector("#today-song span:first-child");
  const songSubtitle = document.querySelector("#today-song span:last-child");
  
  const randomSong = today_song[Math.floor(Math.random()*today_song.length)];


  songTitle.innerText = randomSong.song;
  songSubtitle.innerText = randomSong.singer;