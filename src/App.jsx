import './App.scss'
import Categorieslist from './component/Categories-list/Categorieslist'
import Header from './component/header/header'
import ProductMain from './component/ProductCard/ProductMain'


function App() {
  return(
    <div>
      <Header />
      <Categorieslist />
      <ProductMain />
    </div>
  )
}

export default App
