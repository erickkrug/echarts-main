import { useEffect, useState } from "react"
import { usePerMonth } from "../../hooks/content/perMonth";
import { BarGraph, BaseDataType } from "../graph/bar-graph";

export function Overview () {
    const [data, setData] = useState<BaseDataType[]>();

    useEffect(() => {
        async function getData() {
            const data = await usePerMonth();
            setData(data);
        }

        getData();
    }, []);
    
    return (
      <div>
        <h1>Overview Atendimentos</h1>
        {data && (
          <BarGraph config={{ direction: 'horizontal', showLegend: true }} data={data} />
        )}
      </div>
    )
}