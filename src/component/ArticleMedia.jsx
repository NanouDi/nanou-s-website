
function ArticleMedia({ media }) {
    return (
        <div className="article-media">
            {media.map((item, index) => (
                <div className="media-item" key={`${item.src}-${index}`}>
                    {item.type === "image" ? (
                        <img
                            src={item.src}
                            alt={item.alt || "Article photo"}
                            loading="lazy"
                        />
                    ) : item.type === "video" ? (
                        <video
                            src={item.src}
                            controls
                            preload="metadata"
                        />
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export default ArticleMedia;
