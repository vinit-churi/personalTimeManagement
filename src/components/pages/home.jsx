import heroImage from "../../assets/blue_gold_clock.png";
import styles from "../../styles/home.module.css";
// import { context } from "../../context/context";
const home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.app_info}>
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus doloremque soluta laboriosam praesentium iusto
                        molestias explicabo obcaecati distinctio, possimus
                        facere iure eum harum corporis a fuga.
                    </p>
                </div>
                <div className={styles.home_img}>
                    <img src={heroImage} alt="abstract art" />
                </div>
            </div>
            <button className={styles.call_to_action}>
                Start your journey
            </button>
        </>
    );
};

export default home;
