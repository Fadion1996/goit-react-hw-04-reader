import React, { Component } from 'react';

import styles from './counter.module.css';

export default class Counter extends Component {
    render() {
        const { counter, maxCounter } = this.props;
        return (
            <section className={styles.counter}>
                <p className={styles.counter_value}>
                    {counter + 1}/{maxCounter}
                </p>
            </section>
        );
    }
}
