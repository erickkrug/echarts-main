import { ativoreceptivo } from "./ativoreceptivo"

export function transformAtivoReceptivo(atendimentos: ativoreceptivo[]) {
    return atendimentos.map((atendimento: ativoreceptivo) => {
        const { servico,ativo,receptivo, totalAtendimento, cor } = atendimento
        return {
            name: servico,
            ativo: ativo,
            receptivo: receptivo,
            value: totalAtendimento,
            itemStyle: cor
        }
    })
}