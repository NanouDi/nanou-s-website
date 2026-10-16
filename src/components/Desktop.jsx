
import { useState } from 'react';
import './Desktop.css';


const desktopItems = [
    { id: 'about', icon: '✨', label: 'About Me' },
    { id: 'blog', icon: '💿', label: 'Unhinged Topic' },
    { id: 'photos', icon: '📸', label: 'Photos' },
    { id: 'prettiest', icon: '💅', label: 'prettiest' },
    { id: 'projects', icon: '🕹️', label: 'Projects' },
    { id: 'contact', icon: '💌', label: 'Contact' },
];

const windowContent = {
    about: {
        title: 'ABOUT_NANOU',
        content: (
            <>
                <h2>Hey, welcome to my world ♡</h2>
                <p>I'm Nanou, a computer science student,
                    creative soul and wannabe icon.</p>
                <p>My little corner of the internet is where
                    technology meets creativity and (accessoirement)
                    and all the other crafts.</p>
            </>
        ),
    },
    prettiest: {
        title: 'My pics and best videos',
        content: (
            <>
                <h2>just cause I'm narcissistic ♡</h2>
                <img
                    src="/IMG_1939.PNG"
                    alt="A photo of Nanou"
                />
            </>
        ),
    },
    blog: {
        title: 'UNHINGED_TOPICS',
        content: (
            <>
                <h2>Latest entries</h2>
                <article className="post">
                    <span>001 // LIFE</span>
                    <h3>Welcome to my digital diary</h3>
                    <p>Thoughts, stories and little life updates.</p>
                </article>
                <article className="post">
                    <span>002 // TECH</span>
                    <h3>Building my own website</h3>
                    <p>My journey into the world of web development.</p>
                </article>
            </>
        ),
    },
    photos: {
        title: 'PHOTO_ARCHIVE',
        content: (
            <>
                <h2>My visual diary 📸</h2>
                <p>Memories, outfits, places and random moments.</p>
                <p>Add your own photographs here next!</p>
            </>
        ),
    },
    projects: {
        title: 'PROJECTS',
        content: (
            <>
                <h2>Things I've made</h2>
                <article className="post">
                    <span>001 // LIFE</span>
                    <h3>Crochet website (from back in the days
                        DO NOT JUDGE
                    </h3>
                    <p>⭐⭐⭐🌟🌟
                        3 stars thanks <a href={"https://www.notion.com/"}>notion</a> and <b><a href={"https://www.w3schools.com/"}>w3schools</a></b> </p>
                </article>
                <article className="post">
                    <span>001 // LIFE</span>
                    <h3>Welcome to my digital diary</h3>
                    <p>Thoughts, stories and little life updates.</p>
                </article>
                <article className="post">
                    <span>001 // LIFE</span>
                    <h3>Welcome to my digital diary</h3>
                    <p>Thoughts, stories and little life updates.</p>
                </article>
            </>
        ),
    },
    contact: {
        title: 'CONTACT',
        content: (
            <>
                <h2>Let's connect 💌</h2>
                <p>Want to collaborate or say hello?</p>
                <p>Add your social links and email here.</p>
            </>
        ),
    },
};

function Desktop() {
    const [activeWindow, setActiveWindow] = useState(null);

    function openWindow(id) {
        setActiveWindow(id);
    }

    function closeWindow() {
        setActiveWindow(null);
    }

    return (
        <main className="desktop">
            <div className="desktop-top">
                <span className="system-status">
                    ● SYSTEM ONLINE
                </span>
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
                            <span className="icon-picture">
                                {item.icon}
                            </span>
                            <span className="icon-label">
                                {item.label}
                            </span>
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
                            {windowContent[activeWindow].title}
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
                        {windowContent[activeWindow].content}
                    </div>

                    <div className="window-footer">
                        <span>✦ NANOU_OS</span>
                        <button onClick={closeWindow}>
                            CLOSE WINDOW
                        </button>
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
                        ? `RUNNING: ${windowContent[activeWindow].title}`
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
