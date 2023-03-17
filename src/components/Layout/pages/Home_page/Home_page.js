import AboveTheSea from "./Above_the_sea";
import EditorsPick from "./Editors_pisck";
import MountainCollections from "./Mountain_collections";
import TopContent from "./Top_content/Top_content";

function HomePage () {
    return (
        <div>
            <TopContent />
            <AboveTheSea />
            <EditorsPick />
            <MountainCollections />
        </div>
    );
}

export default HomePage;