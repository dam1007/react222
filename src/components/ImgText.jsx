import React from 'react'
import axios from 'axios'

class RoomInfo extends React.Component {
    state = {
        rooms: [],
    };

    getRoomInfo = async () => {
        const {data: {imgTextInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({rooms: imgTextInfo});

    };

    componentDidMount() {
        this.getRoomInfo()
    }

    render() {
        const { rooms } = this.state;
        return (
            <ul>
                {rooms.map((elem) => (
                    <li key={elem.title}>
                        <figure><img src={elem.image} alt={elem.title}/></figure>
                        <figcaption>
                            <h3>{elem.title}<a href="/" className='ir_pm'>{elem.title}</a></h3>
                            <p>{elem.desc}</p>
                        </figcaption>
                    </li>
                ))}
            </ul>
            
        );
    }

}

class ImgText extends React.Component {
    state = {
        imgText: [],
    };

    getImgtext = async () => {
        const {data: {imgTextdesc},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({imgText: imgTextdesc});

    };

    componentDidMount() {
        this.getImgtext()
    }

    render() {
        const { imgText } = this.state;
        return (
            <section id="imgText">
                <div className="inner">
                    <div className="tit">
                        <h2>{imgText.title}</h2>
                        <p>{imgText.desc1}<br/>
                        {imgText.desc2}</p>
                    </div>
                    <RoomInfo />
                </div>
            </section>
        );
    }

}

export default ImgText