import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
  width: 50%;
  height: 300px;
  border: 1px solid black;
   > img {
    max-width: 90%;
    height:200px ;
  }
`;
export const CardPostContain = styled.div`
  display: flex;
  flex-wrap:wrap ;
  justify-content: center ;
  width: 100vw;
  height: auto;
  gap:20px;
  input{
      width:60% ;
      border-radius:20px ;
      height:40px ;
      padding-left: 20px;
  }
`;
