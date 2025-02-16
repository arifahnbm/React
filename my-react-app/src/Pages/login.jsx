import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin/>
            <p className="text-sm mt-5 text-center text-stone-700">
                Don't have an account? {" "}
                <Link to="/register" className="font-bold text-black">
                    Register
                </Link>
            </p>
        </AuthLayouts>
    )
}

export default LoginPage;