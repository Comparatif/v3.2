export class StarsRate extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const { ratingChanged } = this.props
      return (
        <ReactStars
      
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
  
      )
    }
  }