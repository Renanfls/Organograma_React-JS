import Menu from "../components/Menu";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import config from "../config.json";

function HomePage() {
    const stylesHome = { backgroundColor: "red" };
    return (
        <div style={stylesHome}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
    );
}

export default HomePage;