import { useState } from "react"

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
    const [inputValue, setInputVAlue] = useState("")

    const borrarElements = (id) => {
        setLista(
            lista.filter((elemento) => {
                return elemento.id !== id
            })
        )
    }

    return (
        <>
            <input value={inputValue} onKeyDown={(e) => {
                console.log(e);
                if (e.code === "Enter") {
                    const aux = [...lista,
                    {
                        tarea: e.target.value,
                        id: crypto.randomUUID()
                    }
                    ]
                }

            }} />
            {lista.map((elemento) => {
                return (
                    <>
                        <div>{elemento.tarea}</div>
                        <span onClick={() => {
                            return borrarElements(elemento.id)
                        }}>X</span>
                    </>
                )
            })}
        </>

    );

};