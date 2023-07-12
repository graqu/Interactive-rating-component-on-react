import React from 'react';
import { Link } from 'react-router-dom';
import RatingWrapper from '../../components/RatingWrapper/RatingWrapper.js'
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import RoundItem from '../../components/RoundItem/RoundItem';
import starIcon from '../../Images/icon-star.svg';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';

const RatngView = () => {
	return (
		<>
			<RatingWrapper>
				<RoundItem children={<img src={starIcon} alt='' />} />
				<Heading children='How did we do?' />
				<Text
					children='Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!'
				/>
				<Rating />
				<Link to='/succes'>
					<Button>Submit</Button>
				</Link>
			</RatingWrapper>
		</>
	);
};

export default RatngView;
