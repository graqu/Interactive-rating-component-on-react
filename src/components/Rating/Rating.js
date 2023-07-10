import React from 'react';
import styles from './Rating.module.scss';
import RoundItem from '../RoundItem/RoundItem';

const Rating = () => {
	const ratingGrades = [1, 2, 3, 4, 5];

	return (
		<>
			<ul className={styles.wrapper}>
				{ratingGrades.map((item) => (
					<li>
						<RoundItem children={item} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Rating;
