import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "de0a53cbad0ed0fd9e8d69fb94369270";
    
    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            
            return result;
        }catch (err) {
            throw err;
        }
    };


    let handleChange = (e) => {
        setCity(e.target.value);
        setError(false);
    };

    let handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch (err) {
            setError(true);
        }
        
    };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="filled-basic" label="City Name" variant="filled" value={city} onChange={handleChange} required />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error &&  <p style={{color: 'red'}}>City not found in the API</p>}
      </form>
    </div>
  );
}
