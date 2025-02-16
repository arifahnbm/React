import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center bg-yellow-300 items-center min-h-screen flex-col">
            <h1 className="font-bold text-3xl">Oops!</h1>
            <p className="my-5 text-lg">Sorry, an unexpected error has occured</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;