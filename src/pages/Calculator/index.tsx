import * as S from './styles'

import { Input, Form, Space } from 'antd'

const Calculator = () => {
  return (
    <S.CalculatorPage>
      <S.CalculatorContainer>
        <S.Calculator>
          <S.CalculatorHeader>Meu cálculo</S.CalculatorHeader>
          <S.CalculatorWrapper>
            <Form
              layout="vertical"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              // autoComplete="off"
              style={{ width: '100%' }}
            >
              <Space style={{ width: '100%' }}>
                <Form.Item label="Salário Bruto">
                  <Input addonBefore="R$" placeholder="Salário Bruto" />
                </Form.Item>
                <Form.Item label="Descontos">
                  <Input addonBefore="R$" placeholder="Descontos" />
                </Form.Item>
                <Form.Item label="Benefícios">
                  <Input addonBefore="R$" placeholder="Benefícios" />
                </Form.Item>
                <Form.Item label="Dependentes">
                  <Input placeholder="Dependentes" />
                </Form.Item>
              </Space>
            </Form>
            <S.CalculatorInputs></S.CalculatorInputs>
          </S.CalculatorWrapper>
        </S.Calculator>
        <S.CalculatorResults>
          <S.CalculatorResultsHeader>Resultado</S.CalculatorResultsHeader>
          <S.CalculatorResultsWrapper></S.CalculatorResultsWrapper>
        </S.CalculatorResults>
      </S.CalculatorContainer>
    </S.CalculatorPage>
  )
}

export default Calculator
