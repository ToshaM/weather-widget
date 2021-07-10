import React from "react";
import ExploreIcon from '@material-ui/icons/Explore';
import NavigationIcon from '@material-ui/icons/Navigation';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import styled from 'styled-components';

const Card = styled('div')`
  margin: 20px auto;
  padding: 10px;
  max-width: 300px;
  color: black;
  border: 1px solid rgba(128, 128, 128, 0.14);
  border-radius: 30px;
  text-align: center;
  box-shadow: 2px 2px 2px black;
`
const ArrowWind = styled('div')`
  display: inline-block;
`

const IconWeather = styled('img')`
  width: 100px;
  height: 100px;
  margin: 0;
`

const MainInfo = styled('div')`
  display: flex;
  justify-content: space-around;
  align-content: center;
`

const Widget = ({data}) => {
  console.log('widget data =', data)


  return data && (
    // eslint-disable-next-line
    data.map((item) => {
      console.log(item)
      if (item.cod === 200) {
        const {temp, pressure, temp_max, temp_min} = item.main;
        const {deg, speed} = item.wind;
        const {description, icon} = item.weather[0];
        return (
          <Card key={item.name}>
            <h1>{item.name}, {item.sys.country} {item.local && <GpsFixedIcon />}</h1>
            <MainInfo><IconWeather src={`http://openweathermap.org/img/w/${icon}.png`}
                                   alt={description}/>  <h2>{temp} <sup>o</sup>C</h2></MainInfo>
            <div><ArrowWind
              style={{transform: `rotate(${deg}deg)`}}><NavigationIcon fontSize="small" />
                 </ArrowWind> <span> {speed} m/s </span>
              <span> <ExploreIcon fontSize="small" /> {pressure} hPa</span>
            </div>
            <div>
              <span> Max {temp_max}<sup>o</sup>C </span>
              <span> Min {temp_min}<sup>o</sup>C </span>
            </div>
          </Card>
        )
      }
    })
  )
}

export default Widget;