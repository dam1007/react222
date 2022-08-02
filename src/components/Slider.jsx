import React from 'react'
import axios from 'axios'

class Slider extends React.Component {
  state = {
    slides: [],
  };

//데이터 가져오기
getSlides = async () => {
  const {data: {slider},} = await axios.get('https://dam1007.github.io/data/react222.json');

    this.setState({slides: slider});
};

componentDidMount() {
  this.getSlides()
}

render() {
  const { slides } = this.state;
  return (
    <section id="slider">
        <div className="inner">
        <div className="desc">
            <h2>{slides.title}</h2>
            <p>{slides.desc}</p>
            <a href="/">{slides.btn}</a>
        </div>
        </div>
    </section>
  )
}

}


export default Slider;