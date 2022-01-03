import React from 'react';
import { Link } from 'react-router';

import styles from './namelist.module.css';

const NameProfile = (props) => {
    let { profile } = props;
    if(profile) {
        profile = 
            <div>
                <h2>{profile.first_name} {profile.last_name}</h2>
                <p>lives in {profile.city} and can be reached at {profile.email}</p>
                <p>{profile.first_name} loves to say: "{profile.catch_phrase}"</p>
            </div>
    } else {
        profile = <h2>Sorry, this profile was not found :(</h2>
    }
    return (
        <div className={styles.namelist}>
            {profile}
            <br/>
            <Link to="/names"><button className="pure-button">Back</button> </Link>
            <br/>
            
        </div>
    )
}

export default NameProfile;