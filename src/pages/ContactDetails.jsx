import { useParams,useNavigate } from "react-router-dom";

//useParams para aninhar rotas por parametro
//useNavigate para redirecionar paginas por eventos 

const ContactDetails = () =>{
    const {id}= useParams()

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(`mensagem enviada ao contato ${id}`)
        return navigate("/")
    }


    return(

        <div>

            <h1>Exibindo Mais informações do Contato {id}</h1>
            <button onClick={handleClick}>Enviar Mensagem</button>
        </div>


    )




}

export default ContactDetails;