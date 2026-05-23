function HourlyForecast({ weather }) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10">

      {weather.forecast.forecastday[0].hour
        .slice(0, 12)
        .map((hour, index) => (

          <div
            key={index}
            className="bg-white text-black p-5 rounded-2xl text-center"
          >

            <p>
              {hour.time.split(" ")[1]}
            </p>

            <img
              src={hour.condition.icon}
              alt="hour"
              className="mx-auto"
            />

            <h3 className="text-2xl font-bold">
              {hour.temp_c}°
            </h3>

          </div>

        ))}

    </div>
  );
}

export default HourlyForecast;