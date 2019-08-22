import React, { useState, useEffect } from 'react';

import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import { withRouter } from 'react-router-dom';

const Reader = withRouter(({ history }) => {
    const [counter, setCounter] = useState(0);
    const publications = require('../../Data/publications.json');

    useEffect(() => {
        const getPublication = publications.findIndex(
            publication =>
                publication.id === history.location.pathname.split('/')[1],
        );
        if (getPublication > -1) {
            setCounter(getPublication);
            history.push('/reader/' + publications[getPublication].id);
        }
    }, [history, publications]);

    const onNext = () => {
        if (counter <= publications.length) {
            history.push('/reader/' + publications[counter + 1].id);
            setCounter(counter + 1);
        }
    };

    const onBack = () => {
        if (counter <= publications.length) {
            history.push('/reader/' + publications[counter - 1].id);
            setCounter(counter - 1);
        }
    };

    return (
        <div className="reader">
            <Publication publications={publications} counter={counter} />
            <Counter counter={counter} maxCounter={publications.length} />
            <Controls
                counter={counter}
                maxCounter={publications.length}
                onNext={onNext}
                onBack={onBack}
            />
        </div>
    );
});

export default Reader;
