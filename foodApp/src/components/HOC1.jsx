function HOC1(WrappedComponent){
    return function NewComponent(props) {
    return (
        <div className="bg-red-500">
            <WrappedComponent {...props}/>
        </div>
    )
    }
}

export default HOC1;