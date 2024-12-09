import React, { useEffect } from "react";
import {Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
export interface TableConfig {
  columns: string[]; // Cabeçalhos das colunas
  data: Array<{
    row: Array<string | number>; // Dados principais da linha
    subcategories?: Array<Array<string | number>>; // Subcategorias para essa linha
  }>;
}

interface DynamicTableProps {
  config: TableConfig;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ config }) => {
  const { columns, data } = config;

  useEffect(() => { 
    const container = document.getElementById("dynamic-grid");
    if (container) {
      const flatData = data.flatMap((entry) => {
        // Mescla linha principal com subcategorias (se existirem)
        const mainRow = [entry.row];
        const subRows =
        entry.subcategories?.map((sub) => ({
          data: sub, 
        })) ?? [];// Subcategoria diretamente abaixo da linha principal
        return [...mainRow, ...subRows];
      });

      new Grid({
        columns: columns.length ? columns : ["Coluna 1", "Coluna 2"],
        data: flatData.length
          ? flatData.map((row) => Array.isArray(row) ? row : row.data)
          : [["Exemplo 1", "Exemplo 2"]], 
        sort: true,
        style:{
          table: {
            width:"100%",
          }

        }
      }).render(container);
    }
  }, [columns, data]);

  
  return <div id="dynamic-grid"></div>;
};

export default DynamicTable;
