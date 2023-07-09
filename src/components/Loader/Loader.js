import React from 'react'
import styles from './Loader.module.scss'
// import loaderAnimation from '../../assets/loaderAnimation.svg'

function Loader({ name = "Loading" }) {
  return (
    <div className={styles.loader}>
        <div className={styles.animation}></div>
        {/* <img src={loaderAnimation} /> */}
        <div className={styles.title}>{name}</div>
    </div>
  )
}

export default Loader