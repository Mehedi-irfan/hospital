import { useContext } from "react"
import {Context} from '../../Context/AuthProvider'

const useAuth = () => {
    return useContext(Context);
}

export default useAuth;