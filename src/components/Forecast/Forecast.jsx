import Weather from '../WeatherData/Weather'
const Forecast = ( { data }) => {
    return (
        <div>
            {data.map((day, idx) => (
                <Weather key={idx} data={day} />
            ))}
        </div>
    );
};

export default Forecast;