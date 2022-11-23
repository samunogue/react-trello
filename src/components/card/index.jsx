import './style.css'
export const Card = () =>{
    return(
        <div className='card'>
            <div className='titulo'>
                <button className=''>X</button>
            </div>
        </div>
    )
}
var corpo = document.createElement("div");
    var div_titulo = document.createElement("div");
    var botao_excluir_card = document.createElement("button")
    var titulo_card = document.createElement("p");
    var botao_adicionar_tarefa = document.createElement("button")
    var conteudo_card = document.createElement("div")

    corpo.classList.add("card")
    div_titulo.classList.add("titulo_card")
    botao_adicionar_tarefa.classList.add("botao_adicionar_tarefa")
    botao_excluir_card.classList.add("botao_excluir_card")
    conteudo_card.classList.add("dropzone")
    botao_excluir_card.innerHTML = "X"
    botao_adicionar_tarefa.innerHTML = "+ tarefa"