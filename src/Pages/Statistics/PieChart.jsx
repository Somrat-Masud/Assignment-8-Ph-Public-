import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import PropTypes from 'prop-types';
const PieChartStyle = ({donation ,totalDonation}) => {

    const data = [
        { name: 'Total Donation', value: totalDonation },
        { name: 'Your Donation', value: donation },
      ];
      
  const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize='25px'
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart  width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={190}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend ></Legend>
      </PieChart>
    </ResponsiveContainer>
  );
};
PieChartStyle.propTypes = {
  donation: PropTypes.number,
  totalDonation: PropTypes.number
}
export default PieChartStyle;