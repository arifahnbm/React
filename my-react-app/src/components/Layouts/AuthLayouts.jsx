const AuthLayouts = (props) => {
    const {children, title} = props;
    return (
        <div className="w-full max-w-xs">
            <h1 className="font-bold text-3xl text-black">{title}</h1>
            <p className="font-medium text-stone-500 mb-8">Welcome, please enter your details</p>
            {children}
        </div>
    )
}

export default AuthLayouts;