import styled from 'styled-components';

export const Ul = styled.ul`
  /* margin: 0;
  padding-top: 90px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; */
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  padding-top: 90px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;


