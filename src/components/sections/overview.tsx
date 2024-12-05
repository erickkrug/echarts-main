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

    return (
        <div className="flex flex-row">
            <div className="h-1/4 d-1/4">
                <h2> Junho </h2>
                <BarGraph 
                    config={{ direction: 'horizontal', showLegend: true, angleAxis: { type: 'category' } }} 
                    data={dataJune} 
                />
            </div>
            
            <div className="h-1/4 d-1/4">
                <h2> Julho </h2>
                <BarGraph 
                    config={{ direction: 'horizontal', showLegend: true, angleAxis: { type: 'category' } }} 
                    data={dataJuly} 
                />
            </div>
        </div>
    );
}
