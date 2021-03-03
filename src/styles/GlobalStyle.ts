import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root  {
    --white: #fff;
    --background: #1A202C;
    --background-card: #2D3748;
    --gray-line: #dcdde0;
    --text: #E2E8F0;
    --text-highlight: #9F7AEA;
    --title: #9DAABC;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #667EEA;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
    --border-box: #5A67D8;
    --border-grey: #718096;
  }

  body{
    color: var(--text);
    background: var(--background);
  }

  html{
      font-size: 62.5%;
    }

  @media (max-width: 1080px){
    html{
      /* font-size: 93.75%; */
    }
  }

  @media (max-width: 720px){
    html{
      /* font-size: 87.75%; */
    }
  }

  body, input, textarea, button{
    font: 400 1.6rem "Roboto", sans-serif ;
  }

  button{
    outline: none;
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

`;