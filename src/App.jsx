import { Products } from './Components/Products';
import Contents from './Contents';
import './App.css'

export default function App() {
  return (
    <div className='App'>
      {Contents.map(content => (
        <Products
          key={content.id}
          image={content.image}
          name={content.name}
          price={content.price}
          totalSales={content.totalSales}
          timeLeft={content.timeLeft}
          rating={content.rating}
        />
      ))}
    </div>
  );
}
