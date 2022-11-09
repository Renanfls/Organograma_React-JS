function Timeline(props) {
    const playlistNames = Object.keys(props.playlists); 

    return (
        <div>
            {playlistNames.map((playlistName) => { // Map do OBJ das playlists
                const videos = props.playlists[playlistName] // ['jogos', 'front-end']
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => { // Map do OBJ dos videos
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default Timeline;