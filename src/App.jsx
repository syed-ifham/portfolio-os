import Navbar from "#components/navbar/Navbar.jsx";
import Welcome from "#components/home/Welcome.jsx";
import Dock from "#components/dock/Dock.jsx";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {TerminalWindow} from "#windows/Terminal.jsx";
import {SafariWindow} from "#windows/Safari.jsx";
import {ResumeWindow} from "#windows/Resume.jsx";
import {FinderWindow} from "#windows/Finder.jsx";
import {TextWindow} from "#windows/Text.jsx";
import {ImageWindow} from "#windows/Image.jsx";
import {ContactWindow} from "#windows/Contact.jsx";
import {Home} from "#components/home/Home.jsx";

gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <Navbar />


            <Home/>
            <Welcome />

            <Dock/>

            <TerminalWindow/>
            <SafariWindow/>
            <ResumeWindow/>
            <FinderWindow/>
            <ContactWindow/>

            {/*work on it*/}
            <TextWindow/>
            {/*<ImageWindow/>*/}




        </main>
    )
}

export default App;