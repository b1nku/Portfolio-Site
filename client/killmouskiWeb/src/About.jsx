const About = () => {

    return (
        <main className="page">
            <section className="clean-block">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">about us</h2>
                        <p>we are a dedicated team quickly gaining valuable experience with creating games and learning technologies for the youth</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/IMG_3646.jpeg"/>
                                <div className="card-body info">
                                    <h4 className="card-title">anne-sofie 'ansie' w.</h4>
                                    <p className="card-text">Game Development and Learning Technologies, SDU</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/IMG_5427.jpg"/>
                                <div className="card-body info">
                                    <h4 className="card-title">birk 'birkes' e.s.</h4>
                                    <p className="card-text">Game Development and Learning Technologies, SDU</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="assets/img/avatars/IMG_5357.jpg"/>
                                <div className="card-body info">
                                    <h4 className="card-title">beatrice 'kitty' mctiddy killmouski bartholomew XIV</h4>
                                    <p className="card-text">cat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;