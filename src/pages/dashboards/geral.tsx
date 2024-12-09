import './geral.css'
import { Overview } from '../../components/sections/overview'
import  RelatorioMensal  from '../../components/sections/relatorio-mensal'

function Geral() {

  return (
    <>
    <div className='border-solid border-8'>
      <RelatorioMensal/>
    </div>
    <div className='border-solid border-8'>
      <Overview/>
    </div>
    </>
  )
}

export default Geral
