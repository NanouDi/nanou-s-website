
import { useState } from 'react';
import './Desktop.css';
import ArticleMedia from './ArticleMedia';

const desktopItems = [
    { id: 'about', icon: '✨', label: 'About Me' },
    { id: 'blog', icon: '💿', label: 'Unhinged Topic' },
    { id: 'photos', icon: '📸', label: 'Photos' },
    { id: 'prettiest', icon: '💅', label: 'prettiest' },
    { id: 'projects', icon: '🕹️', label: 'Projects' },
    { id: 'favs', icon: '💌', label: 'Favs' },
    { id: 'contact', icon: '💌', label: 'Socials' },
];

// Add your own articles here.
const articles = [
    {
        id: 1,
        category: 'LIFE',
        title: 'Welcome to my digital diary',
        text: 'Thoughts, stories and little life updates.',
        media: [
        ],
    },
    {
        id: 2,
        category: 'TECH',
        title: 'Building my own website',
        text: 'My journey into the world of web development.',
        media: [],
    },
];

// Edit these lists to add your personal favourites.
const favorites = {
    albums: [
        {
            title: 'Album name',
            creator: 'Artist name',
            note: 'My favourite tracks and why I love this album.',
            url: '',
        },
    ],
    books: [
        {
            title: 'Book title',
            creator: 'Author name',
            note: 'A book I would recommend.',
            url: '',
        },
    ],
    youtubers: [
        {
            title: 'YouTuber name',
            creator: 'YouTube',
            note: 'Videos I never get tired of watching.',
            url: '',
        },
    ],
    influencers: [
        {
            title: 'Influencer name',
            creator: 'Social media',
            note: 'Style, content or personality I love.',
            url: '',
        },
    ],
};

const favoriteLabels = {
    albums: '🎧 Albums',
    books: '📚 Books',
    youtubers: '▶️ YouTubers',
    influencers: '💋 Influencers',
};

function Desktop() {
    const [activeWindow, setActiveWindow] = useState(null);
    const [activeFavCategory, setActiveFavCategory] = useState('albums');

    function openWindow(id) {
        setActiveWindow(id);
    }

    function closeWindow() {
        setActiveWindow(null);
    }

    function renderBlog() {
        return (
            <>
                <h2>Latest entries ♡</h2>
                <p>Welcome to my very unserious digital diary.</p>

                {articles.map((article) => (
                    <article className="post" key={article.id}>
                        <span>
                            {String(article.id).padStart(3, '0')}
                            {' // '}
                            {article.category}
                        </span>

                        <h3>{article.title}</h3>
                        <p>{article.text}</p>

                        <ArticleMedia media={article.media} />
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
                            <p>{fav.note}</p>

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
                        <p></p>
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
                            <h3>Crochet website (from back in the days) — DO NOT JUDGE</h3>
                            <p>
                                ⭐⭐⭐☆☆ 3 stars, thanks to{' '}
                                <a href="https://www.notion.com/"
                                   target="_blank" rel="noreferrer">Notion</a>
                                {' '}and{' '}
                                <a href="https://www.w3schools.com/"
                                   target="_blank" rel="noreferrer">W3Schools</a>.
                            </p>
                        </article>

                        <article className="post">
                            <span>002 // WEBSITE</span>
                            <h3>
                                MNU Simulation Training Website{' '}
                                <a href="https://courslibmnu2024.neocities.org/"
                                   target="_blank" rel="noreferrer">Link ↗</a>
                            </h3>
                            <p>Lowkey the same idea, but more professional.</p>
                        </article>

                        <article className="post">
                            <span>003 // PROM DRESS</span>
                            <h3>Prom dress creation</h3>
                            <p>A dress made with love and a lot of patience.</p>
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
                            <a href="https://www.instagram.com/awesome_nanou/"
                               target="_blank" rel="noreferrer">Instagram ↗</a>
                        </p>
                        <p>
                            <a href="https://www.tiktok.com/@awsome_nanou"
                               target="_blank" rel="noreferrer">TikTok ↗</a>
                        </p>
                        <p>
                            <a href="https://www.patreon.com/c/NanouDi"
                               target="_blank" rel="noreferrer">Patreon ↗</a>
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
                    ✦　⋆｡°✩　♡　✩°｡⋆　✦
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
