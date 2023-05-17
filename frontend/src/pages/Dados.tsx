import { ReactElement , useState , useEffect, ChangeEvent } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../style/Dados.css';

type dado = {
    id: number;
    name: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}

function Dados(): ReactElement{
    
    const [dado , setDado] = useState<dado[]>([]);
    const [busca , setBusca] = useState<string>("");

    useEffect(() => {
        axios.get('http://localhost:3000/dados').then((res) => {
            setDado(res.data);
        }).catch((err) => {
            console.log(err);
        })
    } , []);

    const search = dado.filter((val) => 
        val.name.toLowerCase().includes(busca.toLocaleLowerCase())
    )

    const handleDelete = (id: number) => {
        let url = "http://localhost:3000/deletar/" + id;
        
        axios.delete(url).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });

        window.location.reload();
    }

    const maping = search.map((val , key) => {

        let url: string = '/atualizar/' + val.id;

        return(
            <div key={key} className="box">
                <p>ID: {val.id}</p>
                <p>{val.name} tem {val.age} anos de idade</p>
                <Link to={url}><button>Atualizar</button></Link>
                <button onClick={() => handleDelete(val.id)}>Deletar</button>
            </div>
        );
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBusca(e.target.value);
    }
    
    return(
        <>
            <Link to="/"><button>Voltar</button></Link>
            <input type="text" name="busca" placeholder="Faça sua busca..." onChange={handleChange}/>
            {maping}
        </>
    );
}

export default Dados;