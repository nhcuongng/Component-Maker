import React from 'react';
import styles from './ChildComponent.module.scss';

type TProp = {

}

export const ChildComponent: React.FC<TProp> = () => {
  return (
    <div className={styles.ChildComponentWrapper}>ChildComponent</div>
  )
};