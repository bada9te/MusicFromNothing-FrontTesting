import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = (props) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <p>Creating new account</p>
            <form className="m-5 login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input
                        className="form-control rounded"
                        type="text"
                        {...register("Email", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                    {errors.Email && <span className="form-text text-danger">Email address is not valid </span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="Nickname" className="form-label">Nickname</label>
                    <input 
                        className="form-control rounded"
                        type="text" 
                        {...register("Nickname", {
                            maxLength: 20,
                            required: true,
                        })} 
                    />
                    {errors.Nickname && <span className="form-text text-danger">Nickname is not valid</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input 
                        className="form-control rounded"
                        type="password" 
                        {...register("Password", {
                            minLength: 8,
                            required: "Password is required!",
                        })} 
                    />
                    {errors.Password && <span className="form-text text-danger">Password is not valid</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                    <input 
                        className="form-control rounded"
                        type="password" 
                        {...register("ConfirmPassword", {
                            required: "Please confirm password!",
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { Password } = getValues();
                                    return Password === value || "Passwords should match!";
                                }
                            }
                        })} 
                    />
                    {errors.ConfirmPassword && <span className="form-text text-danger">Confirmination password is not valid</span>}
                </div>

                <div className="mb-3 form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox" 
                        {...register("RememberMe", {})} 
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Register</button>     
            </form>
            <p className="reg-link">Already registered? <Link to="/login">Login</Link></p>
        </>
    );
}

export default RegisterForm;