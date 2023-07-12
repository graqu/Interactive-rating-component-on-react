import React from 'react';
import styles from './RatingWrapper.module.scss';

const RatingWrapper = ({children}) => {
	return (
		<>
			<div className={styles.wrapper}>{children}</div>
		</>
	);
};

export default RatingWrapper;
