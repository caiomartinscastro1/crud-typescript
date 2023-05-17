import { ChangeEvent, ReactElement , useState , FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type user = {
    id: number;
    name: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}

function Cadastro(): ReactElement{

    const [user , setUser] = useState<user>({id: 0 , name: "", age: 0, createdAt: "" , updatedAt: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user , [e.target.name]: e.target.value});
        console.log(user);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        let url: string = 'http://localhost:3000/cadastro';
        axios.post(url , user).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
        window.location.reload();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Cadastro de pessoas</h2>

                <input type="text" name="name" placeholder="Digite o seu nome..." onChange={handleChange}/>
                <br />
                <input type="number" name="age" placeholder="Digite a sua idade"  onChange={handleChange}/>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/dados"><button>Ver registros</button></Link>
        </>
    );
}

export default Cadastro;