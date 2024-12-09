import {transformAtivoReceptivo} from "../../models/transforms/ativoreceptivo/transformativoreceptivo"
import { useApi } from "../useApi"

export async function activeReceptive(params = {}) {
    const { api } = useApi();

    await api.post("AtendimentoPorServico/BuscaAtivoReceptivo", params);
    const response = [
        {
            "servico": "Orientações sobre o programa",
            "ativo": 0,
            "receptivo": 21,
            "totalAtendimento": 21,
            "cor": "#3BA272"
        },
        {
            "servico": "Psicológico",
            "ativo": 195,
            "receptivo": 0,
            "totalAtendimento": 195,
            "cor": "#A0A7E6"
        },
        {
            "servico": "Contato Gestores",
            "ativo": 0,
            "receptivo": 157,
            "totalAtendimento": 157,
            "cor": "#FAC858"
        }
    ]

    const atendimentos = transformAtivoReceptivo(response);
    return atendimentos;
}