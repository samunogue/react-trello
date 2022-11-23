import './style.css'
export const Card = ({ tarefas }) => {
  return (
    <div className='card'>
      <div className='box_titulo'>
        <p className='titulo'>Tarefas Card 1</p>
        <button className='botao_excluir_card'>Options</button>
      </div>
      <div className='conteudo_card'>
        {tarefas.map(tarefa =>
          <div className='tarefa' key={tarefa.id}>
            <p>{tarefa.conteudo}</p>
            <button className="botao_excluir_tarefa">X</button>
          </div>
        )}
      </div>
    </div>
  )
}