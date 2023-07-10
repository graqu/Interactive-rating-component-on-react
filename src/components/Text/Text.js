import React from 'react';
import styles from './Text.module.scss';

const Text = ({ children }) => {
	return <p className={styles.description}>{children}</p>;
};

export default Text;