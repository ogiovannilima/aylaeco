import people from '../../assets/people.png'
import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <S.Logo>AYLA&CO</S.Logo>
      <S.NavBar>
        <S.NavItems>
          <a href="google.com">Serviços e Consultoria</a>
        </S.NavItems>
        <S.NavItems>
          <a href="google.com">Serviços</a>
        </S.NavItems>
        <S.NavItems>
          <a href="google.com">Conheça</a>
        </S.NavItems>
        <S.NavItems>
          <a href="google.com">Contate a AYLA&CO</a>
        </S.NavItems>
      </S.NavBar>
      <S.Content>
        <span>
          <S.Title>
            Serviços de terceirização de processos de negócios (BPO) para
            continuidade de negócios e resiliência
          </S.Title>
          <S.Text>
            Em tempos desafiadores, veja como nossos especialistas em
            terceirização de processos de negócios podem criar a continuidade de
            negócios para oferecer melhores fluxos de trabalho inteligentes para
            a transformação de sua empresa.
          </S.Text>
        </span>
        <span>
          <img src={people} alt="people" />
        </span>
      </S.Content>
      <S.Divider />

      <S.ContentMid>
        <S.Title>O que é a BPO para fluxos de trabalho inteligente?</S.Title>
        <S.TextMid>
          As tecnologias digitais criaram novas oportunidades para os líderes de
          negócios. Os modelos de terceirização de processos de negócios e
          operações tradicionais estão sendo reinventados por meio de fluxos de
          trabalho mais inteligentes, utilizando automação, inteligência
          artificial, Internet das Coisas (IoT), cloud e outras tecnologias
          emergentes. Para continuar relevante e crescer,as empresas devem
          evoluir constantemente para obter processos mais inteligentes e
          orquestrados, que levem em consideração os clientes, os funcionários,
          os fornecedores e os parceiros de negócios.
        </S.TextMid>
      </S.ContentMid>
      <S.Divider />
    </S.Container>
  )
}
