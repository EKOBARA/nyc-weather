import Weather from '../WeatherData/Weather';
import { CardGroup } from 'react-bootstrap';
import './Forecast.css';

const Forecast = ( { data }) => {
    return (
        <CardGroup className='card-group'>
            {data.map((day, idx) => (
                <Weather key={idx} data={day} />
            ))}
        </CardGroup>
    );
};

export default Forecast;