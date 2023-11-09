import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./LandingView.css";

function LandingView() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);

  const zip = "92121";
  const country = "US";
  const APIkey = "9db2b0c37ca654fc7eacadcec85420e1";

  useEffect(() => {
    // start the fetching
    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!

  const lat = "32.8919";
  const lon = "-117.2035";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setLoadingData(false);
        setError(false);
        setData(actualData);
      })
      .catch((err) => {
        setLoadingData(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <CSSTransition
        in={loadingData}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>Loading...</div>
      </CSSTransition>

      <CSSTransition in={error} timeout={300} classNames="fade" unmountOnExit>
        <div>Error occurred!</div>
      </CSSTransition>

      <CSSTransition
        in={!loadingData && !error && data}
        timeout={300}
        classNames="fade"
        // unmountOnExit
      >
        <div className="weather-info">
          <h2>Weather Information</h2>
          {data && (
            <>
              <p>
                Location: {data.name}, {data.sys.country}
              </p>
              <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
              <p>
                Min Temperature: {(data.main.temp_min - 273.15).toFixed(2)}°C
              </p>
              <p>
                Max Temperature: {(data.main.temp_max - 273.15).toFixed(2)}°C
              </p>
              <p>Description: {data.weather[0].description}</p>
              <p>Wind Speed: {data.wind.speed} m/s</p>
              <p>Wind Degree: {data.wind.deg}°</p>
            </>
          )}
        </div>
      </CSSTransition>
    </>
  );
}

export default LandingView;
