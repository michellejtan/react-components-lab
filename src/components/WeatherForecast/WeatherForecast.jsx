import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = ({ forecast }) => {
    return (
        <div className='weather'>
            <h2>{forecast.day}</h2>
            <WeatherIcon img={forecast.img} alt={forecast.imgAlt} />
            <WeatherData conditions={forecast.conditions} time={forecast.time} />
        </div>
    );
};

export default WeatherForecast;