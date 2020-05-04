import Chart from "react-google-charts";
import React from "react";

const СalendarChartComp = ({fish}) => {
    return (
        <Chart
            //width={1000}
            chartType="Calendar" //неизменяемая хрень
            loader={<div>Loading Chart</div>} //
            data={fish}
            options={{
                title: '',
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
                    underMonthSpace: 12,
                    unusedMonthOutlineColor: {
                        stroke: 'grey',
                        strokeOpacity: 0.8,
                        strokeWidth: 2
                    },
                    daysOfWeek: 'ПВСЧПСС',
                    dayOfWeekRightSpace: 10,
                },
                colorAxis:{
                    minValue: 0,  colors: ['#f8b4a2', '#008453'],
                },
            }
            }
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default СalendarChartComp;