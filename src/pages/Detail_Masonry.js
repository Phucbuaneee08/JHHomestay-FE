import Masonry from 'react-masonry-css';
import './Detail_Masonry.css';

function Detail_Masonry() {

    const fakedataPictureURL = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/id/129/4910/3252",
        "https://picsum.photos/id/13/2500/1667",
        // "https://picsum.photos/id/130/3807/2538",
        // "https://picsum.photos/id/131/4698/3166",
        // "https://picsum.photos/id/132/1600/1066",
        // "https://picsum.photos/id/133/2742/1828",
        // "https://picsum.photos/id/134/4928/3264",
        // "https://picsum.photos/id/135/2560/1920",
        // "https://picsum.photos/id/141/2048/1365",
        // "https://picsum.photos/id/142/4272/2848"
    ]
    
    const fakedataPictureList = fakedataPictureURL.map( (item) =>
        <img src={item}></img>
    )

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return(
        <div className="max-w-3/4 mx-auto my-20">
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {fakedataPictureList}
                </Masonry>
            
        </div>
    )
}

export default Detail_Masonry