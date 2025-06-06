import { useEffect, useState } from "react"

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/GuilhermeocM/repos')
        .then(resposta => resposta.json())
        .then(respostaJson => {
            setTimeout(() => {
                setCarregando(false)
                setRepos(respostaJson)
            }, 3000)
        })
    }, [])

    return (
        <>
        {carregando && (
        <h1>Carregando...</h1>
        )}

        <ul>
            {/* {repos.map(repositorio => ( */}
            {repos.map(({ id, name, language, html_url }) => (
                <li key={id}>
                    <b>Nome: </b> {name}
                    <b> Linguagem: </b> {language}
                    <a target="_blank" href={html_url}> Visitar no github</a>
                </li>
            ) )}
        </ul>
        </>
    )
}

export default ReposList