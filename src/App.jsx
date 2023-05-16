// import logo from './logo.svg';
// import styles from './App.module.css';

import banner from './assets/1080x1920.png'
import Card from './components/card';

function App() { // solid idiom write functions in PascalCase()

  // you can write other js code before your returned template
  return ( // your return, you have to return a single root element, such as a div or a fragment (EMpty html object <></>)
    <div class="container">
      <header>
        <h1>Big Boi Merch</h1>
      </header>

      <div class="bg-[url('./assets/1080x1920.png')] mx-auto h-32 max-w-full overflow-y-scroll bg-cover bg-fixed bg-right bg-no-repeat"
      >
      </div>
      

      <div id="item-cards" class="grid grid-cols-4 gap-11 my-4 p-5">
      
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
    

    );
}

export default App;
