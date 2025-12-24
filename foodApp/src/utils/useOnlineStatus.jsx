import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function online() {
            setIsOnline(true);
        }



        window.addEventListener("online", ()=> {
            setIsOnline(true)
        });
        window.addEventListener("offline", () => {
            setIsOnline(false)
        });

        return () => {
            window.removeEventListener("online", ()=> {
                setIsOnline(true)
            });
            window.removeEventListener("offline", () => {
                setIsOnline(false)
            });
        }
    }, [])

    return isOnline;
}

export default useOnlineStatus;
