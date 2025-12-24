import { faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ShimmerCard({filteredData}) {

    const Shimmer = () => (
        <div className="w-72 h-60 bg-gray-200 rounded-lg p-4 animate-pulse">
            <div className="w-full h-32 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
    )

    const JumpingScreen = () => (
            <FontAwesomeIcon
                icon={faSpinner}
                className="text-4xl text-gray-500 animate-spin"
            />
    )

    return (
        <div className="flex justify-center items-center min-h-screen">
            <JumpingScreen/>
        </div>
    );
}
