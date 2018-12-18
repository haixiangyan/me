class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: new Date(),
            rabbitResult: 0,
            turtleResult: 0
        }
    }

    rabbitSuccess(response) {
        console.log('Rabbit ok, say: ' + response)
        console.log('Time', new Date() - this.state.startTime)
        this.setState({
            rabbitResult: new Date() - this.state.startTime
        })
    }

    turtleSuccess(response) {
        console.log('Turtle ok, say: ' + response)
        console.log('Time', new Date() - this.state.startTime)
        this.setState({
            turtleResult: new Date() - this.state.startTime
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Rabbit result={this.state.rabbitResult}/>
                    <Turtle result={this.state.turtleResult}/>
                </div>
                <Playground rabbitSuccess={this.rabbitSuccess.bind(this)} turtleSuccess={this.turtleSuccess.bind(this)}/>
            </div>
        )
    }
}

function Rabbit(props) {
    return (
        <div>
            <h2>Rabbit Total Time</h2>
            <div>{props.result}</div>
        </div>
    )
}

function Turtle(props) {
    return (
        <div>
            <h2>Turtle Total Time</h2>
            <div>{props.result}</div>
        </div>
    )
}

function Playground(props) {
    let {rabbitSuccess, turtleSuccess} = props
    return (
        <div className="playground">
            <RabbitTrack success={rabbitSuccess}/>
            <TurtleTrack success={turtleSuccess}/>
        </div>
    )
}

class RabbitTrack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                transform: 'translate(0%)'
            }
        }

        let n = 0

        let intervalId = setInterval(() => {
            if (n === 100) {
                clearInterval(intervalId)
                this.props.success('I am rabbit.')
            }
            n += 1
            this.setState({
                style: {
                    transform: `translate(${n}%)`
                }
            })
        }, 100)
    }
    render() {
        return (
            <div>
                <div className="player" style={this.state.style}>Rabbit</div>
                <div className="track"/>
            </div>
        )
    }
}

class TurtleTrack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                transform: 'translate(0%)'
            }
        }

        let n = 0

        let intervalId = setInterval(() => {
            if (n === 100) {
                clearInterval(intervalId)
                this.props.success('I am turtle')
            }
            n += 1
            this.setState({
                style: {
                    transform: `translate(${n}%)`
                }
            })
        }, 200)
    }
    render() {
        return (
            <div>
                <div className="player" style={this.state.style}>Turtle</div>
                <div className="track"/>
            </div>
        )
    }
}


ReactDOM.render(<App></App>, document.querySelector('#root'))