import React from 'react'
import styles from './NeonButton.module.css'

const neonButton = () => {
  return (
    <div className={styles.background}>
      <a className={styles.button}>Click Me</a>
    </div>
  )
}

export default neonButton