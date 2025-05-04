import { Link } from "react-router-dom";
import cc from "../assets/bcc.png";

export default function BoycottSection() {
    const products = [
        {
            name: "Coca-Cola",
            img: cc,
            reason: "Coca-Cola has supported Israeli businesses and has operations in illegal settlements."
        },
        {
            name: "Pepsi",
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/7dffc8208858643.Y3JvcCwxMjgwLDEwMDEsMCw2Mw.jpg",
            reason: "Pepsi has ties with Israeli distributors and operations."
        },
        {
            name: "McDonald's",
            img: "https://static.theprint.in/wp-content/uploads/2022/08/McDonalds_marc8.asasd202203081853272022051617434420220804023220-e1697286238706.jpg",
            reason: "McDonald's franchises in Israel have supported the Israeli military with free meals."
        },
        {
            name: "Nestlé",
            img: "https://fabrikbrands.com/wp-content/uploads/Brands-Owned-By-Nestle-03-864x540.jpg",
            reason: "Nestlé owns stakes in Israeli companies and has a long history of investment in Israel."
        },
        {
            name: "Starbucks",
            img: "https://i.ytimg.com/vi/Rx9fj76x1YQ/maxresdefault.jpg",
            reason: "Although not officially operating in Israel now, Starbucks' leadership has expressed pro-Israel views."
        },
        {
            name: "Puma",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C8xspzE53npFHjn8m2tM5MfaIsPltLz_Kw&s",
            reason: "Puma sponsors the Israel Football Association, which includes teams in illegal settlements."
        },
    ];

    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-500 drop-shadow-lg tracking-wide">
                    🚫 Boycott Israeli Products
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Avoiding these products means standing up for human rights and resisting the occupation of Palestine. Choose ethically. Choose justice.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 shadow-md hover:shadow-red-500/40 transition duration-300 border border-red-600/10 hover:border-red-500 group"
                        >
                            <div className="overflow-hidden rounded-xl h-52 mb-2">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-red-400 mb-1">{product.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{product.reason}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <p className="text-gray-300 text-md mb-5 font-medium tracking-wide">
                        ✊ Together, we can raise awareness and promote justice.
                    </p>
                    <Link to={"/boycott"} className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-6 py-3 text-white rounded-full font-semibold tracking-wider transition shadow-md hover:shadow-red-500/40">
                        Learn More & Take Action
                    </Link>
                </div>
            </div>
        </section>
    );
}
