import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
 const Home = (props) => (
  <GridWrapper>
    <p>This is a paragraph and I am writing on the home page</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
  </GridWrapper>
)


export default Home