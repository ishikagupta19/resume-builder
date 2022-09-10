
import styles from './Body.module.css';
import React from 'react'

function Body() {
    const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936" ];
  return (
    <div className={styles.container}>
    <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
        <div className={styles.colors}>
        {
            colors.map((item) =>(
            <span 
            key={item}
            styles={{backgroundColor: item}}
            className={styles.color} 
                
            />
            )
        )}
            
        </div>
        <button>Download</button>
    </div>
    </div>
  );
}

export default Body;