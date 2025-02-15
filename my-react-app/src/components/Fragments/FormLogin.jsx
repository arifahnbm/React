import Button from "../Elements/Button"
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
          <InputForm label="Email" name="email" type="email" placeholder="example@mail.com"></InputForm>
          <InputForm label="Password" name="password" type="password" placeholder="*****"></InputForm>
          <Button classname="w-full bg-black text-white">Login</Button>
        </form>
    )
}

export default FormLogin;