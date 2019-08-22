import React from 'react';

import styles from './publication.module.css';

const Publication = ({ counter, publications }) => {
    return (
        <section key={publications[counter].id} className={styles.publication}>
            <h2>{publications[counter].title}</h2>
            <p>{publications[counter].text}</p>
        </section>
    );
};

export default Publication;
