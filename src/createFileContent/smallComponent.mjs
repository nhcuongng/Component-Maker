export const createIndexSmallComponent = (componentName) => (
  `import React from 'react';
import styles from './${componentName}.module.scss';

type TProp = {

}

export const ${componentName}: React.FC<TProp> = () => {
  return (
    <div className={styles.${componentName}Wrapper}>${componentName}</div>
  )
};`
);

export const createScssContent = (componentName) => (
  `// SCSS component ${componentName}

.${componentName}Wrapper {
  
} 
  `
)