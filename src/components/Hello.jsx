import react from 'react';

function Hello(props){
    return(
        <div className="Hello">
            <p>Id: {props.id}</p>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
            <img src={ props.image }  width={133} height={122} alt="sneakers"/>
        </div>
    );
}

export default Hello;
