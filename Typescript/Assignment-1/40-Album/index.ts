interface Album {
  artistName: string;
  albumTitle: string;
  numberOfTracks?: number;
}

const makeAlbum = (
  artistName: string,
  albumTitle: string,
  numberOfTracks?: number
): Album => {
  return numberOfTracks
    ? { artistName, albumTitle, numberOfTracks }
    : { artistName, albumTitle };
};

console.log(makeAlbum("Atif Aslam", "Meri Kahani"));
console.log(makeAlbum("Masty", "Ali Zafar"));
console.log(makeAlbum("Ya Habib", "The Sabri Brothers"));
console.log(makeAlbum("The Individual Legend", "Nusrat Fateh Ali Khan", 8));
