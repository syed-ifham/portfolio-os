import Navbar from "#components/navbar/Navbar.jsx";
import Welcome from "#components/desktop/Welcome.jsx";
import Dock from "#components/dock/Dock.jsx";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {TerminalWindow} from "#windows/Terminal.jsx";
import {SafariWindow} from "#windows/Safari.jsx";

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock/>

            <TerminalWindow/>
            <SafariWindow/>

        </main>
    )
}

export default App;