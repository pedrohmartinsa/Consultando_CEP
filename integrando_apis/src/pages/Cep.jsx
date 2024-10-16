import { useEffect, useState } from "react";

function Cep() {

    const [endereco, setEndereco] = useState({})


    const handleCep = (e) => {

        const cep = e.target.value

        setEndereco({
            cep 
        })

        if (cep && cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(dados => {
                    setEndereco(enderecoAntigo => {
                        return {
                            ...enderecoAntigo,
                            rua: dados.logradouro,
                            bairro: dados.bairro,
                            cidade: dados.localidade,
                            uf: dados.uf,

                        }
                    })
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <input className="border border-black" type="text" placeholder="Digite o CEP" onChange={handleCep}/>
                <ul>
                    <li>Cep: {endereco.cep}</li>
                    <li>Rua: {endereco.rua}</li>
                    <li>Bairro: {endereco.bairro}</li>
                    <li>Cidade: {endereco.cidade}</li>
                    <li>UF: {endereco.uf}</li>
                </ul>
            </div>
        </>
    );
}

export default Cep;