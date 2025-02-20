function ListGroup() {
    const items = ["COD", "Battlefield" ,"Warcraft" , "IGI", "GTA"]
  return (
    <>
    <h1>List</h1>
    <ul className="list-group">
    {items.map(item => (<li className="list-group-item" key={item}>{item}</li>))}
    </ul>
    </>
  );
}

export default ListGroup;
