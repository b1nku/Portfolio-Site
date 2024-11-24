import WeatherComponent from "./WeatherComponent";

const Weather = () => {
    return (
        <main className="page" style={{ height: "100vh" }}>
            <section className="clean-block" style={{ height: "100%" }}>
                <div
                    style={{
                        background: "var(--bs-light)",
                        width: "800px",
                        height: "80%",
                        margin: "auto",
                        marginTop: "10%",
                        boxShadow: "11px 11px 20px rgba(68,47,89,0.32)",
                        borderRadius: "4px",
                    }}
                >
                    <WeatherComponent />
                </div>
            </section>
        </main>
    );
};

export default Weather;