import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const HAZE_URL = "https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return (
                <div className="InfoBox">
                    <div className="CardContainer">
                    <Card sx={{ maxWidth: 500 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image= {info.humidity > 80 ? RAINY_URL : info.temp > 20 ? HOT_URL : COLD_URL }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/> }
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <div>Temperature = {info.temp}&deg;</div>
                                <div>Humidity = {info.humidity}</div>
                                <div>Min Temp = {info.tempMin}&deg;</div>
                                <div>Max Temp = {info.tempMax}&deg;</div>
                                <div>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg; sometimes</div>
                            </Typography>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            )
}