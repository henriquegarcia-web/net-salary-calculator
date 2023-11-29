import styled from 'styled-components'

export const CalculatorPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  padding: 40px 20px 20px 20px;
`

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  width: 100%;
  max-width: 1000px;
  padding: 30px;
  border-radius: 10px;

  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const CalculatorHeader = styled.div`
  display: flex;
  width: 100%;

  font-size: 18px;
  font-weight: 600;
`

export const CalculatorWrapper = styled.div`
  display: flex;
  width: 100%;

  .ant-form-item {
    margin: 0;
  }

  .ant-space-item {
    flex: 1;
  }
`

export const CalculatorInputs = styled.div`
  display: flex;
`

export const CalculatorResults = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const CalculatorResultsHeader = styled.div`
  display: flex;

  font-size: 18px;
  font-weight: 600;
`

export const CalculatorResultsWrapper = styled.div`
  display: flex;
`
