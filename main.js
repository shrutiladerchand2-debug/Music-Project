 
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("fav-icon")) return;

    const song = e.target.dataset.song;
    const artist = e.target.dataset.artist;
    
    const index = favourites.findIndex(
        item => item.song === song && item.artist === artist
    );

    if (index === -1) {
        // add to favourites
        favourites.push({ song, artist, image:e.target.dataset.image });
        e.target.classList.remove("fa-regular");
        e.target.classList.add("fa-solid");
        e.target.style.color = "red";
    } else {
        // remove from favourites
        favourites.splice(index, 1);
        e.target.classList.remove("fa-solid");
        e.target.classList.add("fa-regular");
        e.target.style.color = "";
    }

    // save the updated array to localStorage
    localStorage.setItem("favourites", JSON.stringify(favourites));
});
 

  const searchInput = document.getElementById("searchInput");
  const items = document.getElementsByClassName("song-card");

  searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const text = items[i].innerText.toLowerCase();
      items[i].style.display = text.includes(value) ? "block" : "none";
    }
  });
document.addEventListener("DOMContentLoaded", function() {
  const artistSearch = document.getElementById("artistSongSearch");
  const artistSongs = document.getElementsByClassName("artist-song");

  if (artistSearch && artistSongs.length > 0) {
    artistSearch.addEventListener("input", function () {
      const value = artistSearch.value.toLowerCase();

      for (let i = 0; i < artistSongs.length; i++) {
        const text = artistSongs[i].innerText.toLowerCase();
        artistSongs[i].style.display = text.includes(value) ? "" : "none";
      }
    });
  }
});
