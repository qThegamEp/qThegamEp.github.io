import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Freezing.module.css';
import {ReactComponent as FirstImageFreezing} from './firstImageFreezing.svg';

let minFreezingAnimationDuration = undefined;
let maxFreezingAnimationDuration = undefined;
let minFreezingAnimationDelay = undefined;
let maxFreezingAnimationDelay = undefined;

function randomInteger(min, max) {
    const randomInteger = min + Math.random() * (max + 1 - min);
    return Math.floor(randomInteger);
}

function freezing(freezingRef, duration, delay) {
    freezingRef.style.animationDuration = `${duration}s`;
    freezingRef.style.animationDelay = `${delay}s`;
    setTimeout(() => {
        freezingRef.style.animationDuration = '0s';
        freezingRef.style.animationDelay = '0s';
        freezing(freezingRef, randomInteger(minFreezingAnimationDuration, maxFreezingAnimationDuration), randomInteger(minFreezingAnimationDelay, maxFreezingAnimationDelay));
    }, (duration + delay) * 1000);
}

function Freezing(props) {
    let freezingElementsCounter = 0;
    const freezingRefs = useRef([]);
    const {
        fullPageFreezing = false,
        leftHalfPageFreezing = false,
        rightHalfPageFreezing = false,
        firstBlockFreezing = false,
        secondBlockFreezing = false,
        thirdBlockFreezing = false,
        fourthBlockFreezing = false,
        firstHorizontalLineFreezing = false,
        secondHorizontalLineFreezing = false,
        thirdHorizontalLineFreezing = false,
        firstVerticalLineFreezing = false,
        secondVerticalLineFreezing = false,
        firstImageFreezing = false,
        startAnimationDuration = 10,
        minAnimationDuration = 8,
        maxAnimationDuration = 12,
        startAnimationDelay = 0,
        minAnimationDelay = 0,
        maxAnimationDelay = 3,
        children
    } = props;
    useEffect(() => {
        minFreezingAnimationDuration = minAnimationDuration;
        maxFreezingAnimationDuration = maxAnimationDuration;
        minFreezingAnimationDelay = minAnimationDelay
        maxFreezingAnimationDelay = maxAnimationDelay;
        freezingRefs.current.forEach((freezingRef) => {
            freezingRef && freezing(freezingRef, startAnimationDuration, startAnimationDelay);
        });
    }, [minAnimationDuration, maxAnimationDuration, minAnimationDelay, maxAnimationDelay, startAnimationDuration, startAnimationDelay]);
    return (
        <div className={styles.Freezing}>
            {
                fullPageFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                         className={styles.FullPageFreezing}/>
            }
            {
                leftHalfPageFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                             className={styles.LeftHalfPageFreezing}/>
            }
            {
                rightHalfPageFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                              className={styles.RightHalfPageFreezing}/>
            }
            {
                firstBlockFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                           className={styles.FirstBlockFreezing}/>
            }
            {
                secondBlockFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                            className={styles.SecondBlockFreezing}/>
            }
            {
                thirdBlockFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                           className={styles.ThirdBlockFreezing}/>
            }
            {
                fourthBlockFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                            className={styles.FourthBlockFreezing}/>
            }
            {
                firstHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                    className={styles.FirstHorizontalLineFreezing}/>
            }
            {
                secondHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                     className={styles.SecondHorizontalLineFreezing}/>
            }
            {
                thirdHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                    className={styles.ThirdHorizontalLineFreezing}/>
            }
            {
                firstVerticalLineFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                  className={styles.FirstVerticalLineFreezing}/>
            }
            {
                secondVerticalLineFreezing && <div ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                   className={styles.SecondVerticalLineFreezing}/>
            }
            {
                firstImageFreezing && <FirstImageFreezing ref={(element) => freezingRefs.current[freezingElementsCounter++] = element}
                                                          className={styles.FirstImageFreezing}/>
            }
            {
                children
            }
        </div>
    );
}

Freezing.propTypes = {
    fullPageFreezing: PropTypes.bool,
    leftHalfPageFreezing: PropTypes.bool,
    rightHalfPageFreezing: PropTypes.bool,
    firstBlockFreezing: PropTypes.bool,
    secondBlockFreezing: PropTypes.bool,
    thirdBlockFreezing: PropTypes.bool,
    fourthBlockFreezing: PropTypes.bool,
    firstHorizontalLineFreezing: PropTypes.bool,
    secondHorizontalLineFreezing: PropTypes.bool,
    thirdHorizontalLineFreezing: PropTypes.bool,
    firstVerticalLineFreezing: PropTypes.bool,
    secondVerticalLineFreezing: PropTypes.bool,
    firstImageFreezing: PropTypes.bool,
    startAnimationDuration: PropTypes.number,
    minAnimationDuration: PropTypes.number,
    maxAnimationDuration: PropTypes.number,
    startAnimationDelay: PropTypes.number,
    minAnimationDelay: PropTypes.number,
    maxAnimationDelay: PropTypes.number,
}

export default Freezing;
