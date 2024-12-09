// import { useEffect, useState } from "react"
// import { usePerMonth } from "../../hooks/content/perMonth";
// import { BarGraph, BaseDataType } from "../graph/bar-graph";

// export function Overview () {
//     const [data, setData] = useState<BaseDataType[]>();

//     useEffect(() => {
//         async function getData() {
//             const data = await usePerMonth({ EmpresaId: 130, DataInicio: '2024-06-01', DataFim: '2024-06-30' });
//             setData(data);
//         }

//         getData();
//     }, []);

//     return (
//       <div>
//         <h1>Overview Atendimentos</h1>

//           <BarGraph config={{ direction: 'horizontal', showLegend: true, angleAxis: { type: 'category' } }} data={data} />

//       </div>
//     )
// }

import { useEffect, useState } from "react";
import { usePerMonth } from "../../hooks/content/perMonth";
import { BarGraph, BaseDataType } from "../graph/bar-graph";
import DynamicTable from "../table/servicetable";
import { Row } from "gridjs";

export function Overview() {
  const [dataJune, setDataJune] = useState<BaseDataType[]>();
  const [dataJuly, setDataJuly] = useState<BaseDataType[]>();

  useEffect(() => {
    async function fetchData() {
      const juneData = await usePerMonth({ EmpresaId: 130, DataInicio: '2024-06-01', DataFim: '2024-06-30' });
      const julyData = await usePerMonth({ EmpresaId: 130, DataInicio: '2024-07-01', DataFim: '2024-07-31' });

      setDataJune(juneData);
      setDataJuly(julyData);
    }
    fetchData();
  }, []);


  const config = {
    columns: ["Serviço", "%"], // Cabeçalhos das colunas
    data: [
      {
        row: ["Contato Gestores"], // Linha principal
        subcategories: [
          ["Gestores Ações", "25%"], // Subcategoria 1
        ],
      },
      {
        row: ["Orientações Sobre o programa"],
        subcategories: [
          ["Orientações Sobre o programa", "8%"],
        ],
      },
      {
        row: ["Serviço Social"],
        subcategories: [
          ["Finanças - Problemas financeiros Orientação", "6%"],
        ],
      },
      {
        row: ["Fisioterapia/Personal"],
        subcategories: [
          ["Condicionamento Fisico", "22%"],
          ["Duvidas Gerais/Orientação", "6%"],
        ],
      },
      {
        row: ["Psicológico"],
        subcategories: [
          ["Ansiedade", "17%"],
          ["Depressão/Tristeza", "6%"],
          ["Stress", "6%"],
          ["Vida Emocional - Comportamento (Temas portal)", "6%"],
        ]
      },
    ],
  };



  return (
    <div >
      <div className="flex flex-row justify-center items-center">

        <div className="p-4 flex ">
          <div className="h-1/4 d-1/4">
            <BarGraph
              config={{ direction: 'horizontal', showLegend: true, angleAxis: { type: 'category' } }}
              data={dataJune}
            />
          </div>
          <div className="h-1/4 d-1/4">
            <BarGraph
              config={{ direction: 'horizontal', showLegend: true, angleAxis: { type: 'category' } }}
              data={dataJuly}
            />
          </div>
        </div>

      <div className="flex items-center justify-center">
        <div className="w-1/2 h-1/2">
          <h1 className="text-3xl text-leal-600 "> % Top 3 por motivo - JULHO </h1>
          <DynamicTable config={config} />
        </div>
      </div>
      </div>
      <div>
        <BarGraph
          config={{ direction: 'vertical', showLegend: true, angleAxis: { type: 'category' } }}
          data={dataJune}
        />
      </div>
    </div>
  );
}
