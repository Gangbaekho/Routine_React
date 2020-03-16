import React from 'react'
import Header from './Header'
class RoutineApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header history={this.props.history} />
                RoutineApp
            </div>
        )
    }
}

export default RoutineApp