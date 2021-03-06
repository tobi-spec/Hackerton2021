import { Bar } from 'react-chartjs-2';
import styled from "styled-components";


export default function BarChart({chartValue, title ,name}) {

    const data = {
        labels: chartValue.index,
        datasets: [
            {
                label: 'number of found entities',
                data: chartValue.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    const VerticalBar = () => (
        <div id="bc">
            <h1 className='title'>{title} {name}</h1>
            <Bar data={data}/>
        </div>
    );

    return VerticalBar()
}


