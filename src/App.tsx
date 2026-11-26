import { useEffect, useState } from 'react'
import './App.css'
import type { Jogo } from './types'
import { buscarJogos, sortearJogo } from './data/jogos'
import { modos } from './data/modos'
import Apresentacao from './components/Apresentacao'
import ListaModos from './components/ListaModos'
import ComoJogar from './components/ComoJogar'
import Cabecalho from './components/Cabecalho'
import Pista from './components/Pista'
import Dicas from './components/Dicas'
import FormChute from './components/FormChute'
import Acerto from './components/Acerto'
import ListaChutes from './components/ListaChutes'
import GradeJogos from './components/GradeJogos'
import Rodape from './components/Rodape'
import Carregando from './components/Carregando'

function App() {
  // ===== Estado =====
  // Modo escolhido (null = tela inicial)
  const [modoAtivo, setModoAtivo] = useState<string | null>(null)
  // Jogos da listagem principal (começa vazio e é preenchido pelo fetch)
  const [jogos, setJogos] = useState<Jogo[]>([])
  // Jogo que o jogador precisa descobrir (null até os jogos chegarem)
  const [jogoSecreto, setJogoSecreto] = useState<Jogo | null>(null)
  // true enquanto o fetch não terminou
  const [carregando, setCarregando] = useState(true)
  // Jogos já chutados, do mais recente para o mais antigo
  const [chutes, setChutes] = useState<Jogo[]>([])
  // Rótulos das dicas que o jogador já revelou
  const [dicasReveladas, setDicasReveladas] = useState<string[]>([])
  // Tema da página
  const [temaEscuro, setTemaEscuro] = useState(false)

  // ===== Busca dos dados externos =====
  // O array vazio [] faz o efeito rodar só uma vez, quando a página abre
  useEffect(() => {
    async function carregarJogos() {
      const dados = await buscarJogos()
      setJogos(dados)
      setJogoSecreto(sortearJogo(dados))
      setCarregando(false)
    }
    carregarJogos()
  }, [])

  // ===== Valores calculados a partir do estado =====
  const modo = modos.find((item) => item.id === modoAtivo)
  const acertou = jogoSecreto !== null && chutes.some((chute) => chute.id === jogoSecreto.id)
  const erros = chutes.length - (acertou ? 1 : 0)
  const dicasLiberadas = erros >= 3

  // ===== Funções que mudam o estado (passadas por props) =====
  function escolherModo(id: string) {
    setModoAtivo(id)
    window.scrollTo(0, 0)
  }

  function voltarInicio() {
    setModoAtivo(null)
  }

  function chutar(jogo: Jogo) {
    const jaChutou = chutes.some((chute) => chute.id === jogo.id)
    if (acertou || jaChutou) {
      return
    }
    setChutes([jogo, ...chutes])
  }

  function revelarDica(rotulo: string) {
    setDicasReveladas([...dicasReveladas, rotulo])
  }

  function jogarDeNovo() {
    setJogoSecreto(sortearJogo(jogos))
    setChutes([])
    setDicasReveladas([])
  }

  function trocarTema() {
    setTemaEscuro(!temaEscuro)
  }

  // ===== Composição da página =====
  return (
    <div className={temaEscuro ? 'pagina tema-escuro' : 'pagina'}>
      <main>
        {/* Sem modo escolhido: mostra a tela inicial */}
        {!modo && (
          <section className="tela-inicial conteudo">
            <Apresentacao />
            <ListaModos modos={modos} onEscolher={escolherModo} />
            <ComoJogar />
          </section>
        )}

        {/* Com modo escolhido: mostra a tela do jogo */}
        {modo && (
          <section className="tela-jogo">
            <Cabecalho
              modos={modos}
              modoAtivo={modo.id}
              onTrocarModo={escolherModo}
              onVoltarInicio={voltarInicio}
            />

            {/* Enquanto os dados não chegam */}
            {carregando && <Carregando />}

            {/* A área do jogo só aparece depois que os jogos chegam */}
            {jogoSecreto && (
              <div className="conteudo jogo">
                <div className="jogo-colunas">
                  {/* Coluna da esquerda no desktop: pista e dicas */}
                  <div>
                    <Pista modo={modo} jogo={jogoSecreto} erros={erros} acertou={acertou} />
                    {!acertou && (
                      <Dicas
                        jogo={jogoSecreto}
                        liberadas={dicasLiberadas}
                        reveladas={dicasReveladas}
                        onRevelar={revelarDica}
                      />
                    )}
                  </div>

                  {/* Coluna da direita no desktop: chute e histórico */}
                  <div className="area-chute">
                    <p className="tentativas">Tentativas: {chutes.length}</p>
                    {acertou ? (
                      <Acerto jogo={jogoSecreto} onJogarDeNovo={jogarDeNovo} />
                    ) : (
                      <FormChute jogos={jogos} onChutar={chutar} />
                    )}
                    <ListaChutes chutes={chutes} jogoSecreto={jogoSecreto} />
                  </div>
                </div>

                <GradeJogos
                  jogos={jogos}
                  chutes={chutes}
                  jogoSecreto={jogoSecreto}
                  onChutar={chutar}
                />
              </div>
            )}
          </section>
        )}
      </main>

      <Rodape temaEscuro={temaEscuro} onTrocarTema={trocarTema} />
    </div>
  )
}

export default App
