import Chart from "react-google-charts";
import React from "react";

const СalendarChartComp = ({}) => {
    return (
        <Chart
            //width={1000}
            chartType="Calendar" //неизменяемая хрень
            loader={<div>Loading Chart</div>} //
            data={[ //забить рыбу
                [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                [new Date(2020, 1, 4), 1],
                [new Date(2020, 1, 5), 1],
                [new Date(2020, 1, 12), 0],
                [new Date(2020, 1, 13), 2],
                [new Date(2020, 1, 19), 2],
                [new Date(2020, 1, 23), 1],
                [new Date(2020, 1, 24), 0],
                [new Date(2020, 2, 10), 1],
            ]}
            options={{
                title: '',
                /*textLabel: {
                    color: '#b3b3b3',
                    fontSize: 10,
                    bold: false,
                    italic: false
                },*/
                //ЭТО ПУСТЫЕ ДНИ ЦВЕТА????
                noDataPattern: {
                    backgroundColor: '#b3b3b3',
                    color: 'b3b3b3'
                },
                calendar: {
                    //стиль написания месяца
                    monthLabel: {
                        fontName: 'Roboto',
                        fontSize: 16,
                        color: 'grey',
                        bold: false,
                        italic: false
                    },
                    dayOfWeekLabel: {
                        //здесь стиль написания дня
                    },
                    //это месяцы с какими-либо значениями
                    monthOutlineColor: {
                        stroke: '#009662',
                        strokeOpacity: 0.8,
                        strokeWidth: 2
                    },
                    //!!цвет-разделителей всех месяцев!!
                    underMonthSpace: 12,
                    unusedMonthOutlineColor: {
                        stroke: 'grey',
                        strokeOpacity: 0.8,
                        strokeWidth: 2
                    },
                    daysOfWeek: 'ПВСЧПСС',
                    dayOfWeekRightSpace: 10,
                    //переименовать месяцы - нельзя
                    //титульник календарь уменьшить и поменять цвет - нельзя
                },
                colorAxis:{
                    minValue: 0,  colors: ['#f8b4a2', '#008453'],
                },
            }
            }
        />
    );
}

export default СalendarChartComp;