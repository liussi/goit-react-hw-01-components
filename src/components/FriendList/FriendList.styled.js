import styled from '@emotion/styled';


export const Wrapper = styled.ul`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
    margin-bottom: 20px;
    
`;

export const StatusCircle = styled.span`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin-left: auto; 
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-right: auto; /* Розміщуємо справа */
`;