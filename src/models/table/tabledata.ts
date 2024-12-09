export interface TableConfig {
    columns: string[]; // Cabeçalhos das colunas
    data: Array<{
      row: Array<string | number>; // Dados principais da linha
      subcategories?: Array<Array<string | number>>; // Subcategorias para essa linha
    }>;
  }
  