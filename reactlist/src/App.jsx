import './App.css'
import { useEffect, useState } from 'react'
import Editar from './assets/editar.svg'
import Deletar from './assets/deletar.svg'
import axios from 'axios'

function App() {
  const [tasklist, setTasklist] = useState([])
  const [taskvalue, setTaskvalue] = useState('')
  const [editmode, setEditmode] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState(0)

  useEffect(() => {
    getTasklist()
  }, [])

  const getTasklist = async () => {
    try {
      const APIReturn = await axios.get('http://localhost:3000/taskpoint')
      setTasklist(APIReturn.data)
    } catch (e) {
      console.log(e)
    }
  }

  const postTasklist = async (item) => {
    item.preventDefault()

    if (taskvalue.trim().length == 0) {
      alert('Digite algo para cadastrar')
      return false
    }

    try {
     const APIReturn = await axios.post('http://localhost:3000/taskpoint', { description: taskvalue })
      await getTasklist()
      setTaskvalue('')
    } catch (error) {
      console.error(error)
    }
  }

  const putTasklist = async (item) => {
    if (item?.preventDefault) {
      item.preventDefault()

      if (taskvalue.trim().length == 0) {
        alert('Digite algo para editar')
        return false
      }

      try {
       const APIReturn = await axios.put(`http://localhost:3000/taskpoint/${editingTaskId}`, { description: taskvalue })
        await getTasklist()
        setTaskvalue('')
        setEditmode(false)
        setEditingTaskId(null)
      } catch (error) {
        console.error(error)
      }

      return
    }

    setTaskvalue(item.description)
    setEditmode(true)
    setEditingTaskId(item.id)
  }

  const deleteTasklist = async (item) => {
    const resposta = confirm(`Deseja realmente deletar a tarefa ${item.description}?`)

    if (!resposta) {
      return false
    }

    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoint/${item.id}`)
      alert(`Tarefa ${item.description} deletada com sucesso`)
      getTasklist()
    } catch (error) {
      console.error(error)
    }
  }

  {/*função q altera o post pro put*/}
  const EditSubmit = (item) => {
    if (editmode) {
      return putTasklist(item)
    }

    return postTasklist(item)
  }

  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'>React List</h1>
      </header>

      <main className='body-section'>
        <form className='cad-task' onSubmit={EditSubmit}>
          <input
            type='text'
            placeholder='escreva alguma coisa'
            className='card-task__entry'
            value={taskvalue}
            onChange={(e) => setTaskvalue(e.target.value)}
          />

          <button className='card-task__btn-confirm'>
            {editmode ? 'Atualizar' : 'Cadastrar'}
          </button>

          {

            editmode && (
              <button className='card-task__btn-cancel' onClick={() => {
                // cancela a edição
                setTaskvalue('')
                setEditmode(false)
                setEditingTaskId(null)
              }}>
                Cancelar
              </button>
            )
                  
          }

        </form>

        <section className='card-list'>
          {tasklist.map((task) => {
            return (
              <article className='cardtask' key={task.id}>
                <p>{task.description}</p>
                <div className='icon-botton'>
                  <button
                    type='button'
                    className='icon-button'
                    onClick={() => putTasklist(task)}
                  >
                    <img src={Editar} alt='imagem de um lapis com um papel, função de editar' />
                  </button>
                  <button
                    type='button'
                    className='icon-button'
                    onClick={() => deleteTasklist(task)}
                  >
                    <img src={Deletar} alt='imagem de um lixeira, função de deletar' />
                  </button>
                </div>
              </article>
            )
          })}
        </section>
      </main>

      <footer className='footer-list'>
        <p className='footer-list__right-text'>2026 - React List - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
