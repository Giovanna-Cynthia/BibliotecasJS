import { useState } from "react";
import "./form.css"

const Form = () => {

    //Estadi inicial
    const  initilForm = {
        nome: "",
    }

    //formState -> pega as informacoes
    //setFormState -> seta a nova infromação
    //Estado do formulario
    const[formState, setFormState] = useState(initilForm);

    //Funçaõ para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
        //Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;
        //Extrair o valor e o nome do campo de entrada
        const {value, name} = target;

        //Atualizar o estado do formlario com os novos valores
        setFormState({...formState, [name]: value});
    }

    //Função para lidar com a submisao do formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome);

        setFormState({ ...initilForm });
    }

    return(
    <div className="containerForm">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <h2 className="h2Form">Cadastre seu nome</h2>
                    <label htmlFor="nome"><i>Nome: </i></label>
                    <input 
                    type="text"
                    id="nome"
                    name="nome"
                    value={formState.nome}

                    
                    onChange={handleInput}
                    />
                </div>

                <div className="form-control">
                        <button type="submit">Enviar</button>
                </div>

            </form>
        </div>
    </div>
    )
}

export default Form;
