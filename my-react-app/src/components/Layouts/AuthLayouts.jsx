import { Link } from "react-router-dom";


const AuthLayouts = (props) => {
    const {children, title, type} = props;
    return (
        <div className="flex justify-center bg-yellow-300 items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="font-bold text-3xl text-black">{title}</h1>
                <p className="font-medium text-stone-500 mb-8">Welcome, please enter your details</p>
                {children}
                <p className="text-sm mt-5 text-center text-stone-700">
                    {type === "login" ? "Don't have an account? " : "Already have an account? "}

                    {type === "login" && (
                        <Link to="/register" className="font-bold text-black">
                            Register
                        </Link>
                    )}

                    {type === "register" && (
                        <Link to="/login" className="font-bold text-black">
                            Login
                        </Link>
                    )}
                </p>

                {/* <Navigation type={type}/> */}

            </div>
        </div>
    )
}

const Navigation = ({type}) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center text-stone-700">
                Don't have an account? {" "}
                <Link to="/register" className="font-bold text-black">
                    Register
                </Link>    
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-5 text-center text-stone-700">
            Already have an account? {" "}
            <Link to="/login" className="font-bold text-black">
                Login
            </Link>  
        </p>
        ) 
    }
}

export default AuthLayouts;