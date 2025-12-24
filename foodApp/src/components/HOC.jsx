export const HOC = (WrappedComponent) => {
    return (props) =>  {
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">Promoted</label>
                <WrappedComponent {...props} />
            </div>
        )
    }
}