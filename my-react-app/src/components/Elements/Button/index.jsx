const Button = (props) => {
    const {textcolor, children} = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${props.color} ${textcolor}`} type="submit">
          {children}
      </button>
    )
  }

export default Button;