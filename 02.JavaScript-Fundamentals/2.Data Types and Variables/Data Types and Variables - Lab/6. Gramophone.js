function test(bandName, album, albumSongName) {
  let firstString = bandName.length;
  let secondString = album.length;
  let thirdString = albumSongName.length;
  let fulRotation = 2.5;

  let duration = (secondString * firstString * thirdString) / 2 / fulRotation;
  console.log(`The plate was rotated ${Math.ceil(duration)} times.`);
}
