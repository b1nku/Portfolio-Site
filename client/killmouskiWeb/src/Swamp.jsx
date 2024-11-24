import React, { useEffect, useRef } from "react";
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Swamp = () => {
    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);

    useEffect(() => {
        const canvas = document.querySelector('#background');
        const canvas2 = document.querySelector('#background2');
        let mouse = new THREE.Vector2();
        let mouse2 = new THREE.Vector2();

        window.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const rect2 = canvas2.getBoundingClientRect();
            mouse.x = ((event.clientX - (rect.left)) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - (rect.top)) / rect.height) * 2 + 1;
            mouse2.x = ((event.clientX - (rect2.left)) / rect2.width) * 2 - 1;
            mouse2.y = -((event.clientY - (rect2.top)) / rect2.height) * 2 + 1;
        });

        const raycaster = new THREE.Raycaster();
        const raycaster2 = new THREE.Raycaster();
        const target = new THREE.Vector3();
        const target2 = new THREE.Vector3();

        const scene = new THREE.Scene();
        const scene2 = new THREE.Scene();

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

        const renderer2 = new THREE.WebGLRenderer({
            canvas: canvasRef2.current,
            alpha: true
        });

        const light = new THREE.AmbientLight();
        const light2 = new THREE.AmbientLight();

        scene.add(light);
        scene2.add(light2);

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(300, 300);

        renderer2.setPixelRatio(window.devicePixelRatio);
        renderer2.setSize(300, 300);

        camera.position.set(0, 0, 2);

        let eyeGeometry = new THREE.Object3D();
        let eyeGeometry2 = new THREE.Object3D();
        const fbxLoader = new FBXLoader();
        fbxLoader.load(
            "models/Eyeball.fbx",
            (object) => {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        console.log('Mesh:', child);
                        console.log('Material:', child.material);

                        child.castShadow = true;
                        child.receiveShadow = true;
                        if (child.material) {
                            child.material.side = THREE.DoubleSide;
                        }
                    }
                });
                object.scale.set(0.003, 0.003, 0.003);
                eyeGeometry = object;
                scene.add(eyeGeometry);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        );
        fbxLoader.load(
            "models/Eyeball.fbx",
            (object) => {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        console.log('Mesh:', child);
                        console.log('Material:', child.material);

                        child.castShadow = true;
                        child.receiveShadow = true;
                        if (child.material) {
                            child.material.side = THREE.DoubleSide;
                        }
                    }
                });
                object.scale.set(0.003, 0.003, 0.003);
                eyeGeometry2 = object;
                scene2.add(eyeGeometry2);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        );

        function updateEyeLook() {
            raycaster.setFromCamera(mouse, camera);
            raycaster2.setFromCamera(mouse2, camera);
            
            raycaster.ray.at(1, target);
            raycaster2.ray.at(1, target2);

            eyeGeometry.lookAt(target);
            eyeGeometry2.lookAt(target2);
        }

        const animate = () => {
            requestAnimationFrame(animate);

            if (eyeGeometry && eyeGeometry2) {
                updateEyeLook();
            }

            renderer.render(scene, camera);
            renderer2.render(scene2, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            renderer2.dispose();
            scene.clear();
            scene2.clear();
        };
    }, []);

    return (
        <main className="page">
            <section
                className="clean-block clean-blog-list dark"
                style={{ background: "var(--bs-secondary)" }}
            >
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">ansie's swamp</h2>
                        <p>
                            a creative dive into my work with G.O.O.D. Games &amp; Killmouski
                            at SDU, where i've been entertaining myself learning to create 3d
                            models and working with the creative workflow
                        </p>
                    </div>
                    <div className="block-content">
                        {/* Blog Post 1 */}
                        <div className="clean-blog-post">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/img/tech/lui%20and%20clok.gif"
                                        alt="Lui & Clök"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3>lui &amp; clök - a whimsical dichotomy</h3>
                                    <div className="info">
                                        <span className="text-muted">
                                            1. semester, 2022 by G.O.O.D. Games
                                        </span>
                                    </div>
                                    <p>
                                        wanting to emphasize the asymmetric nature of Ghost
                                        Calamity, we thought it would work nicely conveyed through
                                        our character designs - lui is a round and squishy shape
                                        where clök possesses sharp and angular, aggressive shapes -
                                        at the end of our project we knew that we had created
                                        beautiful and lovable characters, ready to become plushies
                                        on any ultrafan's bed.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        type="button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Blog Post 2 */}
                        <div className="clean-blog-post">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/img/tech/The%20Boy.png"
                                        alt="The Boy"
                                        width="375"
                                        height="426"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3>the boy through whose eyes the world can be seen</h3>
                                    <div className="info">
                                        <span className="text-muted">
                                            2. semester, 2022 by G.O.O.D. Games
                                        </span>
                                    </div>
                                    <p>
                                        with surreal furnishing and crooked arrangements, we wanted
                                        to spark a dreamlike curiosity for the player to experience
                                        the boy's journey from his bedside to the world beyond.
                                        <br />
                                        <br />
                                        drawing inspiration from the liminality present in Tim
                                        Burton's universes, we juxtaposed the boy's human size with
                                        an enormous playroom.
                                        <br />
                                        <br />
                                        played as a second-person platformer, the player finds
                                        themselves peering into the doll house in which the boy
                                        resides, emphasizing the ground-breaking narrative element.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        type="button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Blog Post 3 */}
                        <div className="clean-blog-post">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/img/tech/Plaza.jpg"
                                        alt="Plaza"
                                        width="384"
                                        height="186"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3>
                                        immersion and compelling worldbuilding through bespoke
                                        models
                                    </h3>
                                    <div className="info">
                                        <span className="text-muted">
                                            2. semester, 2022 by G.O.O.D. Games
                                        </span>
                                    </div>
                                    <p>
                                        when creating games one finds themselves in barren and
                                        desolate world-spaces throughout development - and most
                                        projects go long before ever gaining identity through
                                        worldbuilding : most new developers even resort to buying
                                        packages of pre-made models from which they can build these
                                        worlds. we saw a unique opportunity to learn and understand
                                        worldbuilding through our own models, rather than creating
                                        from pre-existing ones.&nbsp;
                                    </p>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        type="button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Blog Post 4 */}
                        <div className="clean-blog-post">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/img/tech/Modeller%20med%20textures%20&%20materials.jpg"
                                        alt="Models and Textures"
                                    />
                                </div>
                                <div className="col-lg-7">
                                    <h3>bridging the gap between real and (un)real</h3>
                                    <div className="info">
                                        <span className="text-muted">
                                            3. semester, 2023 by Campus Wanderers (G.O.O.D. Games +2)
                                        </span>
                                    </div>
                                    <p>
                                        when creating a semi-fictional demonstration of AR
                                        technologies, we knew that we had to keep the demonstration
                                        as close to the realm of possibilities, as possible. we
                                        wanted to emphasize to the people trying our demo, that the
                                        employment of AR technologies in this manner isn't out of
                                        the ordinary. we knew that physically based rendering and
                                        the creation of life-like to-size models would be a helpful
                                        conveyor of this.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        type="button"
                                    >
                                        Read More
                                    </button>
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
                    bottom: "80%",
                    left: "70%",
                    position: "sticky",
                }}
            >
            </canvas>
            <canvas
                id="background2"
                ref={canvasRef2}
                style={{
                    width: "300px",
                    height: "300px",
                    zIndex: 100,
                    background: "rgba(255,0,0,0)",
                    marginRight: "40px",
                    bottom: "80%",
                    right: "70%",
                    position: "sticky",
                }}
            >
            </canvas>
        </main>
    );
};

export default Swamp;