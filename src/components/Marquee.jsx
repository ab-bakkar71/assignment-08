import Marquee from "react-fast-marquee";


const MarqueePage = async () => {

    // const res = await fetch("http://localhost:3000/tiles.json")
    // production
    const res = await fetch("https://the-tiles-gallery.vercel.app/tiles.json", {
        cache: "no-store",
    });

    const data = await res.json();
    const tiles = data.slice(0, 4);


    return (
        <div className="flex items-center bg-gray-900 text-white py-2 px-4 mb-15 rounded-md overflow-hidden">


            <h3 className="font-semibold mr-4 whitespace-nowrap">
                New Arrivals:
            </h3>
            <Marquee pauseOnHover={true} speed={50} gradient={false}>
                {
                    tiles.map(tile => <span key={tile.id} className="mx-6">
                        - {tile.title}
                    </span>)
                }
                <span>Modern Geometric Patterns | Join the Community...</span>
            </Marquee>

        </div>
    );
};

export default MarqueePage;