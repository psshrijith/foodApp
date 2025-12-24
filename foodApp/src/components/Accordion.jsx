const Accordion = ({ 
    title, 
    items = [], 
    isOpen, 
    onToggle, 
    onIncrement, 
    onDecrement, 
    itemCounts = {} 
}) => {
    return (
        <div className="w-full rounded-lg border border-gray-200 shadow-sm bg-white">
            <div
                onClick={onToggle}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg"
            >
                <p className="text-lg font-semibold">{title}</p>
                <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
            </div>

            {isOpen && (
                <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                        <li
                            key={item.id || item.name}
                            className="flex items-center justify-between px-4 py-2"
                        >
                            <div className="flex-1">
                                <p className="font-medium text-gray-800">{item.name}</p>
                                {item.description && (
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                )}
                                <p className="text-sm font-medium text-gray-600">
                                    ₹{item.price ? item.price / 100 : 'N/A'}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 ml-4">
                                <button
                                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDecrement(item);
                                    }}
                                >
                                    −
                                </button>
                                <span className="min-w-[20px] text-center font-medium">
                                    {itemCounts[item.id] || 0}
                                </span>
                                <button
                                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onIncrement(item);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Accordion;
