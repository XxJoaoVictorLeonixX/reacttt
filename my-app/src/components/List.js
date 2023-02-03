import Item from './Item'

function List(){
    return(
      <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca = 'Ferrari'/>
            <Item marca = 'Fiati'/>
            <Item marca = 'Nike'/>
        </ul>
      </>
    )
}
export default List