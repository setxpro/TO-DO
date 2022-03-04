import { useState } from 'react';

import * as C from './styles';

import { Item } from '../../types/Item';

// indicar todo que será recebido
type Props = {
    item: Item;
}

const ListItem: React.FC<Props> = ({ item }) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return(
        //passando o elemento done para dentro do container
        <C.Container done={isChecked}>
            <input
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}

export default ListItem;