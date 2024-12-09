import { Atendimento } from "./atendimento"

export function transformAtendimento(atendimentos: Atendimento[]) {
    return atendimentos.map((atendimento: Atendimento) => {
        const { servico, totalAtendimento, cor } = atendimento
        return {
            name: servico,
            value: totalAtendimento,
            itemStyle: cor
        }
        
    })
}