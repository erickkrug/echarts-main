import * as echarts from 'echarts';
import { useEffect, useRef } from "react"

export type BaseDataType = {
  name: string,
  value: number,
  itemStyle?: string
} 

export type GraphsConfig = {
  id?: string,
  data?: BaseDataType[],
  config: echarts.EChartsOption
}
export function BarGraph({ config, data }: GraphsConfig) {
  const wrapperGraph = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperGraph.current || !data) return;

    const chart = echarts.init(wrapperGraph.current, null, {
      width: 500,
      height: 560
    });

    var yAxis;
    var xAxis;


    if (config.direction === 'horizontal') {
      yAxis = {
        type: 'category',
        data: data.map((item) => item.name)
      };
      xAxis = {
        type: 'value',
        grid: {
          show: false
        },
      };
    } else if (config.direction === 'vertical') {
      yAxis = {
        type: 'value',
        grid: {
          show: false
        },
      };
      xAxis = {
        type: 'category',
        data: data.map((item) => item.name)
      };
    }

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => `${params.seriesName}: ${params.value}`
      },
      grid: { containLabel: true, top: '10%', bottom: '20%' },
      yAxis: yAxis,
      xAxis: xAxis,
      series: [
        {
          type: 'bar',
          data: data.map((item) => ({
            value: item.value,
            itemStyle: {
              color: item.itemStyle
            }

          })),
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          }
        }
      ]
    };

    chart.setOption(option);
    chart.resize();

  }, [wrapperGraph.current]);

  return (
    <div ref={wrapperGraph}></div>
  )
}