import styled from "styled-components";

export const FooterCookiesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({isTablet})=>isTablet?"column":"row"};
  color: #666;
  font-size: 1.1em;
  padding: 0.8em 0px;
  margin-bottom: 1em;

  .links{
    display: flex;
  }

  .boldWord {
    font-weight: bolder;
    margin-bottom: 0.4em;
  }

  a {
    color: #aaaaaa;
    text-decoration: none;
    margin: 0.4em;
  }

  .agreeBtn {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    color: #fff;
    margin: 0.4em;
    background-color: #007bff;
    border: none;
    font-weight: 400;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 0.2rem;

    &:hover {
      background-color: #0069d9;
    }
  }
`;
