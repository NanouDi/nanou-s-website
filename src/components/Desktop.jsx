import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import './Desktop.css';
import ArticleMedia from './ArticleMedia';
import YouTubeEmbed from './YouTubeEmbed';
import { getArticles } from '../sanityQueries';

const desktopItems = [
    { id: 'about', icon: '✨', label: 'About Me' },
    { id: 'blog', icon: '💿', label: 'Unhinged Topic' },
    { id: 'photos', icon: '📸', label: 'Photos' },
    { id: 'prettiest', icon: '💅', label: 'prettiest' },
    { id: 'projects', icon: '🕹️', label: 'Projects' },
    { id: 'favs', icon: '💌', label: 'Favs' },
    { id: 'contact', icon: '🤳🏽', label: 'Socials' },
];

const favorites = {
    albums: [
        {
            title: 'Destiné Supremacy',
            creator: 'Aya Nakamura',
            note: "I don't even have to explain, my pretty girls know",
            details: "Fav songs: DIS MOI ft Shenseea, J'AI VU, BUENO",
            url: 'https://open.spotify.com/intl-fr/album/7Ms8YCAXjDFwICEdVlbs5I',
            img: 'https://i.pinimg.com/736x/ee/7e/94/ee7e944dd4df7555fbf65de741903ed2.jpg',
            youtubeUrl: 'https://www.youtube.com/watch?v=2ssEuCtAD9g&list=RD2ssEuCtAD9g&start_radio=1',
        },
    ],

    books: [
        {
            title: 'One Last Job',
            creator: 'Anise Starre',
            img: 'https://i.pinimg.com/1200x/be/47/9b/be479b7c624f7b87461a91cb37448572.jpg',
            note: 'MAN.',
            details: 'WORKPLACE ROMANCE 101, and we love it',
            url: 'https://www.amazon.ca/One-Last-Job-workplace-contemporary/dp/B0C9G8QGFS',
        },
    ],

    youtubers: [
        {
            title: 'FEMME EBENE',
            creator: 'She literally raised me',
            note: 'Portée disparue depuis le 7 septembre 2025. PLEASE FIFI COME BACK',
            url: 'https://www.youtube.com/channel/UCDmQOkiHpTESdd4hVe5bxiw',
            youtubeUrl: 'https://youtu.be/g_lHnmuP6lc',
        },
    ],

    influencers: [
        {
            title: 'THE GIRL WITH THE LIST',
            creator: 'abigailprtr',
            note: 'Creative, funny, personality I love, fuck them kids',
            url: 'https://www.instagram.com/abigailprtr/',
        },
    ],
};

