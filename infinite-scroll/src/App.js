import './App.css';
import MockComponent from './MockComponent.tsx';


const App= () => {
  return (
    <div className="App">
      <MockComponent data={{
        productId: '1234',
        productName: 'Product Name',
        price: 123.45,
        boughtDate: '2021-01-01'
      }} />
    </div>
  );
}

export default App;
