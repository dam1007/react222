import React from 'react'
import axios from 'axios'

class Profile extends React.Component {

    state = {
        profiles: [],
    };

    getProfiles = async () => {
        const {data: {imageInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({profiles: imageInfo});
        //console.log(this);
    };

    componentDidMount() {
        this.getProfiles()
    }

    render() {
        const { profiles } = this.state;
        return (
            <div className="cont">
                {profiles.map((elem) => (
                    <article key={elem.name}>
                        <figure><img src={elem.image} alt={elem.name}/></figure>
                        <figcaption>
                            <p>{elem.name}</p>
                            <a href="/">{elem.btn}</a>
                        </figcaption>
                    </article>
                ))}
            </div>
            
        );
    }
}

class Image extends React.Component {

    state = {
        images: [],
    };

    getImages = async () => {
        const {data: {imageText},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({images: imageText});
        //console.log(this);
    };

    componentDidMount() {
        this.getImages()
    }

    render() {
        const { images } = this.state;
        
        return (
            <section id="image">
                <div className="inner">
                    <div className="tit">
                        <h2>{images.title}</h2>
                        <p>{images.desc}</p>
                    </div>
                    <Profile />
                </div>
            </section>
        );
    }
}

export default Image