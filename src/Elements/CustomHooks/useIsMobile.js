import {useEffect , useState } from 'react'
const isMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      window.screen.width <= 700 ? setIsMobile(true) : setIsMobile(false);
    }, [window.screen.width]);

    return isMobile
}

export default isMobile