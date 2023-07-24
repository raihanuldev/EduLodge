import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(()=>{
        document.title = `${title} - Toy Store`;
    },[title])
}
export default useTitle;