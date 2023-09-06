import star from "../icons/star-solid.svg";
import halfStar from "../icons/star-half-stroke-regular.svg";

const starRating = (rating) => {
    if (!rating && rating !== 0) {
        return <span className="no-rating">{"(Driver not yet rated)"}</span>;
    } 

    if (rating >= 0 && rating < 0.5) {
        return <span className="poorly-rated">Poorly rated</span>;
    } else if (rating >= 0.5 && rating < 1) {
        return <span className="rated"><img className="rated__star" src={halfStar} alt="half star icon" /> </span>;
    } else if (rating >= 1 && rating < 1.5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /> </span>;
    } else if (rating >= 1.5 && rating < 2) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={halfStar} alt="half star icon" /> </span>;
    } else if (rating >= 2 && rating < 2.5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /> </span>;
    } else if (rating >= 2.5 && rating < 3) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={halfStar} alt="half star icon" /> </span>;
    } else if (rating >= 3 && rating < 3.5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /> </span>;
    } else if (rating >= 3.5 && rating < 4) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={halfStar} alt="half star icon" /> </span>;
    } else if (rating >= 4 && rating < 4.5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /> </span>;
    } else if (rating >= 4.5 && rating < 5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={halfStar} alt="half star icon" /> </span>;
    } else if (rating === 5) {
        return <span className="rated"><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /><img className="rated__star" src={star} alt="star icon" /> </span>;
    } else {
        return <span className="invalid-rating">Invalid rating</span>;
    }
}

export default starRating;