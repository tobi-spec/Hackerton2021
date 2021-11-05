import {useEffect, useState} from "react";
import Chart from "react-chartjs-2";

export default function CloroChart() {


        //.then((data) => {
        //const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

        const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
            type: 'choropleth',
            data: {
                labels: countries.map((d) => d.properties.name),
                datasets: [{
                    label: 'Countries',
                    data: countries.map((d) => ({feature: d, value: Math.random()})),
                }]
            },
            options: {
                showOutline: true,
                showGraticule: true,
                legend: {
                    display: false
                },
                scale: {
                    projection: 'equalEarth'
                },
                geo: {
                    colorScale: {
                        display: true,
                    },
                },
            }
        });
    }