import Header from "./Header";
import { Footer } from "./Footer";
import { About } from "./About";
import { Contact } from "./Contact";

function App() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>My App</h1>

            <Header />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;