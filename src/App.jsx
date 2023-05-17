// import logo from './logo.svg';
// import styles from './App.module.css';

import { createSignal } from 'solid-js';
import banner from './assets/1080x1920.png'
import Card from './components/card';
import { root } from 'postcss';

function App() { // solid idiom write functions in PascalCase()
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  };



  function updatingDocDark() {
    let root = document.documentElement;

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          root.classList.add("theme-dark");
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          root.classList.remove("theme-dark");
      }

  // if NOT set via local storage previously
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          root.classList.remove("theme-dark");
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          root.classList.add("theme-dark");
      }
  }
  console.log(localStorage.getItem('color-theme'))
  console.log(root.classList) // to do: learn how to conditionally render so that the DOM updates to dark mode, my localstorage and dom update properly, but the rendering is wonky!
}
  
  




  // you can write other js code before your returned template
  return ( // your return, you have to return a single root element, such as a div or a fragment (EMpty html object <></>)
    
    <div class="container">
      
      <header class="my-4 p-2 text-xl flex items-center gap-4">
        <span class="material-symbols-outlined cursor-pointer"
        onClick={() => updatingDocDark()}
        >
          light_mode
        </span>
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

// render(() => <ThemeToggler/>,document.getElementById("App")!);

export default App;
