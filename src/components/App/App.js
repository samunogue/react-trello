import './App.css';
import { Header } from '../header/index.jsx';
import {Card} from '../Card/index.jsx'
function App() {
  var tarefas = []
  var tarefaTeste1 = {id:"1",conteudo:"Tarefa 1"}
  var tarefaTeste2 = {id:"2",conteudo:"Tarefa 2aaaaaaaaaaa asdfadfsdf aaaaaaaaa fdsssdfdsf dsfsfsfsfsf dsffdssdfdfs asdddddddddddddddddddddddddddassss aaaaaaaaaas"}
  tarefas.push(tarefaTeste1)
  tarefas.push(tarefaTeste2)
  return (
    <>
      <Header />
      <Card tarefas={tarefas}/>
    </>
  )
}

export default App;
