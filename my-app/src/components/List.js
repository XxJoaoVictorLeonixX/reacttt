import Item from './Item'

function List(){
    return(
      <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca = 'Ferrari' ano_lancamento={1905}/>
            <Item marca = 'Fiati' ano_lancamento={1900}/>
            <Item marca = 'Nike' ano_lancamento = {2000}/>
            <Item/>
        </ul>
      </>
    )
}
export default List