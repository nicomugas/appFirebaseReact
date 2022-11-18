import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login } = useAuth();
    const [error, setError] = useState();
    const navigate = useNavigate();

    // const handleChange = e => {
    //     console.log(e.target.value);
    // }
    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        setError('')
        // await login(user.email, user.password)
        // try {
        //     navigate("/");
            

        // }  catch (error) {
        //    // alert('hola')
        //      setError(error.message)
            
        // }
        login(user.email, user.password)
        .then((res) => {
           navigate('/')
          })
         .catch(err => setError(err.code))
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" placeholder='yourmail@gmail.com' onChange={handleChange} />
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} />

                <button>Login</button>


            </form>
        </div>
    )
}