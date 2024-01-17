import { styled } from '@mui/material'

interface Props {
  firstColumn?: 1 | 2 | 3 | 4 | 5 | 6
  secondColumn?: 1 | 2 | 3 | 4 | 5 | 6
}

export const RowContainer = styled('div')(
  ({ firstColumn = 1, secondColumn = 1 }: Props) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: white;
  padding: 20px 5px 10px;
  margin-bottom: 20px;
  
  > div {
    border-left: 1px solid #D6ECFF;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  > div:first-child {
    flex: ${firstColumn};
    border-left: 0;
    padding-left: 0;
  }
  
  > div:last-child {
    flex: ${secondColumn};
    padding-right: 0;
  }
`
)

export const SecondRowContainer = styled(RowContainer)`
  padding-top: 30px;
  margin-bottom: 0;
`

export const FlexRowContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > div:first-child {
    width: 60%;
    padding-right: 10px;
  }

  > div:last-child {
    width: 20%;
    padding-left: 10px;
  }
`
