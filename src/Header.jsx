import styled from "styled-components";
const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #0077ff;
    margin: auto;
    margin-top: 70px;
  }
  p {
    margin-top: 30px;
    font-size: 1.3rem;
    span {
      padding: 5px;
      background-color: #0077ff;
      border-radius: 5px;
      color: #fff;
    }
  }
`;
function Header() {
  return (
    <>
      <HeaderTag>
        <h1>Contant App</h1>
        <p>
          <span>botostart</span> | react.js full course
        </p>
      </HeaderTag>
    </>
  );
}

export default Header;
