import './perfil.css'

const Perfil = ({endereco, nome}) => {
    // const usuario ={
    //     nome: 'Guilherme Mascarenhas',
    //     avatar: 'https://github.com/GuilhermeocM.png'

    // }

    // const {endereco, nome} = props

    return (
        <div>
            <img className='perfil-avatar' src={endereco}/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

export default Perfil