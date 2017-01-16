var playlist = {
  Radiohead: 'Kid A',
  Radiohead: 'Everything In Its Right Place'
};

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
};

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
};
