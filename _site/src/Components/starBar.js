import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

export default function Stars (props) {
    let {rating } = props
    

const stars = []
    for (let x=0; x < 5; x++){
        if (rating >= 1) {
            stars.push(<FontAwesomeIcon icon={fullStar} key={x} style={{color:"#28bbbd"}} className='color-info'/>)
            rating -= 1
        } else if ( 0 < rating ) {
            stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={x} style={{color:"#28bbbd"}}/>)
            rating = 0
        } else {
            stars.push(<FontAwesomeIcon icon={emptyStar} key={x} style={{color:"#28bbbd"}}/>)
        }
    }

    return <div className="rating ">{stars}</div>
}
