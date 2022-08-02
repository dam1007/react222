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
    // console.log(slider.title, slider.desc, slider.btn);
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

/* import React from 'react'

const sliderInfo = [
    {
        title: 'Drum School',
        desc: '드럼스쿨만의 차별화된 운영철학을 이야기 합니다.',
        btn: '바로가기',
    }
]

function Slider() {
  return (
    <section id="slider">
        <div className="inner">
        <div className="desc">
            <h2>{sliderInfo[0].title}</h2>
            <p>{sliderInfo[0].desc}</p>
            <a href="/">{sliderInfo[0].btn}</a>
        </div>
        </div>
    </section>
  )
}

export default Slider */