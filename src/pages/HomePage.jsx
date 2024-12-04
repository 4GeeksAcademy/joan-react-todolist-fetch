import { useState } from "react"

import { Container } from "react-bootstrap"

const objetoInicial = [
    {
        tarea: "El1",
        id: crypto.randomUUID()
    },
    {
        tarea: "El2",
        id: crypto.randomUUID()
    }
]

export const HomePage = () => {
    const [lista, setLista] = useState(objetoInicial)
    const [inputValue, setInputValue] = useState("")

    const borrarElements = (id) => {
        setLista(
            lista.filter((elemento) => {
                return elemento.id !== id
            })
        )
    }

    return (
        <Container>
            <Container>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
                    console.log(e);
                    if (e.code === "Enter" && inputValue.trim() !== "") {
                        const nuevaTarea =
                        {
                            tarea: inputValue,
                            id: crypto.randomUUID()
                        };               
                    setLista([...lista, nuevaTarea]);
                    setInputValue("");
                };
                }} />
            </Container>
            {lista.map((elemento) => {
                return (
                    <Container>
                        <div>{elemento.tarea}</div>
                        <span onClick={() => {
                            return borrarElements(elemento.id)
                        }}>X</span>
                    </Container>
                )
            })}
        </Container>

    );

};