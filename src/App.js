import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Categories from './pages/Categories';
import BookList from './pages/BookList';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
