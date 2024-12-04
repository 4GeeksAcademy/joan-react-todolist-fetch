import { useState } from "react"

import { Container, Button } from "react-bootstrap"

const objetoInicial = [
    {
        tarea: "Elemento 1",
        id: crypto.randomUUID()
    },
    {
        tarea: "Elemento 2",
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
        <Container className="mt-4">
            <Container>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea"
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
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
                    }}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '2px solid #007bff',
                        borderRadius: '5px',
                        width: '100%',
                    }}
                />
            </Container>
            {lista.map((elemento) => {
                return (
                    <Container>
                        <Container className="p-2 bg-light border rounded">{elemento.tarea}<Button
                            className="text-danger text-fold float-end" 
                            variant="light"    
                            size="sm"
                            onClick={() => borrarElements(elemento.id)}
                        ><strong>X</strong></Button></Container>
                    </Container>
                )
            })}
        </Container>

    );

};