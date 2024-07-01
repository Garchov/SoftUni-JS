function personInfo(input) {
    class Song {
      constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
      }
    }
  
    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
  
    for (let i = 0; i < numberOfSongs; i++) {
      let [type, name, time] = input[i].split("_");
      let song = new Song(type, name, time);
      songs.push(song);
    }
  
    if (typeSong === "all") {
      songs.forEach((i) => console.log(i.name));
    } else {
      let filtered = songs.filter((i) => i.type === typeSong);
      console.log(filtered);
      filtered.forEach((i) => console.log(i.name));
    }
  }
  personInfo([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite",
  ]);
  personInfo([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater",
  ]);
  personInfo([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);


  // function playList(array) {
  //   let songNumbers = array.shift();
  //   let lastCommand = array.pop();
  //   let newPlaylist = [];
  
  //   class Song {
  //     constructor(typeList, name, time) {
  //       this.type = typeList;
  //       this.name = name;
  //       this.time = time;
  //     }
  //   }
  
  //   for (let i = 0; i < array.length; i++) {
  //     let [type, name, time] = array[i].split("_");
  //     let song = new Song(type, name, time);
  //     newPlaylist.push(song);
  //   }
  
  //   if (lastCommand === "all") {
  //     newPlaylist.forEach((song) => console.log(song.name));
  //   } else {
  //     let filtered = newPlaylist.filter((song) => song.type === lastCommand);
  //     filtered.forEach((song) => console.log(song.name));
  //   }
  // }
  
  // playList([
  //   3,
  //   'favourite_DownTown_3:14',
  //   'favourite_Kiss_4:16',
  //   'favourite_Smooth Criminal_4:01',
  //   'favourite'
  // ]);
  // playList([4,
  //   'favourite_DownTown_3:14',
  //   'listenLater_Andalouse_3:24',
  //   'favourite_In To The Night_3:58',
  //   'favourite_Live It Up_3:48',
  //   'listenLater']
  //   );
  //   playList([2,
  //     'like_Replay_3:15',
  //     'ban_Photoshop_3:48',
  //     'all']);