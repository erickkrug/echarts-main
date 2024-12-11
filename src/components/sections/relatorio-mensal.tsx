import logoAuster from "../../images-auster/LogoAuster.png";

export default function RelatorioMensal() {
    return (
        <div className = "flex flex-col items-center space-y-24 font-sans text-3xl text-teal-600">
            <div>
                <img src={logoAuster} alt="Logo Auster." />
            </div>
            <div>
                <h1>Relatorio mensal - Indicadores de Atendimentos</h1>
            </div>
            <div>
                <h2> ACELEN </h2>
            </div>
            <div>
                0800 777 3456
            </div>
        </div>
    )
}