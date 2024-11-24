import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(300, 300);

        camera.position.set(0, 2.7, 16.0);

        const map = new THREE.TextureLoader().load('models/cat2.png');
        const material = new THREE.MeshBasicMaterial({
            map: map,
            color: 0xffffff
        });

        let catGeometry = new THREE.Object3D();
        const fbxLoader = new FBXLoader();
        fbxLoader.load(
            "models/CAT.fbx",
            (object) => {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        child.material = material;
                        if (child.material) {
                            child.material.transparent = false;
                        }
                    }
                });
                object.scale.set(0.02, 0.02, 0.02);
                catGeometry = object;
                catGeometry.rotation.y = 90;
                scene.add(catGeometry);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        );

        const animate = () => {
            requestAnimationFrame(animate);
            if (catGeometry) {
                //catGeometry.rotation.x += 0.0001;
                catGeometry.rotation.y += 0.0025;
                //catGeometry.rotation.z -= 0.0015;
            }
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            scene.clear();
        };
    }, []);

    return (
        <div style={{ background: "var(--bs-primary)" }}>
            <main className="page">
                <section
                    className="clean-block clean-hero"
                    style={{
                        color: "rgba(255,255,255,0)",
                        background:
                            'url("assets/img/tech/burt.jpg") center / auto, rgba(255,255,255,0)',
                        filter: "hue-rotate(0deg) saturate(97%)",
                        boxShadow: "inset 0px 0px 20px 0px rgba(0,0,0,0.41)",
                    }}
                >
                    <div
                        className="text"
                        style={{
                            backdropFilter: "opacity(1)",
                            WebkitBackdropFilter: "opacity(1)",
                            background: "rgba(192,167,217,0.7)",
                            borderRadius: "0.375rem",
                        }}
                    >
                        <h2>a team of game developers</h2>
                        <p style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                            we strive to create good games, and this website
                            <br />
                            will serve as our portfolio for past and future
                            <br />
                            projects :3
                        </p>
                    </div>
                </section>
                <section
                    className="clean-block clean-info dark"
                    style={{ background: "var(--bs-secondary)" }}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div
                                    className="block-heading"
                                    style={{ padding: "0px", margin: "40px 0px" }}
                                >
                                    <h2 className="text-info">ansie</h2>
                                    <p>
                                        studies game development and learning technologies at
                                        University of Southern Denmark (SDU)
                                        <br />
                                        has passion for character design, story-telling and ui/ux
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="block-heading"
                                    style={{ padding: "0px", margin: "40px 0px" }}
                                >
                                    <h2 className="text-info">birkes</h2>
                                    <p>
                                        studies game development and learning technologies at
                                        University of Southern Denmark (SDU)
                                        <br />
                                        enjoys game theory, design and programming
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img
                                    className="img-thumbnail"
                                    src="assets/img/scenery/Screenshot%202023-05-17%20003046.jpg"
                                    alt="fisx project"
                                />
                            </div>
                            <div className="col-md-6">
                                <h3 style={{ margin: "0px", marginTop: "30px" }}>
                                    fisx: multiplayer physics sandbox
                                </h3>
                                <h4 style={{ textAlign: "right", fontSize: "18px" }}>2023</h4>
                                <div>
                                    <p style={{ fontSize: "15px" }}>
                                        one of our initial projects had us working with multiplayer
                                        networking in unity - birkes wanted to explore gameplay as a
                                        physics-driven playground approach, where ansie wanted to
                                        package this in a pleasant pastel-colour palette with stark
                                        contrasts via celshading.
                                        <br />
                                        <br />
                                        the game had drivable vehicles with physical suspensions,
                                        which reacted to the cargo weight - the players could pick
                                        up and transport packages of varying sizes and weights, and
                                        reacted realistically to these.
                                        <br />
                                        <br />
                                        ansie gained experience with working in unity, by creating
                                        stylistic models for it and working with the universal
                                        render pipeline
                                        <br />
                                        <br />
                                        birkes gained experience with approaching physics problems
                                        programmatically and networking in unity
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clean-block" style={{ background: "var(--bs-primary)" }}>
                    <div className="container">
                        <div className="block-heading">
                            <Link className="nav-link" to="/about-us">
                                <h2 className="text-info">about us</h2>
                            </Link>
                            <p>
                                we are a dedicated team quickly gaining valuable experience with
                                creating games and learning technologies for the youth
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card text-center clean-card">
                                    <img
                                        className="card-img-top w-100 d-block"
                                        src="assets/img/avatars/IMG_3646.jpeg"
                                        alt="anne-sofie"
                                    />
                                    <div className="card-body info">
                                        <h4 className="card-title">anne-sofie 'ansie' w.</h4>
                                        <p className="card-text">
                                            Game Development and Learning Technologies, SDU
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card text-center clean-card">
                                    <img
                                        className="card-img-top w-100 d-block"
                                        src="assets/img/avatars/IMG_5427.jpg"
                                        alt="birk"
                                    />
                                    <div className="card-body info">
                                        <h4 className="card-title">birk 'birkes' e.s.</h4>
                                        <p className="card-text">
                                            Game Development and Learning Technologies, SDU
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card text-center clean-card">
                                    <img
                                        className="card-img-top w-100 d-block"
                                        src="assets/img/avatars/IMG_5357.jpg"
                                        alt="kitty"
                                    />
                                    <div className="card-body info">
                                        <h4 className="card-title">
                                            beatrice 'kitty' mctiddy killmouski bartholomew XIV
                                        </h4>
                                        <p className="card-text">cat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <canvas
                    id="background"
                    ref={canvasRef}
                    style={{
                        width: "300px",
                        height: "300px",
                        zIndex: 100,
                        background: "rgba(255,0,0,0)",
                        marginRight: "40px",
                        bottom: "60%",
                        left: "70%",
                        position: "sticky",
                    }}
                >
                </canvas>
            </main>
        </div>
    );
};

export default Home;