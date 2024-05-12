function searchArtist() {
    const searchInput = document.getElementById('searchInput').value;
    const baseUrl = 'https://musicbrainz.org/ws/2/artist/?query=';
    const format = '&fmt=json';

    fetch(`${baseUrl}${encodeURIComponent(searchInput)}${format}`)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching artist data:', error));
}

function displayResults(data) {
    const artistResults = document.getElementById('artistResults');
    artistResults.innerHTML = '';

    if (data.artists && data.artists.length > 0) {
        data.artists.forEach(artist => {
            const artistEntry = document.createElement('div');
            const artistLink = document.createElement('a');
            artistLink.textContent = artist.name;
            artistLink.href = '#';
            artistLink.classList.add('artist-name');

            const albumsContainer = document.createElement('div');
            albumsContainer.style.display = 'none';

            const albumTable = document.createElement('table');
            albumTable.className = 'table';
            albumTable.innerHTML = `<thead><tr><th>Release Date</th><th>Album Title</th></tr></thead><tbody></tbody>`;
            albumsContainer.appendChild(albumTable);

            artistLink.addEventListener('click', (event) => {
                event.preventDefault(); 
                const isVisible = albumsContainer.style.display !== 'none';
                if (!isVisible) {
                    fetchAlbums(artist.id, albumTable.querySelector('tbody'));
                }
                albumsContainer.style.display = isVisible ? 'none' : 'block';
            });

            artistEntry.appendChild(artistLink);
            artistEntry.appendChild(albumsContainer);
            artistResults.appendChild(artistEntry);
        });
    } else {
        artistResults.textContent = 'No artists found.';
    }
}


function fetchAlbums(artistId, tbody) {
    const baseUrl = 'https://musicbrainz.org/ws/2/release-group/?artist=';
    const format = '&fmt=json';

    fetch(`${baseUrl}${artistId}${format}`)
        .then(response => response.json())
        .then(data => {
            displayAlbums(data['release-groups'], tbody)
        })
        .catch(error => console.error('Error fetching album data:', error));
}

function displayAlbums(albums, tbody) {
    tbody.innerHTML = ''; 

    if (albums && albums.length > 0) {
        albums.forEach(album => {
            const row = document.createElement('tr');
            const releaseDateCell = document.createElement('td');
            releaseDateCell.textContent = album['first-release-date'] || 'Unknown';
            const albumNameCell = document.createElement('td');
            albumNameCell.textContent = album.title;
            row.appendChild(releaseDateCell);
            row.appendChild(albumNameCell);
            tbody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = 'No albums found for this artist.';
        cell.colSpan = 2;
        row.appendChild(cell);
        tbody.appendChild(row);
    }
}
