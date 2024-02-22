var makeAlbum = function (artistName, albumTitle, numberOfTracks) {
    return numberOfTracks
        ? { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks }
        : { artistName: artistName, albumTitle: albumTitle };
};
console.log(makeAlbum("Atif Aslam", "Meri Kahani"));
console.log(makeAlbum("Masty", "Ali Zafar"));
console.log(makeAlbum("Ya Habib", "The Sabri Brothers"));
console.log(makeAlbum("The Individual Legend", "Nusrat Fateh Ali Khan", 8));
