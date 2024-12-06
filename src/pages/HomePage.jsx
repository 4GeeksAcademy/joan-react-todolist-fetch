import { useState } from "react"

import { Badge, Container, Button } from "react-bootstrap"

const objetoInicial = [
    {
        tarea: "First task",
        id: crypto.randomUUID()
    },
    {
        tarea: "Second task",
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
        <Container className="mt-5">
            <Badge className="py-3 px-3 bg-secondary" style={{
                        fontSize: '16px',
                        borderRadius: '5px',
                        width: '100%',
                    }}>
                <h1 className="bg-secondary d-flex align-items-center justify-content-start">To Do List</h1>
                <input
                    type="text"
                    placeholder="Write a new task"
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
                        borderRadius: '5px',
                        width: '100%',
                    }}
                />
            </Badge>
            {lista.map((elemento) => {
                return (
                    <Container className="d-flex align-items-center">
                        <Container className="mt-1 py-2 text-light bg-secondary border rounded">{elemento.tarea}<Button
                            className="text-danger text-fold float-end" 
                            variant="secondary"    
                            size="sm"
                            onClick={() => borrarElements(elemento.id)}
                        ><strong>X</strong></Button></Container>
                    </Container>
                )
            })}
        </Container>

    );

};