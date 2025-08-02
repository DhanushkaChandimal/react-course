import React, {Component} from "react";
import "./styles.css";
import styles from './Greeting.module.css';

class Greeting extends Component {
    render() {
        return (
            <>
                <p className="greeting">This is a class based component! Should be blue.</p>
                <p className={styles.greeting}>This is a class based component and used module.css! Should be blue.</p>
            </>
        )
    }
}

export default Greeting;
