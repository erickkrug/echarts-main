import './App.css'
import { Overview } from '../../components/sections/overview'
import  RelatorioMensal  from '../../components/sections/relatorio-mensal'

function App() {

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

export default App
