import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister/>
            <p className="text-sm mt-5 text-center text-stone-700">
                Have an account? {" "}
                <Link to="/login" className="font-bold text-black">
                    Login
                </Link>
            </p>
        </AuthLayouts>
    )
}

export default RegisterPage;