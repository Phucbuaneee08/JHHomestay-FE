
function DetailPanelPicture() {

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
        <div className=" max-w-3/4 mx-auto my-20">

            <div className="w-full grid grid-cols-4 gap-2 ">
                
                <div className="h-96 col-span-2">
                    <img src = {fakedataPictureURL[1]} className="h-full w-full rounded-l-xl"></img>
                </div>

                <div className="h-96 grid grid-rows-2 gap-2">
                    
                    <img src = {fakedataPictureURL[6]} className="h-full w-full  "></img>
                    <img src = {fakedataPictureURL[7]} className="h-full w-full "></img>
                </div>

                <div className="h-96 grid grid-rows-2 gap-2">
                    <img src = {fakedataPictureURL[8]} className="h-full w-full rounded-tr-xl"></img>
                    <img src = {fakedataPictureURL[9]} className="h-full w-full rounded-br-xl"></img>
                </div>

            </div>
            <p>hahahahah</p>
        </div>
    )
}

export default DetailPanelPicture;