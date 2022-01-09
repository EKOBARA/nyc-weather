import Day from './Day/Day';
// import Image from './Image';
import Temperature from './Temperature/Temperature';
import { Card } from 'react-bootstrap';


import './Weather.css';

const Weather = ({ data }) => {
    return (
        <Card className='card today'>
            {/* <Image id={data.icon} /> */}
            <Day day={data.date} />
            <Temperature min={data.min} max={data.max} />
        </Card>
    );
};

export default Weather;