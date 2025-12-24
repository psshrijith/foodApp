    import {Component} from "react";

    // function About(){
    //     return(
    //         <div>
    //             <h1>This is a about us page</h1>
    //         </div>
    //     )
    // }
    //
    // export default About

    class About extends Component{

        constructor (props){
            super(props);
            console.log("this is a constructor 1")
            this.state = {
                user: null
            }
        }

        increment= () => {
            this.setState({count: this.state.count+1});
        }

        async componentDidMount() {
            const response = await fetch("https://api.github.com/users/shrijithps",{
                method: 'GET'
            })
            const data = await response.json();
            console.log("Component mounted about 1")
            console.log(data)
            this.setState({user: data})
        }

        componentWillUnmount() {
            console.log("hello cleanuped")
        }

        render(){
            const {user} = this.state;
            console.log("render", user)

            return (
                <div>
                {user?
                (<div className="w-fit h-fit border-2">
                    <h1>Name: {user.name}</h1>
                    <h1>Github: https://github.com/shrijithps</h1>
                    <img src={user.avatar_url}/>
                </div>):( <h1>"Data is loading....."</h1>)}
                </div>
            )
        }
    }

    export default About