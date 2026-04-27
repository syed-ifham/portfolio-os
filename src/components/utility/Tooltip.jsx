export const Tooltip = ({ text, position = "top" }) => {
    const positionClasses = {
        top: "absolute bottom-full mb-5 left-1/2 -translate-x-1/2",    // Pops up
        bottom: "absolute top-full mt-2 left-1/2 -translate-x-1/2",    // Pops down
        left: "absolute right-full mr-2 top-1/2 -translate-y-1/2",     // Pops left
        right: "absolute left-full ml-2 top-1/2 -translate-y-1/2",     // Pops right
    };

    return (
        <div className={`
            ${positionClasses[position]}
            px-3 py-1.5 bg-gray-900/90 text-white text-xs font-medium rounded-lg
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
            pointer-events-none whitespace-nowrap shadow-md z-50
        `}>
            {text}
        </div>
    );
};