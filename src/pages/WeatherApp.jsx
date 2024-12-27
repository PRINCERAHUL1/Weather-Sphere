import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelsLike: 20.69,
        humidity: 60,
        temp: 20.97,
        tempMax: 20.97,
        tempMin: 20.97,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div>
            <h1 className="sphere" style={{textAlign: "center"}}>Weather Sphere</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
};