import React, {useEffect, useState} from 'react';
import Widgets from "../Widgets";
import styled from 'styled-components';
import Loader from "../Loader";

const Center = styled('div')`
  position: relative;
  margin: 0 auto;
  top: 40vh;
`

const Main = () => {
  const API_key = '73cb081b909e516a7dbea9862719835c';
  // eslint-disable-next-line
  const [city, setCity] = useState('Moscow');
  const [data, setData] = useState([]);
  const [startLongitude, setStartLongitude] = useState(false);
  const [startLatitude, setStartLatitude] = useState(false);

  useEffect(() => {
    !startLongitude && fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`)
      .then((response) => response.json()).then((response) => setData(data.concat(response)));

    startLongitude && fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${startLatitude}&lon=${startLongitude}&units=metric&appid=${API_key}`)
      .then((response) => response.json()).then((response) => {
        let localData = response;
        localData.local = true;
        setData(data.concat(response))
      });
  }, [startLongitude])


  const geo = navigator.geolocation;
  const success = (pos) => {
    setStartLongitude(pos.coords.longitude);
    setStartLatitude(pos.coords.latitude);
  }
  const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
  geo.getCurrentPosition(success, error)

  return data.length >= 1 ? (
    <div>
      <Widgets data={data}/>
    </div>
  ) : (
    <Center>
      <Loader />
    </Center>
  )
}

export default Main;