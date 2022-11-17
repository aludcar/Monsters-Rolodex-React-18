import { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[valueStore, setValueStore] it was initiated ''
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters)

  /**
   * cuando el array de depencias esta vacio, este useEffect se dispara solo una vez
   */
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users))
    .catch();
  },[])

  /*** Recuerde que el use effect previene que se este corriendo codigo cada vez que se renderiza el componente
   *  este recibe dos parametros, un callback y un array de dependencias
   *  el callback es el codigo que se ejecuta 
   *  y las depencias son las variables que disparan el useEffect
   *  en este caso, si mi array monsters cambia o el searchField cambian del valor en memoria que tienen
   *  disparan el use effect
   */
  useEffect(()=>{
    setfilteredMonsters(monsters.filter((monster)=>
    monster.name.toLocaleLowerCase().includes(searchField)))
  }, [monsters, searchField])



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChangeHandler={onSearchChange}
        placeholder={"Serach Monsters"}
        classname={"search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      )
      .catch();
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  }

  render() {

    const {monsters, searchField } = this.state
    const { onSearchChange } = this; 

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
      <SearchBox onSearchChangeHandler={onSearchChange} placeholder={"Serach Monsters"} classname={'search-box'}/>
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}*/

export default App;
