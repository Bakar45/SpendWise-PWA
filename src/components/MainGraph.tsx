import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Transaction {
  type: string;
  value: number;
  detail: any;
  Date: string;
  Payment: string;
}

const MainGraph: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const savedata: Transaction[] = JSON.parse(localStorage.getItem('Transactions') || '[]');

  useEffect(() => {
    const dailyTotals: { [date: string]: { income: number; expense: number } } = {};

    savedata.forEach((obj: Transaction) => {
      const dateStr = obj.Date;
      const croped = dateStr.substring(3, 6);
      const croppedmonth = croped.toUpperCase();

      const currentDate = new Date();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      const thismonth = month.toUpperCase();

      if (croppedmonth === thismonth) {

        const dateKey = obj.Date;
        if (!dailyTotals[dateKey]) {
          dailyTotals[dateKey] = { income: 0, expense: 0 };
        }

        if (obj.type === "income") {
          dailyTotals[dateKey].income += obj.value;
        } else {
          dailyTotals[dateKey].expense += obj.value;
        }
      }
    });

    const formattedData = Object.keys(dailyTotals).map(date => ({
      date: date.substring(0, 6),
      income: dailyTotals[date].income,
      expense: dailyTotals[date].expense,
    }));

    setData(formattedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 25,
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="1 9" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="expense" stroke="#FF0000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="income" stroke="#0000FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MainGraph;
