async function loadConfig() {
    const response = await fetch('../config/credentials.json');
    return await response.json();
}

async function loadSearchQueries() {
    const response = await fetch('../config/search_queries.txt');
    return await response.text().then(text => text.split('\n').filter(query => query.trim() !== ''));
}

async function fetchYouTubeResults(apiKey, query) {
    const maxResults = 5; // Adjust as needed
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${apiKey}&maxResults=${maxResults}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.items) {
            return data.items.map(item => ({
                title: item.snippet.title,
                link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                platform: 'YouTube'
            }));
        }
        return [];
    } catch (error) {
        console.error(`Error fetching from YouTube with query "${query}":`, error);
        return [];
    }
}

// --- SPOTIFY API INTEGRATION (Simplified for now - OAuth flow is complex client-side) ---
async function fetchSpotifyResults(clientId, clientSecret, query) {
    // In a real scenario, you'd need to handle Spotify's OAuth flow.
    // For this simplified example, we'll just return a placeholder.
    console.warn("Spotify API integration requires a server-side component or implicit grant flow for client-side, which is more complex. Skipping actual API call for this example.");
    return [{
        title: `Spotify Result for "${query}" (Placeholder)`,
        link: 'https://www.spotify.com/',
        platform: 'Spotify'
    }];
}

function displayPlaylist(songs) {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';
    if (songs.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No songs found.';
        playlistElement.appendChild(li);
        return;
    }
    songs.forEach(song => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = song.link;
        a.textContent = `${song.title} (${song.platform})`;
        a.target = '_blank'; // Open in a new tab
        li.appendChild(a);
        playlistElement.appendChild(li);
    });
}

async function main() {
    const config = await loadConfig();
    const searchQueries = await loadSearchQueries();
    const allSongs = [];

    for (const query of searchQueries) {
        const youtubeSongs = await fetchYouTubeResults(config.youtubeApiKey, query);
        allSongs.push(...youtubeSongs);

        // For a full Spotify integration, you'd need to handle the OAuth token retrieval.
        // This simplified version just adds a placeholder.
        const spotifySongs = await fetchSpotifyResults(config.spotifyClientId, config.spotifyClientSecret, query);
        allSongs.push(...spotifySongs);
    }

    // Basic way to shuffle the combined results
    const shuffledSongs = allSongs.sort(() => Math.random() - 0.5);
    displayPlaylist(shuffledSongs);
}

document.addEventListener('DOMContentLoaded', main);