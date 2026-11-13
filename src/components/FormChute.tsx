import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Jogo } from '../types'

type FormChuteProps = {
  jogos: Jogo[]
  onChutar: (jogo: Jogo) => void
}

// Campo para digitar o chute, com sugestões que aparecem enquanto digita
function FormChute({ jogos, onChutar }: FormChuteProps) {
  // O texto digitado só interessa a este componente, então o estado fica aqui
  const [texto, setTexto] = useState('')

  // Jogos cujo nome contém o texto digitado (no máximo 3)
  const sugestoes = jogos
    .filter((jogo) => jogo.nome.toLowerCase().includes(texto.toLowerCase()))
    .slice(0, 3)

  function chutar(jogo: Jogo) {
    onChutar(jogo)
    setTexto('')
  }

  // Ao apertar Enter ou o botão, chuta a primeira sugestão
  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    if (texto !== '' && sugestoes.length > 0) {
      chutar(sugestoes[0])
    }
  }

  return (
    <>
      <form className="form-chute" onSubmit={enviar}>
        <input
          type="text"
          placeholder="Digite o nome do jogo..."
          aria-label="Nome do jogo"
          className="campo"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
        />
        <button type="submit" className="botao">
          Chutar
        </button>
      </form>

      {texto !== '' && sugestoes.length > 0 && (
        <ul className="sugestoes">
          {sugestoes.map((jogo) => (
            <li key={jogo.id}>
              <button type="button" className="sugestao" onClick={() => chutar(jogo)}>
                {jogo.nome}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FormChute
