
import * as echarts from 'echarts';
import { useRef } from 'react';


export type PieConfig = {
    id?: string,
    data: {
      name: string,
      value: number,
      itemStyle?: any
    }[],
    config: {
      pallete?: string[],
      direction: string,
      showLegend: boolean,
      radious?: string[]
    }
  }


export function PieChart({config,data} : PieConfig) {
    const wrapperGraph = useRef<HTMLDivElement>(null);

    if (!wrapperGraph.current || !data) return;

    const chart = echarts.init(wrapperGraph.current, null, {
      width: 500,
      height: 560
    });

  // Configuração do gráfico
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)', // Nome, valor e porcentagem
    },
    legend: config.showLegend
      ? {
          orient: 'vertical',
          left: 'left',
          data: data.map((item) => item.name), // Gera os nomes das legendas
        }
      : undefined,
    series: [
      {
        name: 'Atendimentos', // Nome da série
        type: 'pie',
        radius: config.radious || ['0%', '70%'], // Gráfico normal ou tipo "donut"
        data: data.map((item) => ({
          name: item.name,
          value: item.value,
          itemStyle: item.itemStyle || {}, // Permite configurar cores específicas
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: true,
          formatter: '{b}: {c} ({d}%)', // Exibe nome, valor e porcentagem
        },
      },
    ],
    
  };

  // Renderiza o gráfico com as opções configuradas
  chart.setOption(option);
  chart.resize();
  return (
    <div ref={wrapperGraph}></div>
  )
}
