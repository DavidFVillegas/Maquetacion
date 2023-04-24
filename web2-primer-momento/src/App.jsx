import Navbar from './Navbar';
import './index.css';
import Container from './Container'

function App() {  

  return (
      <section className='body'>
        <section className='container'>
          <Navbar/>
          <hr class="divider" />
          <Container/>
        </section>
      </section>
  )
}

export default App
