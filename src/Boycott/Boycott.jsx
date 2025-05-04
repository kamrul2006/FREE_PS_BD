import React, { useEffect } from "react";

const boycottData = [
    {
        name: "Coca-Cola",
        img: "https://tvista.sgp1.digitaloceanspaces.com/news/why-people-boycotting-coca-cola-6675b4eb968a9.webP",
        reason: "Coca-Cola has supported Israeli businesses and has operations in illegal settlements.",
    },
    {
        name: "Pepsi",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/7dffc8208858643.Y3JvcCwxMjgwLDEwMDEsMCw2Mw.jpg",
        reason: "Pepsi has ties with Israeli distributors and operations.",
    },
    {
        name: "McDonald's",
        img: "https://static.theprint.in/wp-content/uploads/2022/08/McDonalds_marc8.asasd202203081853272022051617434420220804023220-e1697286238706.jpg",
        reason: "McDonald's franchises in Israel have supported the Israeli military with free meals.",
    },
    {
        name: "Nestlé",
        img: "https://fabrikbrands.com/wp-content/uploads/Brands-Owned-By-Nestle-03-864x540.jpg",
        reason: "Nestlé owns stakes in Israeli companies and has a long history of investment in Israel.",
    },
    {
        name: "Starbucks",
        img: "https://i.ytimg.com/vi/Rx9fj76x1YQ/maxresdefault.jpg",
        reason: "Although not officially operating in Israel now, Starbucks' leadership has expressed pro-Israel views.",
    },
    {
        name: "Puma",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C8xspzE53npFHjn8m2tM5MfaIsPltLz_Kw&s",
        reason: "Puma sponsors the Israel Football Association, which includes teams in illegal settlements.",
    },
    {
        name: "HP (Hewlett-Packard)",
        img: "https://logolook.net/wp-content/uploads/2021/11/HP-Logo.png",
        reason: "HP provides technology used in Israeli military checkpoints and ID systems.",
    },
    {
        name: "Intel",
        img: "https://cdn.iconscout.com/icon/free/png-256/free-intel-226533.png",
        reason: "Intel has major investments and R&D centers in Israel.",
    },
    {
        name: "Ahava",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Ahava_logo.png",
        reason: "Ahava operates in the occupied West Bank and extracts minerals from the Dead Sea.",
    },
    {
        name: "Sabra Hummus",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Sabra_logo.svg/1200px-Sabra_logo.svg.png",
        reason: "Partially owned by an Israeli company with ties to the military.",
    },
    {
        name: "Siemens",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
        reason: "Siemens has been involved in infrastructure projects that support Israeli occupation.",
    },
    {
        name: "Victoria's Secret",
        img: "https://1000logos.net/wp-content/uploads/2017/12/Victorias-Secret-Logo.png",
        reason: "Uses Israeli textile companies as suppliers.",
    },
    {
        name: "L'Oréal",
        img: "https://cdn.worldvectorlogo.com/logos/loreal-1.svg",
        reason: "Invested in Israeli cosmetics companies and praised Israeli innovation publicly.",
    },
    {
        name: "Danone",
        img: "https://upload.wikimedia.org/wikipedia/en/3/33/Danone_logo_2020.svg",
        reason: "Danone owns a stake in an Israeli food company.",
    },
    {
        name: "Revlon",
        img: "https://1000logos.net/wp-content/uploads/2021/04/Revlon-logo.png",
        reason: "Its founder was a known supporter of Zionist causes.",
    },
    {
        name: "Mountain Dew",
        img: "https://1000logos.net/wp-content/uploads/2021/04/Mountain-Dew-logo.png",
        reason: "Owned by PepsiCo, which has business ties and operations connected to Israel.",
    },
    {
        name: "Lipton",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lipton_Logo.png",
        reason: "Owned by Unilever, a company with business operations and historical support tied to Israel.",
    },
    {
        name: "Tropicana",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Tropicana_Logo.svg/2560px-Tropicana_Logo.svg.png",
        reason: "Owned by PepsiCo, which operates in Israel and has ties with Israeli distributors.",
    },
    {
        name: "7UP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/7-up-Logo.svg/2560px-7-up-Logo.svg.png",
        reason: "Another PepsiCo product, indirectly supporting Israeli economy through its parent company.",
    },
    {
        name: "Aquafina",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Aquafina_logo.svg",
        reason: "A bottled water brand owned by PepsiCo, which maintains business connections in Israel.",
    },
    {
        name: "Fanta",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Fanta_logo.svg/2560px-Fanta_logo.svg.png",
        reason: "Owned by Coca-Cola, which has operations and bottling plants in Israel.",
    },
    {
        name: "Sprite",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sprite_logo.svg/2560px-Sprite_logo.svg.png",
        reason: "Another Coca-Cola brand, contributing to the company's Israeli operations.",
    },
    {
        name: "Minute Maid",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Minute_Maid_logo.svg",
        reason: "Owned by Coca-Cola, which is active in Israel and has faced criticism for its business practices there.",
    },
];

export default function Boycott_Section() {
    useEffect(() => {
        document.title = "FreePalestine-BD | Boycott Israeli Products";
    }, []);

    return (
        <div className="min-h-screen bg-black text-white py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2 flex justify-center items-center gap-3">
                    <span role="img" aria-label="no entry">
                        🚫
                    </span>
                    Boycott Israeli Products
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-2">
                    Avoiding these products means standing up for human rights and resisting the occupation of Palestine. Choose ethically. Choose justice.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {boycottData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-red-400">{item.name}</h3>
                            <p className="text-gray-400 text-sm mt-1">{item.reason}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
