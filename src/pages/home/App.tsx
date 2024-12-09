import { Overview } from '../../components/sections/overview'
import RelatorioMensal from '../../components/sections/relatorio-mensal' 
import PessoasAtendidas from '../../components/sections/pessoas-atendidas'

function App() {
  return (
    <>
      <div className='bg-zinc-900 p-4'>
        <div className='border-solid border-4 bg-white rounded-xl p-2'>
          <RelatorioMensal />
        </div>
        <div className='border-solid border-4 bg-white rounded-xl p-2'>
          <PessoasAtendidas />
        </div>
        <div className='border-solid border-4 bg-white rounded-xl p-2'>
          <Overview />
        </div>

      </div>


    </>
  )
}
export default App
