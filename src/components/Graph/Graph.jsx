import React, { PureComponent } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, ReferenceLine,  } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 800,
    pv: 2000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 1300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 1360,
    pv: 3908,
    amt: 2000,
  },
];

export default class Graph extends PureComponent {
  render() {
    return (
      <div className='graph_container'>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 100,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffc743" />
                <stop offset="100%" stopColor="#ff8f17" />
              </linearGradient>
            </defs>
            <ReferenceLine x="3000" stroke="F9913D" strokeWidth={3} label="1 BTC  = $5.483" activeDot={{ r: 8 }} />
            <Tooltip />
            <Area type="monotone" dataKey="uv" strokeWidth={3} stroke="url(#strokeGradient)" fill="#f99d2114" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
