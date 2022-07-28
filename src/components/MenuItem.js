import MenuData from '../data/MenuData'
// function MenuItem({ name, creatingOrder, price, id }) {
    const dataTablas = MenuData.filter(product => product.kind === "tablas");
    console.log(dataTablas)
    const dataTablasVeg = MenuData.filter(product => product.kind === "tablasVeg")
    console.log(dataTablasVeg)
    const dataBebestibles = MenuData.filter(product => product.kind === "bebestibles")
    console.log(dataBebestibles)
    const dataPostres = MenuData.filter(product => product.kind === "postres")
    console.log(dataPostres)
//     return (
//         <button onClick= {() => creatingOrder(name, price, id)} className="buttonOptions">{name}</button>
//     );
//   }
  
//   export default MenuItem;