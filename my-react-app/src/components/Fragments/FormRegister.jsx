import Button from "../Elements/Button"
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Fullname" name="fullname" type="text" placeholder="Insert your fullname here..."></InputForm>
          <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
          <InputForm label="Password" name="password" type="password" placeholder="*****"></InputForm>
          <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="*****"></InputForm>
          <Button classname="w-full bg-black text-white">Register</Button>
        </form>
    )
}

export default FormRegister;