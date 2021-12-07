import "./chart.css";
import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
    
    return <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}/* if width is 400px, height is 100px */>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                <XAxis dataKey="name" stroke="#5550bd"/>
                
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>;
}


export default Chart;
