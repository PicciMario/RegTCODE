import * as React from 'react';
import './App.css';
import Menubar from './components/menubar/Menubar';
import RegList from './components/reg_list/RegList';
import elements from './resources/transactions.json';
import BottomBar from './components/bottombar';

export default function App() {

  const [navHistory, setNavHistoryProp] = React.useState([]);
  const [searchText, setSearchTextProp] = React.useState("");

  const navTo = (newCurrLevel) => {
    setNavHistoryProp(curr => [...curr, newCurrLevel])
  }

  const navBack = () => {
    setNavHistoryProp(curr => curr.length <= 1 ? [] : [...curr.slice(0, curr.length - 1)])
  }

  const navRoot = () => {
    setNavHistoryProp(_ => [])
  }

  const setSearchText = (text) => {
    console.log(text)
    setSearchTextProp(_ => text)
  }

  const currTitle = () => {
    if (navHistory.length <= 0) {
      return "RegTCodes"
    }
    let currItem = elements.find(item => item.id === navHistory[navHistory.length - 1]);
    return currItem.secondaryText || currItem.text;
  }

  return (
    <div className="App">
      <Menubar
        title={currTitle()}
        navBack={navHistory.length > 0 ? navBack : null}
      />
      <RegList
        elements={
          elements
            .filter(item => item.parent === navHistory[navHistory.length - 1])
            .map(item => ({ ...item, hasChildren: elements.filter(child => child.parent === item.id).length > 0 }))
        }
        navTo={navTo}
      />


      <BottomBar
        navRoot={navRoot}
        searchText={searchText}
        setSearchText={setSearchText}
      />

    </div>
  );
}
