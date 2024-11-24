const Wishlist = () => {
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
                    <iframe
                        src="https://docs.google.com/document/d/e/2PACX-1vSe8XPivvDAu8sHNqR_gMg_A8H-LBfEKLYvf0WIEbL8MlpS2RSaW26GsvC8n5ntRfIBjIDomFMzOz0u/pub?embedded=true"
                        style={{
                            margin: "auto",
                            height: "100%",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                        title="Google Doc"
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Wishlist;