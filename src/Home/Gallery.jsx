import { useEffect } from "react";

export default function Gallery() {

    useEffect(() => {
        // Optional: track when Gallery loads
    }, []);

    const images = [
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",

        "https://d2u0ktu8omkpf6.cloudfront.net/1bc16546f9bab335acccba49d375d2a821899481c420993e.jpg",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/493275124_122114006906831683_4037199299057795238_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHM671kZHFfyJedlVpFbG7uHbBwgsZ1O-4dsHCCxnU78gKlMDoUBZ6yMzjipoMvuu0dJNmH8hBS9LlQTwjDzeD&_nc_ohc=sj4eCsKpotYQ7kNvwGdNTWJ&_nc_oc=AdlRgD0vCPH8vcBZicb2x4L2BLImMDp5uAKeJ2sYr9VPpbBdKCKlQgFKaDvfZi1AbmI&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=3gDbIvw4wK20XBV4ANp1IA&oh=00_AfFN-fY5RmPyKsBihJL50QiwjUvHrE3B3IGXtu82nYEbXg&oe=681E0C1B",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/493095406_122114006774831683_775685652976043298_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCPtdRENpc248B_dDcCNSI9BPiRzD4wmP0E-JHMPjCY9pzymoN7GiOE8-FbuY-mGgPXyQYiijK2vddJbNhAW2A&_nc_ohc=wQE7m6pY5lsQ7kNvwFEItgY&_nc_oc=AdnGpT3HFlnmg0v0MYnSRXlVvFQWEQoCbDuNrpKGpNSe7q2IeMwradkxxTLe8YDJ9Tg&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=-D4oAnoPHRzKIn2mqSWeCw&oh=00_AfHY3tolz_1YKQtSK8ZBczyfZBQqtHODN9b_pgU8LV-feg&oe=681E2BF3",

        "https://cdn.daily-sun.com/public/news_images/2025/04/12/1744453018-fee4e47f3e4c529b1f2c751035a4492c.gif",

        "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2025/04/12/Gaza-5c5cd9e6cda9a3ab4013e919bd73aa15.jpg?jadewits_media_id=42568",
    ];

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-500 mb-3">Our Gallery</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Glimpses of resistance, hope, and solidarity for a free Palestine.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
