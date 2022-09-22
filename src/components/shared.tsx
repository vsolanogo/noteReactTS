import styled from "@emotion/styled";

export const SharedDivider = styled.div`
  width: 100%;
  height: 5em;

  @media (max-width: 1300px) {
    height: 3.75em;
  }
  @media (max-width: 900px) {
    height: 2.5em;
  }

  &[data-count="2"] {
    height: 10em;
    @media (max-width: 1300px) {
      height: 7.5em;
    }
    @media (max-width: 900px) {
      height: 5em;
    }
  }

  &[data-count="3"] {
    height: 15em;
    @media (max-width: 1300px) {
      height: 11.25em;
    }
    @media (max-width: 900px) {
      height: 7.5em;
    }
  }

  &[data-count="4"] {
    height: 20em;
    @media (max-width: 1300px) {
      height: 15em;
    }
    @media (max-width: 900px) {
      height: 10em;
    }
  }

  &[data-count="5"] {
    height: 25em;
    @media (max-width: 1300px) {
      height: 18.75em;
    }
    @media (max-width: 900px) {
      height: 12.5em;
    }
  }
`;

export const EWrapper = styled.div`
  max-width: 100em;
  margin: 1em auto;
  display: grid;
  grid-row-gap: 0.5em;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ENote = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(5, 1fr) repeat(3, minmax(5em, max-content));
  grid-column-gap: 0.5em;
  background-color: #e8eaf5;
  padding: 0.5em;
  align-items: center;
  &[data-summary="true"] {
    grid-template-columns: repeat(3, 1fr);
  }
  &[data-creator="true"] {
    grid-template-columns: repeat(3, 1fr) repeat(2, minmax(5em, max-content));
  }
  &[data-editing="true"] {
    grid-template-columns: repeat(5, 1fr) repeat(4, minmax(5em, max-content));
  }
`;
