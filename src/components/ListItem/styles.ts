import styled from 'styled-components';


type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>(({ done })=>(

    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    margin-top: 1rem;

    input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }

    label {
        color: #eee;

        text-decoration: ${done ? 'line-through' : 'initial'};  
    }
`
));
