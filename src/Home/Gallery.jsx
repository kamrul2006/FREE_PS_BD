import { useEffect } from "react";

export default function Gallery() {
    useEffect(() => {
        // Optional: track when Gallery loads
    }, []);

    const images = [
        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489381369_122100886466831683_1445129146132935830_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEP1DDlTZ4uktkAg2ILshOpduG8NH9al-h24bw0f1qX6D9qE1Fy-6L8DFfnC329XwraD19CN9sOk5s6mVwt3aYO&_nc_ohc=JtcfBZwE6zUQ7kNvwH55gDR&_nc_oc=AdmlhHmlOl51NMqNWGBJCERaMJvdFZJojP5qEeRUyKTafHX1KOx7oYgTGbfHPLUfrek&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=XjvYxCCcLk0BX6EO7W3Ueg&oh=00_AfFe_qSq7xvpq-iSScWX6iQbrpZeU9SPezS3hNJnBwi_vQ&oe=6803C30D",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489399746_122100650732831683_8722347496232442836_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFz9uwjTEqThGwhuRK4pFmEu0N-R0qQ5Ay7Q35HSpDkDPeAUxAOnH2bRi_YkUpKqfIkRwZg4XZrfLD_OvtYoJ7p&_nc_ohc=dt7VogxvNT8Q7kNvwHRv8Tp&_nc_oc=Adl_nYbX0SLaB9T3eL6G0ipNVMAVuemHytMO5kgpPgvtxqtBKJ8UMvqDbnV9QIpwd4g&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=dDZNzo8_gjDAsgo8lQvJyw&oh=00_AfHGtQQLYqK-JYDL46ejgj4wUv0ihSJyZZ2w84sJXdjLbA&oe=6803CECE",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489915286_122100650798831683_1791011960998451577_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHk_EUhW0fvUDAMGU5h-29makYq3DVFu0ZqRircNUW7RqrdhCkgvKIiB_I-PzgjXS9MmxFdEpnSyd_mu4zjz5pP&_nc_ohc=tWx2g6O5co4Q7kNvwGje3Op&_nc_oc=AdnHy6uBPk6upDhCvyB9yfE2PfNTsHpPDws4NItJU5MJniYKyE-rp93hgMlPRiU_yL0&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=F910bXGiEK3pdYbZSKXm-A&oh=00_AfHz5b-bsoNCxDUrzdoJ3TUocVk2o0Dc6LQdeU-gpGaAAg&oe=6803BFD8",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489216168_122100650762831683_6416435062503548132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGVkIaSPhPRy1DQwK54X6kEF1wq6xf2vfIXXCrrF_a98rERBEW-SYvpQCTU9Tw80OkKM8oI81fPukyCo8JKKCQr&_nc_ohc=ysSC3LE_5BIQ7kNvwE-i9rT&_nc_oc=Adkp6ftk013Ui7HaGpT6tkQrCHLO4Q_6RBRqszgRqXk9ckJ0FQKxkNT0haXAeOsOIVs&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=hFf8UKe1DLKhZ5k42NTj_Q&oh=00_AfGNw4pL9AtGtUV9LX9foFGiLCd8d0KgdPcQihVCK4LjYg&oe=6803DA69",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489450769_122100364070831683_7873115787274102343_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-8tdoRxEi9xA5bzmbjX0cYv9F9wFh7pFi_0X3AWHukbRXbsfR_CPtDFBBHaZPaEaEBnGLyzfWikwAKVxQIN65&_nc_ohc=hWG2HNePXuUQ7kNvwEF1lg-&_nc_oc=AdkkHlVGxiSBRazw--dIjbzXM2Nlc2DFkDzpCT01WPJl4_lurdSOrfHblBYmCROYPhw&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=ernTEpop9f9u2QXDcrnKjg&oh=00_AfFYjYQSmoBxzED-7lJAIBF9dSz8BzQ0QbNvMgi-6_Zz-g&oe=6803BE06",

        "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/489958397_122100886532831683_8922066277059571828_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEy40HwaEPq3C4ZUDkDrHnNhKJOV_8SzoGEok5X_xLOgcDs9mmjqqkDlpTt1wLBYTR7bZnAGWH1isPorjubwXop&_nc_ohc=LsNXNaGjFWgQ7kNvwHRWXPe&_nc_oc=AdnN_yS7kFEw0vfOrhQwVLlZOnf-QrwKtHMrAZE7EzT0h_C7YdyeEKbcL-ongfeKpAQ&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=w3y8Ppo-iNcGqI5tL-oxLw&oh=00_AfFK6dVO4Tn79pcgXRw9PRKW1LjvsroGwE_RF2Fu0AQo1g&oe=6803D94F",
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
