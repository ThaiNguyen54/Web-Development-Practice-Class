import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Ex02() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root. render(
        <section>
            <head>
                <h1>A Header</h1>
            </head>
            <nav>
                <a href='item'>Nav Item</a>
            </nav>
            <main>
                <p>The main content...</p>
            </main>
            <footer>
                <small>&copy; 2022</small>
            </footer>
        </section>
    )
}

export default Ex02