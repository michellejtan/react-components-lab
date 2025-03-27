import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
const WeatherForecast = ({ forecast }) => {
    return (
        <div className='weather'>

            <h2>{forecast.day}</h2>
            <WeatherIcon img={forecast.img} alt={forecast.imgAlt} />            <p><span>conditions: </span>{forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </div>
    );
};

export default WeatherForecast;