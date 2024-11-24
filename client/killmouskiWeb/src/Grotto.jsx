import { Link } from "react-router-dom";

const Grotto = () => {

    return (
        <div>
            <main className="page">
                <section
                    className="clean-block clean-blog-list dark"
                    style={{ background: "var(--bs-secondary)" }}
                >
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">birkes' grotto</h2>
                            <p>
                                come with me as i tells you more about some of the projects that
                                i've been working on during my time at SDU
                            </p>
                        </div>
                        <div className="block-content">
                            {/* Blog Posts */}
                            <div className="clean-blog-post">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <img
                                            className="rounded img-fluid"
                                            src="assets/img/tech/IMG_7157.jpg"
                                            alt="Ghost Calamity"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h3>Ghost Calamity</h3>
                                        <div className="info">
                                            <span className="text-muted">
                                                1. semester, 2022 by G.O.O.D. Games
                                            </span>
                                        </div>
                                        <p>
                                            an asymmetric battle game, where two players control two
                                            unique characters in a joust for freedom: can lui regain
                                            his mortality and re-enter the world of the living, or
                                            will he ultimately be held in limbo by clök?
                                            <br />
                                            <br />
                                            an assymetric isometric 2 player game of multiple rounds,
                                            winner takes it all.
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" type="button">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Aviary */}
                            <div className="clean-blog-post">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <img
                                            className="rounded img-fluid"
                                            src="assets/img/tech/Aviary_ConceptArt_Boy.png"
                                            alt="Aviary Concept Art"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h3>Aviary</h3>
                                        <div className="info">
                                            <span className="text-muted">
                                                2. semester, 2023 by G.O.O.D. Games
                                            </span>
                                        </div>
                                        <p>
                                            compelled to explore storytelling in video games, we
                                            decided to utilize a unique way of storytelling : we
                                            wanted to tell the story of the boy without using words or
                                            sounds, but purely through worldbuilding and non-verbal
                                            expression.
                                            <br />
                                            <br />
                                            awoken in a desolate and empty children's home, the boy
                                            must clue together why and where he found himself, slowly
                                            elevating through inner experiences to a more imaginative
                                            plane of existence. - will he find his freedom with the
                                            birds he sees outside of his cage?
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" type="button">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* FISX */}
                            <div className="clean-blog-post">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <img
                                            className="rounded img-fluid"
                                            src="assets/img/tech/devlog01.jpg"
                                            alt="FISX"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h3>FISX (physics)</h3>
                                        <div className="info">
                                            <span className="text-muted">
                                                2. semester, 2023 by G.O.O.D. Games
                                            </span>
                                        </div>
                                        <p>
                                            eager to try creating multiplayer games in unity through
                                            the use of mirror networking, we decided to create a
                                            physics sandbox wherein players can connect and interact
                                            together : cars with physical suspensions, and characters
                                            reacting to freight weights ensured lots of online fun.
                                            <br />
                                            <br />
                                            my own lovechild as an ode to physics in games and the
                                            fluidity contra rigidity it brings
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" type="button">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Greenshopping */}
                            <div className="clean-blog-post">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <img
                                            className="rounded img-fluid"
                                            src="assets/img/tech/Greenshopping-Demo-Gif.gif"
                                            alt="Greenshopping Demo"
                                            width="121"
                                            height="256"
                                        />
                                        <img
                                            className="img-fluid"
                                            src="assets/img/tech/Modeller%20med%20textures%20&%20materials.jpg"
                                            alt="Greenshopping Models"
                                            width="262"
                                            height="185"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h3>Greenshopping</h3>
                                        <div className="info">
                                            <span className="text-muted">
                                                3. semester, 2023 by Campus Wanderers (G.O.O.D. Games +2)
                                            </span>
                                        </div>
                                        <p>
                                            aiming to integrate futuristic AR technologies in a way
                                            which augments grocery shoppers' eco-mindedness while
                                            shopping, we wanted to create a demo in which we
                                            sufficiently deploy and utilize such technologies.
                                            Greenshopping turned into a short demo in which the user
                                            gained ESP (extra sensory perception) via smart glasses,
                                            that could display products' eco footprint.
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" type="button">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Cul-XR */}
                            <div className="clean-blog-post">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <img
                                            className="rounded img-fluid"
                                            src="assets/img/tech/Screenshot%202024-05-26%20234506.png"
                                            alt="Cul-XR"
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h3>Cul-XR (moleCULe + miXed Reality)</h3>
                                        <div className="info">
                                            <span className="text-muted">
                                                4. semester, 2024 by G.O.O.D. Games
                                            </span>
                                        </div>
                                        <p>
                                            harnessing the potential for immersion and crossing the
                                            boundary between physical and digital, we wanted to use XR
                                            technologies as a helpful tool for teaching children STEM
                                            subjects - we hoped to create a simulator in which school
                                            children could play and interact with molecules as if they
                                            could shrink down to atomic scale.
                                            <br />
                                            <br />
                                            this resulted in a unique and whimsical chemistry
                                            playground in VR, aimed at teaching the otherwise very
                                            heavy STEM-subject chemistry.
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" type="button">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div
                id="background"
                style={{
                    width: "16.5%",
                    height: "100px",
                    zIndex: 100,
                    background: "rgba(0,0,0,0)",
                    marginRight: "40px",
                    top: "30px",
                    bottom: "90%",
                    left: "85%",
                    position: "sticky",
                }}
            >
                <Link className="nav-link" to="/wishlist">
                    <img
                        src="assets/img/wordart.png"
                        alt="Wishlist"
                        width="393"
                        height="169"
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Grotto;