import { ReactElement , useState , useEffect , ChangeEvent , FormEvent} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

type user = {
    id: number;
    name: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}

function Atualizar(): ReactElement{

    const { id } = useParams();

    const [user , setUser] = useState<user>({id: 0, name: "", age: 0, createdAt: "", updatedAt: ""});

    useEffect(() => {

        let url: string = 'http://localhost:3000/atualizar/' + id;

        axios.get(url).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    } , []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({...user , [e.target.name]:e.target.value});
        console.log(user);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let url = 'http://localhost:3000/update';
        axios.put(url , user).then((res) => {
            console.log(res.data);''
        }).catch((err) => {
            console.log(err);
        });
        window.location.reload();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                
                <h2>Atualizar pessoas</h2>
                
                <input type="hidden" name="id" value={id}/>

                <input type="text" name="name" value={user.name} onChange={handleChange}/>
                <br />
                <input type="number" name="age" value={user.age} onChange={handleChange}/>
                <br />
                <button type="submit">Atualizar</button>
            </form>
            <Link to='/dados'><button>Voltar</button></Link>
        </>
    );
}

export default Atualizar;