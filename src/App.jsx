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
import FullScreenNotification from "#components/utility/FullScreenNotification.jsx";


function App() {
    return (
        <main>
            <FullScreenNotification />
            <Navbar/>
            <Home/>
            <Welcome/>
            <Dock/>

            <ResumeWindow/>

            <YoutubeWindow/>
            <FinderWindow/>
            <SafariWindow/>
            <ContactWindow/>
            <TerminalWindow/>


            {/*work on it*/}
            <TextWindow/>
            <ImageWindow/>




        </main>
    )
}

export default App;