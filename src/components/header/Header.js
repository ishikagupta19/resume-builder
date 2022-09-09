import React from 'react';
import resumebgSvg from '../../assets/resumebg.svg'

import styles from './Header.module.css';

function header() {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <p className={styles.heading}>A <span> resume</span> that stands out.</p>
        <p className={styles.heading}>Build your Resume. <span> It's free!</span></p>
    </div>
    <div className={styles.right}>
        <img src={resumebgSvg} alt='resume' />
    </div>
    </div>
  )
}

export default header;