const favoriteLabels = {
    albums: '🎧 Albums',
    books: '📚 Books',
    youtubers: '▶️ YouTubers',
    influencers: '💋 Influencers',
};
const portableTextComponents = {
    types: {
        image: ({ value }) => {
            const imageUrl = value?.asset?.url;

            if (!imageUrl) return null;

            return (
                <figure>
                    <img
                        className="article-content-image"
                        src={imageUrl}
                        alt={value.alt || ''}
                    />
                    {value.caption && (
                        <figcaption>{value.caption}</figcaption>
                    )}
                </figure>
            );
        },

        file: ({ value }) => {
            const fileUrl = value?.asset?.url;

            if (!fileUrl) return null;

            return (
                <p>
                    <a
                        href={fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        download={value.asset.originalFilename}
                    >
                        📎 {value.caption || value.asset.originalFilename || 'Open attachment'}
                    </a>
                </p>
            );
        },

        noteList: ({ value }) => (
            <ul className="article-note-list">
                {(value.items || []).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ),

        ranking: ({ value }) => (
            <div className="article-ranking">
                {(value.tiers || []).map((tier, index) => (
                    <div className="ranking-tier" key={index}>
                        <strong className="ranking-tier-label">
                            {tier.label}
                        </strong>
                        <span>{tier.items}</span>
                    </div>
                ))}
            </div>
        ),
    },
};

function Desktop() {
    const [activeWindow, setActiveWindow] = useState(null);
    const [activeFavCategory, setActiveFavCategory] = useState('albums');
    const [articles, setArticles] = useState([]);
    const [articlesLoading, setArticlesLoading] = useState(true);
    const [articlesError, setArticlesError] = useState('');

    useEffect(() => {
        getArticles()
            .then(setArticles)
            .catch((error) => {
                console.error('Failed to load Sanity articles:', error);
                setArticlesError('Unable to load posts right now.');
            })
            .finally(() => setArticlesLoading(false));
    }, []);
    function openWindow(id) {
        setActiveWindow(id);
    }

    function closeWindow() {
        setActiveWindow(null);
    }

    function renderBlog() {
        if (articlesLoading) {
            return <p>Loading my digital diary... ♡</p>;
        }

        if (articlesError) {
            return <p>{articlesError}</p>;
        }

        return (
            <>
                <h2>Latest entries ♡</h2>
                <p>Welcome to my very unserious digital diary.</p>

                {articles.length === 0 && (
                    <p>No posts yet. Time to publish something in Sanity! ♡</p>
                )}

                {articles.map((article, index) => (
                    <article className="post" key={article._id}>
                    <span>
                        {String(index + 1).padStart(3, '0')}
                        {' // '}
                        {article.category || 'LIFE'}
                    </span>

                        <h3>{article.title}</h3>

                        {article.publishedAt && (
                            <p>
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </p>
                        )}

                        {(article.excerpt || article.text) && (
                            <p>{article.excerpt || article.text}</p>
                        )}

                        {article.coverImage?.asset?.url && (
                            <img
                                className="article-cover"
                                src={article.coverImage.asset.url}
                                alt={article.title}
                            />
                        )}

                        {article.content?.length > 0 && (
                            <div className="article-body">
                                <PortableText
                                    value={article.content}
                                    components={portableTextComponents}
                                />
                            </div>
                        )}

                        {article.media?.length > 0 && (
                            <ArticleMedia media={article.media} />
                        )}
                    </article>
                ))}
            </>
        );
    }

    function renderFavorites() {
        const selectedFavorites = favorites[activeFavCategory] || [];

        return (
            <>
                <h2>Nanou's hall of fame ♡</h2>
                <p>
                    Things I love, people I adore and media
                    that lives rent-free in my head.
                </p>

                <div className="fav-tabs" aria-label="Favorite categories">
                    {Object.entries(favoriteLabels).map(([id, label]) => (
                        <button
                            key={id}
                            type="button"
                            className={`fav-tab ${
                                activeFavCategory === id ? 'active' : ''
                            }`}
                            onClick={() => setActiveFavCategory(id)}
                            aria-pressed={activeFavCategory === id}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="fav-list">
                    {selectedFavorites.map((fav, index) => (
                        <article
                            className="fav-card"
                            key={`${fav.title}-${index}`}
                        >
                            <span className="fav-type">
                                {favoriteLabels[activeFavCategory]}
                            </span>

                            <h3>{fav.title}</h3>
                            <p>{fav.creator}</p>

                            {fav.note && <p>{fav.note}</p>}
                            {fav.details && <p>{fav.details}</p>}

                            {fav.img && (
                                <img
                                    src={fav.img}
                                    alt={fav.title}
                                    className="fav-image"
                                />
                            )}

                            {fav.youtubeUrl && (
                                <YouTubeEmbed url={fav.youtubeUrl} />
                            )}

                            {fav.url && (
                                <a
                                    href={fav.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Check it out ↗
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </>
        );
    }

    const windowTitles = {
        about: 'ABOUT_NANOU',
        blog: 'UNHINGED_TOPICS',
        photos: 'PHOTO_ARCHIVE',
        prettiest: 'PRETTIEST.exe',
        projects: 'PROJECTS',
        favs: 'NANOU_FAVS',
        contact: 'SOCIALS',
    };

    function renderWindowContent() {
        switch (activeWindow) {
            case 'about':
                return (
                    <>
                        <h2>Hey, welcome to my world ♡</h2>
                        <p>
                            I'm Nanou, a computer science student,
                            creative soul and wannabe icon.
                        </p>
                        <p>
                            My little corner of the internet is where
                            technology meets creativity, random obsessions
                            and all the crafts I keep getting into.
                        </p>
                    </>
                );

            case 'blog':
                return renderBlog();

            case 'photos':
                return (
                    <>
                        <h2>My visual diary 📸</h2>
                        <p>Memories, outfits, places and random moments.</p>
                    </>
                );

            case 'prettiest':
                return (
                    <>
                        <h2>just cause I'm narcissistic ♡</h2>
                        <img
                            className="profile-photo"
                            src="/IMG_1939.PNG"
                            alt="A photo of Nanou"
                        />
                    </>
                );

            case 'projects':
                return (
                    <>
                        <h2>Things I've made</h2>

                        <article className="post">
                            <span>001 // WEBSITE</span>
                            <h3>
                                Crochet website (from back in the days) — DO NOT JUDGE{' '}
                                <a
                                    href="https://lesressourcescrochet.neocities.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Link ↗
                                </a>
                            </h3>
                            <p>
                                ⭐⭐⭐☆☆ 3 stars, thanks to{' '}
                                <a
                                    href="https://www.notion.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Notion
                                </a>
                                {' '}and{' '}
                                <a
                                    href="https://www.w3schools.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    W3Schools
                                </a>.
                            </p>
                        </article>

                        <article className="post">
                            <span>002 // WEBSITE</span>
                            <h3>
                                MNU Simulation Training Website{' '}
                                <a
                                    href="https://courslibmnu2024.neocities.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Link ↗
                                </a>
                            </h3>
                            <p>Lowkey the same idea, but more professional.</p>
                        </article>

                        <article className="post">
                            <span>003 // PROM DRESS</span>
                            <h3>Prom dress creation</h3>
                            <p>
                                A dress made with love, a lot of patience and tears
                                (sweat too).
                            </p>
                        </article>

                        <article className="post">
                            <span>004 // POWERPUFF SWEATER</span>
                            <h3>Powerpuff-inspired sweater</h3>
                            <p>A handmade craft project.</p>
                        </article>

                        <article className="post">
                            <span>005 // BDAY OUTFIT 2024</span>
                            <h3>Birthday outfit 2024</h3>
                            <p>An outfit I put together myself.</p>
                        </article>

                        <article className="post">
                            <span>006 // BDAY OUTFIT 2025</span>
                            <h3>Birthday outfit 2025</h3>
                            <p>A new year, a new look.</p>
                        </article>

                        <article className="post">
                            <span>007 // BDAY OUTFIT 2026</span>
                            <h3>Hello Kitty birthday look</h3>
                            <p>Hello Kitty-themed hat and colorful shirt.</p>
                        </article>
                    </>
                );

            case 'favs':
                return renderFavorites();

            case 'contact':
                return (
                    <>
                        <h2>Let's connect 💌</h2>
                        <p>Want to collaborate or say hello? I don't bite 🤣</p>

                        <p>
                            <a
                                href="https://www.instagram.com/awesome_nanou/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram ↗
                            </a>
                        </p>

                        <p>
                            <a
                                href="https://www.tiktok.com/@awsome_nanou"
                                target="_blank"
                                rel="noreferrer"
                            >
                                TikTok ↗
                            </a>
                        </p>

                        <p>
                            <a
                                href="https://www.patreon.com/c/NanouDi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Patreon ↗
                            </a>
                        </p>
                    </>
                );

            default:
                return null;
        }
    }

    return (
        <main className="desktop">
            <div className="desktop-top">
                <span className="system-status">● SYSTEM ONLINE</span>
                <span>NANOU_OS // VERSION 1.0</span>
            </div>

            <header className="desktop-hero">
                <p className="eyebrow">XOXO GOSSIP GIRLS</p>
                <h1>NANOU</h1>
                <p className="hero-subtitle">
                    A little bit of chaos. A lot of vibes.
                </p>
                <div className="hero-decoration">
                    ✦⋆｡°✩♡✩°｡⋆✦
                </div>
            </header>

            <section className="desktop-icons">
                <p className="section-label">
                    // SELECT AN HOT TOPIC (Like u girl 💕)
                </p>

                <div className="icon-grid">
                    {desktopItems.map((item) => (
                        <button
                            className="desktop-icon"
                            key={item.id}
                            onClick={() => openWindow(item.id)}
                            aria-label={`Open ${item.label}`}
                        >
                            <span className="icon-picture">{item.icon}</span>
                            <span className="icon-label">{item.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {activeWindow && (
                <section
                    className="app-window"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="window-title"
                >
                    <div className="window-titlebar">
                        <span id="window-title">
                            {windowTitles[activeWindow]}
                        </span>

                        <button
                            className="window-close"
                            onClick={closeWindow}
                            aria-label="Close window"
                        >
                            ×
                        </button>
                    </div>

                    <div className="window-content">
                        {renderWindowContent()}
                    </div>

                    <div className="window-footer">
                        <span>✦ NANOU_OS</span>
                        <button onClick={closeWindow}>CLOSE WINDOW</button>
                    </div>
                </section>
            )}

            <footer className="taskbar">
                <button
                    className="start-button"
                    onClick={() => setActiveWindow('about')}
                >
                    ✦ START
                </button>

                <span className="taskbar-message">
                    {activeWindow
                        ? `RUNNING: ${windowTitles[activeWindow]}`
                        : 'READY FOR YOUR NEXT ADVENTURE'}
                </span>

                <span className="taskbar-time">♡ 2000 FOREVER</span>
            </footer>

            <div className="desktop-sparkles" aria-hidden="true">
                <span>✦</span>
                <span>✧</span>
                <span>⋆</span>
                <span>✦</span>
                <span>✧</span>
                <span>★</span>
            </div>
        </main>
    );
}

export default Desktop;
