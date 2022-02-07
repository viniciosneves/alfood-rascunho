
import { Navigate } from 'react-router-dom'

interface Props {
    componente: React.ComponentType
}

const RotaProtegida = ({ componente: RouteComponent }: Props) => {

    const token = sessionStorage.getItem('access_token')
    const estaLogado = !!token


    if (estaLogado) {
        return <RouteComponent />
    }

    return <Navigate to="/admin/login" />
}

export default RotaProtegida