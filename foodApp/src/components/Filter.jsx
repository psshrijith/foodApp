function Filter({handleFilter, resetFilter}){

    return(
        <div className="">
            <button className={`bg-blue-500 border-2 rounded-lg text-white`}
                type="submit" onClick={ handleFilter}>
                Filter
            </button>
            <button className="bg-blue-500 border-2 rounded-lg text-white py-2 px-4 cursor-pointer"
                type="submit" onClick={resetFilter}>
                Reset
            </button>
        </div>

    )
}

export default Filter