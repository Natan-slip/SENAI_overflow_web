import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {

    const posts = [{
        author: {
            name: "Fulano",
        },
        created_at: "10/10/2021",
        title: "Este é um post sobre JS",
        description: "JS é uma linguagem de programação muito top",
        image: "https://images.ecycle.com.br/wp-content/uploads/2021/06/07193822/lightscape-LtnPejWDSAY-unsplash-2048x1365.jpg.webp",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Ciclano",
                },
                created_at: "11/10/2021",
                description: "Realmente JS é muito legal"
            }
        ]
    }];

    /*const profile = [{
        author: {
            name: "Ciclano",
        },
        RA: "Ciclano de tal",
        email: "ciclanoOliveira@gmail.com",
        image1: "",
        image2: ""
    }];*/

    return (
        <>
            <Header />
            <Main>
                <nav>
                    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDjWXHWwNEeNL0VldfUqJ6Snnng8EmTPC6g&usqp=CAU" />
                    <h1>Ciclano Elias da Silva</h1>
                    <h2>RA: 4002-8922</h2>
                    <h2>ciclanoelias@gmail.com</h2>
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post} />)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard({ post }) {

    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src={post.image} />
                <section>
                    {post.categories.map(category => <p>{category} </p>)}
                    <p>Front-end</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment} />)}
            </footer>
        </Post>

    );

}

/*function PostProfile({profile}) {

    return (
        <Profile>

        </Profile>
    )
}*/

export default Home;