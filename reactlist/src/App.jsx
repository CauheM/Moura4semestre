import './App.css'
import { useState } from 'react'
import Editar from "./assets/editar.svg"
import Deletar from "./assets/deletar.svg"

function App() {
  //states
  const [tasklist, setTasklist] = useState([
    {id: 1, description: "estudar react"},
    {id: 2, description: "estudar javascript"},
    {id: 3, description: "estudar HTML"},
    {id: 4, description: "estudar algo que eu não sei ainda e tbm não sei se vou aprender"},
  ])
  //effects
  //funções


  return (
    <>

    <header className='header-section'>

     <h1 className='header-section__title'>React List</h1>

    </header>

    <main className='body-section'>

      <form className='cad-task'>

        <input type="text" placeholder='escreva alguma coisa' className='card-task__entry' />

        <button className='card-task__btn-confirm'>Cadastrar</button>

      </form>

      <section className='card-list'>

        {
          tasklist.map((task) => {
            return (
              <article className='cardtask' key={task.id}>
                <p>{task.description}</p>
                <div className='icon-botton'>
                  <a href="">
                    <img src={Editar} alt="" />
                  </a>
                  <a href="">
                    <img src={Deletar} alt="" />
                  </a>
                </div>
              </article>
            )
          })
        }

      </section>

    </main>

    <footer className='footer-list'>

      <p className='footer-list__right-text'>2026 - React List - Todos os direitos reservados</p>

    </footer>

    </>
  )
}

export default App
