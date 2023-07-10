import React from 'react';
import styles from './RoundItem.module.scss';

const RoundItem = ({ children }) => {
	return (
		<>
			<div className={styles.wrapper}>{children}</div>
		</>
	);
};

export default RoundItem;
