import React from 'react';
import RatingWrapper from '../../components/RatingWrapper/RatingWrapper';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import vendingPicture from '../../Images/illustration-thank-you.svg';
import styles from './Summary.module.scss';

const SummaryView = () => {
	return (
		<>
			<RatingWrapper>
				<div className={styles.wrapper}>
					<img className={styles.picture} src={vendingPicture} alt='' />
					<div className={styles.scoring}>You selected 4 out of 5</div>
					<Heading>{'Thank You!'}</Heading>
					<Text>
						{
							'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
						}
					</Text>
				</div>
			</RatingWrapper>
		</>
	);
};

export default SummaryView;
