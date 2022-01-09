import { WEATHER_ICON_DESCRIPTION } from '../../constants';

const Image = ( { id } ) => {
    return (
        <div>
            <img src={`./assets/${id}.png`} alt={WEATHER_ICON_DESCRIPTION[id]} />
        </div>
    );
};

export default Image;