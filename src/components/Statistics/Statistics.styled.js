import styled from '@emotion/styled';

export const Container = styled.section`
text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: bold;
  color: #888;
`;

export const StatList = styled.ul`
 list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const Item = styled.li`
flex: 1;
color: white;
 background-color: ${props => props.color};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
 font-weight: bold;
  font-size: 18px;
`;

export const Percentage = styled.span`
 font-size: 20px;
  margin-top: 10px;
  display: block;
  
`;
