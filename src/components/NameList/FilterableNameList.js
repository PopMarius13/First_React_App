import React from 'react';
import NameRow from './NameRow';
import faker from 'faker';

import styles from './namelist.module.css';

export default class FilterableNameList extends React.Component {
    constructor(){
        super();
        this.filterNames = this.filterNames.bind(this);
        this.addName = this.addName.bind(this);
    }

    filterNames(event) {
        const { value } = event.target;
        this.props.filterNames(value)
    }

    addName() {
        const newName = {
            "first_name": faker.name.firstName(),
            "last_name": faker.name.lastName(),
            "email": faker.internet.email(),
            "city": faker.address.city(),
            "catch_phrase": faker.hacker.phrase()
        }
        this.props.canAddName(newName);
        
    }

    render() {
        let {names, filterText, isAdding} = this.props;
        return (
            <div className={styles.nameList}>
                <input onChange={this.filterNames} type="text" value={filterText}/>
                <div>
                    <button onClick={this.addName}>Add random name</button>
                </div>
                <div className="pure-g">
                    {names.map((name) => 
                        <NameRow key={name.id} name={name} deleteName={this.props.deleteName}/>
                    )}
                    
                    { isAdding ? <div className="pure-u-1 pure-u-md-1-4"> Adding new name! </div> : null}
                </div>
            </div>
            
        )
    }
}