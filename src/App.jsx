import Navbar from "#components/navbar/Navbar.jsx";
import Welcome from "#components/home/Welcome.jsx";
import Dock from "#components/dock/Dock.jsx";
import {TerminalWindow} from "#windows/Terminal.jsx";
import {ResumeWindow} from "#windows/Resume.jsx";
import {FinderWindow} from "#windows/Finder.jsx";
import {TextWindow} from "#windows/Text.jsx";
import {ImageWindow} from "#windows/Image.jsx";
import {ContactWindow} from "#windows/Contact.jsx";
import {Home} from "#components/home/Home.jsx";
import {YoutubeWindow} from "#windows/Youtube.jsx";
import {SafariWindow} from "#windows/Safari.jsx";


function App() {
    return (
        <main>
            <Navbar/>
            <Home/>
            <Welcome/>
            <Dock/>

            <ResumeWindow/>
            {/*work on it*/}
            <TextWindow/>
            {/*<ImageWindow/>*/}

            <YoutubeWindow/>
            <FinderWindow/>
            <SafariWindow/>
            <ContactWindow/>
            <TerminalWindow/>






        </main>
    )
}

export default App;