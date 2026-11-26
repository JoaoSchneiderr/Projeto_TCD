type ErroCarregamentoProps = {
  mensagem: string
}

// Estado de erro: aparece quando o fetch dos jogos falha
function ErroCarregamento({ mensagem }: ErroCarregamentoProps) {
  // Recarrega a página para tentar buscar os jogos de novo
  function tentarDeNovo() {
    window.location.reload()
  }

  return (
    <div className="conteudo">
      <div className="erro-carregamento" role="alert">
        <p className="erro-titulo">Ops! Algo deu errado.</p>
        <p className="erro-mensagem">{mensagem}</p>
        <button type="button" className="botao erro-botao" onClick={tentarDeNovo}>
          Tentar de novo
        </button>
      </div>
    </div>
  )
}

export default ErroCarregamento
