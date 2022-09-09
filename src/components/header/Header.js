import React from 'react';

import styles from './Header.modular.css';

function header() {
  return (
    <div className={styles.container}>
        <p className={styles.heading}>A <span> resume</span> that stands out.</p>
        <p className={styles.heading}>Build your Resume. <span> It's free!</span></p>
    </div>
  )
}

export default header