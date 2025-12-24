import useOnlineStatus from '../utils/useOnlineStatus';

function StatusBar() {
    const isOnline = useOnlineStatus();

    return(
        <div>
            {isOnline? '✅': '🛑'}
        </div>
    )
}

export default StatusBar;