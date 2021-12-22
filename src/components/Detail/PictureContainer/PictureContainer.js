import './PictureContainer.css';

function PictureContainer() {

    const fakedataPictureURL = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/id/129/4910/3252",
        "https://picsum.photos/id/13/2500/1667",
        "https://picsum.photos/id/130/3807/2538",
        "https://picsum.photos/id/131/4698/3166",
        "https://picsum.photos/id/132/1600/1066",
        "https://picsum.photos/id/133/2742/1828",
        "https://picsum.photos/id/134/4928/3264",
        "https://picsum.photos/id/135/2560/1920",
        "https://picsum.photos/id/141/2048/1365",
        "https://picsum.photos/id/142/4272/2848"
    ]
    
    return(
        <div className="max-w-2/3 mx-auto mb-20 ">
            <div className="grid-container">
                    <img src = {fakedataPictureURL[1]} className="h-full w-full rounded-l-xl picture1"></img>
                    <img src = {fakedataPictureURL[6]} className="h-full w-full "></img>
                    <img src = {fakedataPictureURL[7]} className="h-full w-full rounded-tr-xl"></img>
                    <img src = {fakedataPictureURL[8]} className="h-full w-full "></img>
                    <img src = {fakedataPictureURL[9]} className="h-full w-full rounded-br-xl"></img>
            </div>
        </div>
    )
}

export default PictureContainer;