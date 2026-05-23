import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeatherChart({ weather }) {

  const data =
    weather.forecast.forecastday.map(
      (day) => ({
        date: day.date,
        temp: day.day.avgtemp_c,
      })
    );

  return (

    <div className="bg-white mt-10 p-5 rounded-3xl">

      <h2 className="text-3xl font-bold text-black mb-5">
        Temperature Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeatherChart;