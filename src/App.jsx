import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"


function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  let pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = false

  return(
    <>
    <Perfil nome='Guilherme Mascarenhas' endereco='https://github.com/GuilhermeocM.png' />
    

    <ReposList />
    
    {formularioEstaVisivel && <Formulario />}

    <h1>Os cavaleiros do zodiaco</h1>
    <h2>A batalha da CLT</h2>
    <p>{ pessoa.nome }</p>
    {estaDeDia ? 'Bom dia' : 'Boa tarde' }
    <br />

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel) } type="button">Toggle form</button>
    </>
  )

}

export default App
