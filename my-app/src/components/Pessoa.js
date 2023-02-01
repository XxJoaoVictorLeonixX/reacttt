function Pessoa({nome,idade,prof,foto}){
    return(
        <div>
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {prof}</p>
        </div>
    )
}
export default Pessoa