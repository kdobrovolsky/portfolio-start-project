import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Slogan } from './layout/sections/slogan/Slogan'
import { Main } from './layout/sections/main/Main'
import { Skills } from './layout/sections/skills/Skills'
import { Works } from './layout/sections/works/Works'
import { Contacts } from './layout/sections/contacts/Contacts'

function App() {
  return(
    <div className='App'>
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Works/>
        <Contacts/>
        <Slogan/>
        <Footer/>
    </div>
  )

  
}

export default App
