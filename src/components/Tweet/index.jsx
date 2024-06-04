import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import styles from "./Tweet.module.css";
import Button from "react-bootstrap/Button";

function Tweet({ tweet, removeTweet }) {
  return (
    <div className={styles.container}>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
        <div>
          <FaHeart /> {tweet.likes}
        </div>
        <div>
          <LiaRetweetSolid size={22} /> {tweet.retweets}
        </div>
      </div>

      <div>
        <Button variant="danger" onClick={() => removeTweet(tweet.id)}>
          delete
        </Button>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  removeTweet: PropTypes.func,
};

export default Tweet;
