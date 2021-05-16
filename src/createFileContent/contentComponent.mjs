export const createIndexFileComponent = (componentName) => (
  `import React from 'react';

import styles from './${componentName}.module.scss';

type TProp = {

};

export const ${componentName}: React.FC<TProp> = () => (
  <div className={styles.${componentName}Wrapper}>${componentName}</div>
);`
);

export const createScssContent = (componentName) => (
  `// SCSS for ${componentName} component

.${componentName}Wrapper {
  // Your styles
}
`
)