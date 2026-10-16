
function ArticleMedia({ media }) {
    if (!media || media.length === 0) {
        return null;
    }

    return (
        <div className={`article-media media-count-${Math.min(media.length, 4)}`}>
            {media.map((item, index) => (
                <div
                    className="media-item"
                    key={`${item.src}-${index}`}
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.src}
                            alt={item.alt || 'Article photo'}
                            loading="lazy"
                        />
                    ) : item.type === 'video' ? (
                        <video
                            src={item.src}
                            controls
                            playsInline
                            preload="metadata"
                        />
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export default ArticleMedia;
