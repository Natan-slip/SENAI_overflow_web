import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;
    
    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;

    > nav {
        width: 370px;
        height: 700px;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: 5px;
        background-color: blue;
        margin-left: auto;
        margin-right: auto;

        > img {
            width: 125px;
            height: 125px;
            border-radius: 50%;
            margin-top: 10px;
        }

        > h1 {
            font-weight: bold;
            
        }

        >h2 {
            font-size: 19px;
        }
    }
`;

export const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 10px;
    padding: 10px;

    border: 1px dashed gray;
`;

export const Post = styled.article`
    width: 80%;
    min-height: 100px;
    padding: 20px;

    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);

    > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        > div {
            gap: 5px;    
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }
    }

    > main {
        margin-top: 10px;
        > div {
            > h1 {
                font-size: 22px;
            }

            > p{
                margin-top: 5px;
                padding: 10px 0px 10px 12px;
                
                font-size: 18px;
                border-left: 2px solid var(--primary);
            }
        }

        > img {
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-top: 10px;
        }

        > section{
            margin-top: 10px;
            display: flex;
            gap: 5px;

            > p {
                padding: 5px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
            }
        }    
    }

    > footer {

        > h2 {
            margin-top: 10px;
            font-size: 18px;
            transition: 0.2s;
            cursor: pointer;
            width: min-content;

            :hover {
                color: var(--primary);
            }
        }
    }
`;
 
/*export const Nav = styled.nav `
    margin-top: 10px;

    

`;*/

/*> img {
    width: 800px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
}

> div {
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 15px;

    > p {
        padding: 10px;
    }

}*/