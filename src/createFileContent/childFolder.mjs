export const createIndexChildContent = (childFolderName) => (
  `import React from 'react';
import styles from './${childFolderName}.module.scss';

type TProp = {

}

export const ${childFolderName}: React.FC<TProp> = () => {
  return (
    <div className={styles.${childFolderName}Wrapper}>${childFolderName}</div>
  )
};`
);

export const createScssContent = (childFolderName) => (
  `// SCSS component ${childFolderName}

.${childFolderName}Wrapper {
  
} 
  `
)