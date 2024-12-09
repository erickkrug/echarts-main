import { transformAtendimento } from "../../models/transforms/transformAtendimento";
import { useApi } from "../useApi"

export async function usePerMonth(params = {}) {
    const { api } = useApi();

    const request = await api.post("AtendimentoPorServico/BuscaMensal", params);
    const response = [
        {
            "servico": "Orientações sobre o programa",
            "totalAtendimento": 21,
            "cor": "#3BA272"
        },
        {
            "servico": "Psicológico",
            "totalAtendimento": 195,
            "cor": "#A0A7E6"
        },
        {
            "servico": "Contato Gestores",
            "totalAtendimento": 157,
            "cor": "#FAC858"
        }
    ]

    const atendimentos = transformAtendimento(response);
    return atendimentos;
}




// [
//     {
//       "servico": "Orientações sobre o programa",
//       "totalAtendimento": 21,
//       "cor": "#3BA272"
//     },
//     {
//       "servico": "Psicológico",
//       "totalAtendimento": 195,
//       "cor": "#A0A7E6"
//     },
//     {
//       "servico": "Contato Gestores",
//       "totalAtendimento": 157,
//       "cor": "#FAC858"
//     }
//   ]