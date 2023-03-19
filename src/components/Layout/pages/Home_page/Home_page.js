import Footer from "../../../Footer/Footer";
import AboveTheSea from "./Above_the_sea";
import EditorsPick from "./Editors_pick";
import MountainCollections from "./Mountain_collections";
import Subscribe from "./Subscribe";
import TopContent from "./Top_content/Top_content";

function HomePage ({ handleEmailSubscribe }) {
    return (
        <div>
            <TopContent />
            <AboveTheSea />
            <EditorsPick />
            <MountainCollections />
            <Subscribe handleEmailSubscribe={ handleEmailSubscribe } />
            <Footer />
        </div>
    );
}

export default HomePage;