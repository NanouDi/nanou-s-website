
function YouTubeEmbed({ url }) {
    if (!url) return null;

    function getVideoId(value) {
        try {
            const parsed = new URL(value);

            if (parsed.hostname === "youtu.be") {
                return parsed.pathname.slice(1);
            }

            if (
                parsed.hostname === "www.youtube.com" ||
                parsed.hostname === "youtube.com" ||
                parsed.hostname === "m.youtube.com"
            ) {
                if (parsed.pathname === "/watch") {
                    return parsed.searchParams.get("v");
                }

                const match = parsed.pathname.match(
                    /^\/(embed|shorts)\/([^/]+)/
                );

                return match ? match[2] : null;
            }

            return null;
        } catch {
            return null;
        }
    }

    const videoId = getVideoId(url);

    if (!videoId) return null;

    return (
        <div className="youtube-embed">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="YouTube video player"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}

export default YouTubeEmbed;

