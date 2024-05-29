import React from 'react'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const AreaChartPlot = () => {
    const data = [
        { year: '2015', Fantasy: 2500, Adventure: 2400, Biography: 1000, History: 2200, Science: 2300, Textbooks: 2100 },
        { year: '2016', Fantasy: 2400, Adventure: 2500, Biography: 1100, History: 2100, Science: 2400, Textbooks: 2000 },
        { year: '2017', Fantasy: 2600, Adventure: 2300, Biography: 1200, History: 2000, Science: 2200, Textbooks: 2200 },
        { year: '2018', Fantasy: 2500, Adventure: 2400, Biography: 1300, History: 1900, Science: 2100, Textbooks: 2300 },
        { year: '2019', Fantasy: 2600, Adventure: 2300, Biography: 1400, History: 1800, Science: 2000, Textbooks: 2400 },
        { year: '2020', Fantasy: 2400, Adventure: 2500, Biography: 1500, History: 1700, Science: 1900, Textbooks: 2500 },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorFantasy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAdventure" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorBiography" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f2777a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#f2777a" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorHistory" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#90ed7d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#90ed7d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorScience" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f9c74f" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#f9c74f" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorTextbooks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d0b665" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#d0b665" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Fantasy" stroke="#8884d8" fillOpacity={1} fill="url(#colorFantasy)" />
                <Area type="monotone" dataKey="Adventure" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAdventure)" />
                <Area type="monotone" dataKey="Biography" stroke="#f2777a" fillOpacity={1} fill="url(#colorBiography)" />
                <Area type="monotone" dataKey="History" stroke="#90ed7d" fillOpacity={1} fill="url(#colorHistory)" />
                <Area type="monotone" dataKey="Science" stroke="#f9c74f" fillOpacity={1} fill="url(#colorScience)" />
                <Area type="monotone" dataKey="Textbooks" stroke="#d0b665" fillOpacity={1} fill="url(#colorTextbooks)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChartPlot