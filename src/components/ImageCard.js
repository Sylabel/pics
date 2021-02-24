import React from 'react'
import '../imageCard.css'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }

  state = { spans: 0 }

  componentDidMount() {
    // console.log(this.imageRef.current)

    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans })
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard
