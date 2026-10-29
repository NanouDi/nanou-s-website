
import { useEffect, useState } from 'react';
import { getArticles } from './sanityQueries';

export default function SanityTest() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getArticles()
            .then(setArticles)
            .catch((err) => {
                console.error(err);
                setError(err.message || 'Impossible de charger les articles.');
            });
    }, []);

    return (
        <section>
            <h2>Sanity connection test</h2>

            {error && <p>Erreur : {error}</p>}

            {!error && articles.length === 0 && (
                <p>Aucun article publié pour le moment.</p>
            )}

            {articles.map((article) => (
                <article key={article._id}>
                    <h3>{article.title}</h3>
                    <p>{article.category}</p>
                </article>
            ))}
        </section>
    );
}
