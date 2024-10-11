import { useState } from "react";

function Cep() {

    const [endereco, setEndereco] = useState('')

    const handleCep = (e) => {
        setEndereco(e.target.value)
    }

    return ( 
        <>
            <div className="flex flex-col gap-3">
                <input className="border border-black" type="text" placeholder="Digite o CEP" onChange={handleCep}/>
                <p>CEP: {endereco}</p>
                
            </div>
        </>
     );
}

export default Cep;