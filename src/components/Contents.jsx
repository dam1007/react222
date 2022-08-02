import React from 'react'
import axios from 'axios'


class Rightcont extends React.Component {

    state = {
        contsright: [],
    };

    getRightCont = async () => {
        const {data: {righttInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({contsright: righttInfo});
    };

    componentDidMount() {
        this.getRightCont()
    }

    render() {
        const { contsright } = this.state;
        // console.log({contsright});
        return (
            <div className="right">
                <ul>
                    {contsright.map((elem) => (
                        <li key={elem.id}>
                            <span className="icon"></span>
                            <h3>{elem.title}</h3>
                            <p>{elem.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class Contents extends React.Component {

    state = {
        contsLeft: [],
    };

    getConts = async () => {
        const {data: {leftInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        
        this.setState({contsLeft: leftInfo});
        //console.log(leftInfo);
    };

    componentDidMount() {
        this.getConts()
    }

    render() {
        const {contsLeft} = this.state;
        return (
            <section id="contents">
                <div className="inner">
                    <div className="left">
                        <em>{contsLeft.small}</em>
                        <h2>{contsLeft.title}</h2>
                        <p>{contsLeft.desc}</p>
                        <a className="consult" href="/">{contsLeft.btn}</a>
                    </div>
                    <Rightcont />
                </div>
            </section>
        )
    }
}

export default Contents;