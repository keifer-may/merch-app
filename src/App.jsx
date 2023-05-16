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
      
        {/* <Card title="Big Boi Tee" /> */}

        <Card rounded={true} flat={false}>
          <h2>Big Boi Tee, Black</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quibusdam exercitationem doloremque, quas ratione nisi?</p>
          <button class="btn">view</button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Big Boi Tee, Gray</h2>
          <button class="btn">view</button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quibusdam exercitationem doloremque, quas ratione nisi?</p>
          <p>Only $10</p>
        </Card>

        {/* <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/>
        <Card title="Big Boi Tee"/> */}

      </div>
    </div>
    

    );
}

export default App;
