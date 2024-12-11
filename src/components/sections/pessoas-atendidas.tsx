import atendWhatsapp from "../../images-auster/AtendWhatsappAuster.png";
import pessoasaatendidas from "../../images-auster/PessoasAtendidas.png";

export default function PessoasAtendidas() {
    return (
        <div className="flex flex-col items-center space-y-14 font-sans text-3xl">
            <div className="flex items-center">
                <img src={atendWhatsapp} alt="AtendimentoWhatsapp" className="mr-4" />
                <h1 className="text-2xl">Atendimentos</h1>
            </div>

            <div className="flex w-full justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-1 ">
                    <h1>Junho</h1>
                    <div className="flex justify-center items-center border-gray-950 shadow-md rounded-sm w-64 h-28">
                        <p className="text-3xl font-semibold">40</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <h1>Julho</h1>
                    <div className="flex justify-center items-center border-gray-950 shadow-md  w-64 h-28">
                        <p className="text-3xl font-semibold">40</p>
                    </div>
                </div> 
            </div>



            <div className="flex items-center">
                <img src={pessoasaatendidas} alt="PessoasAtendidasIcone" className="mr-4" />
                <h1 className="text-2xl">Pessoas Atendidas</h1>
            </div>

            
            <div className="flex w-full justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-1 ">
                    <h1>Junho</h1>
                    <div className="flex justify-center items-center border-gray-950 shadow-md w-64 h-28">
                        <p className="text-3xl font-semibold">8</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <h1>Julho</h1>
                    <div className="flex justify-center items-center border-gray-950 shadow-md w-64 h-28">
                        <p className="text-3xl font-semibold">10</p>
                    </div>
                </div> 
            </div>



        </div>
    )
}