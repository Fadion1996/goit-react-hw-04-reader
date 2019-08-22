import React from 'react';
import styles from './controls.module.css';

const Controls = ({ onBack, onNext, counter, maxCounter }) => {
    return (
        <section className={styles.controls}>
            <button
                className={styles.button}
                disabled={counter === 0}
                onClick={onBack}
            >
                Previous
            </button>
            <button
                className={styles.button}
                disabled={counter === maxCounter - 1}
                onClick={onNext}
            >
                Next
            </button>
        </section>
    );
};

export default Controls;
