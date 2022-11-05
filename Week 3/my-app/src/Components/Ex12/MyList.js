import * as React from "react";

class MyList extends React.Component{
    render() {
        const {item} = this.props;

        return(
            <ul>
                {item.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        )
    }
}

export default MyList;