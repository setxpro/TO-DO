import { useState } from 'react';

import * as C from './styles/GlobalStyle';

import { Item } from './types/Item';

import { AddArea } from './components/AddArea';

import  ListItem  from './components/ListItem';


const App = () => {

  //dentro do State eu vou ter um Array de itens ..... <Item>[]
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]; // clonar a lista
    newList.push({
      id: list.length + 1, // pega o ultimo e acrescenta + 1
      name: taskName,
      done: false
    }); //adicionar um item novo

    setList(newList); // Update to list
  }

  return(
    <C.Container>
      <C.GlobalStyle/>
      <C.AreaContent>
        <C.Title>Lista de Tarefas</C.Title>

          {/* Área de Adicionar nova tarefa */}
           <AddArea onEnter={handleAddTask}/>
        

          {/* Lista de tarefas */}
          {list.map((item, index)=>(
             <ListItem key={index} item={item}/>
          ))}

      </C.AreaContent>
    </C.Container>
  );

}

export default App;