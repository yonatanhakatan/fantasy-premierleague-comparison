import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${(props) => {
    if (props.horizontal) {
      return `
        display: flex;
        flex-direction: row;
      `;
    }

    return null;
  }}
`;

export default List;
