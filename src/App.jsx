import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"


function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  let pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = false

  return(
    <>
    {nomeUsuario.length > 4 && (
      <Perfil nomeUsuario={nomeUsuario} />
    )}
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    {nomeUsuario.length > 4 && (
      <ReposList nomeUsuario={nomeUsuario} />
    )}
    
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
