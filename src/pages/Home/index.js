import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {
    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard() {

    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por Fulano de tal
                    </strong>
                    <p>
                        em 18/08/2021 às 8:23
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem bla bla bla</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/06/07193822/lightscape-LtnPejWDSAY-unsplash-2048x1365.jpg.webp" />
                <section>
                    <p>Front-end</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                <Coments />
            </footer>
        </Post>

    );

}

export default Home;