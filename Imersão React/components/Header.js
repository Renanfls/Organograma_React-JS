import config from "../config.json";
import styled from "styled-components";

const StyledHeader = styled.div`
    img {
        border-radius: 50%;
        height: 80px;
        width: 80px;
    }
    .user {
        align-items: center;
        display: flex;
        gap: 16px;
        padding: 16px 32px;
        width: 100%;
    }
`;

function Header() {
    return (
        <StyledHeader> {/* É uma <div> porém com a sua estilização propria */}
            {/* <img src="banner"/> */}

            <section className="user">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

export default Header;