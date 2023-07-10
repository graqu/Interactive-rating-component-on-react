import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import RoundItem from '../../components/RoundItem/RoundItem';
import starIcon from '../../Images/icon-star.svg';

function App() {
	return (
		<>
			<div>
				<RoundItem children={<img src={starIcon} alt='' />} />
				<Heading children='How did we do?' />
				<Text
					children='Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!'
				/>
				<Rating />
				<Button>Submit</Button>
			</div>
		</>
	);
}

export default App;
