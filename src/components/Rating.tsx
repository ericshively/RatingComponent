import styles from "./Rating.module.css";
import { useState } from "react";

export default function Rating() {
  const [ratingSelected, setRatingSelected] = useState<number>();
  const [isThankYou, setIsThankYou] = useState<boolean>(false);

  function handleRatingClicked(rating: number) {
    setRatingSelected(rating);
  }

  function handleSubmitClicked() {
    setIsThankYou(true);
  }

  return (
    <div>
      {isThankYou ? (
        <div className={styles.thankYou}>
          <img src="../images/illustration-thank-you.svg"></img>

          <div className={styles.selectedDiv}>
            You selected {ratingSelected} out of 5
          </div>

          <h1 className={styles.title}> Thank you! </h1>

          <p className={styles.body}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch.
          </p>
        </div>
      ) : (
        <div className={styles.panel}>
          <div className={styles.starDiv}>
            <img
              className={styles.starImage}
              src="../images/icon-star.svg"
            ></img>
          </div>

          <h1 className={styles.title}> How did we do? </h1>

          <p className={styles.body}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help improve our offering.
          </p>

          <div className={styles.group}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                onClick={() => handleRatingClicked(rating)}
                className={styles.rating}
              >
                {rating}
              </button>
            ))}
          </div>

          <button
            disabled={ratingSelected === undefined}
            onClick={() => handleSubmitClicked()}
            className={styles.submit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
