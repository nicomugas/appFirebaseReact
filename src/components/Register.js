import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate, Link } from 'react-router-dom';
import Alert from './Alert';



export default function Register() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { signup } = useAuth();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        // await signup(user.email, user.password)
        // try {
        //     //navigate("/");
        //     console.log('hol'); 

        // }  catch (error) {
        //     // setError(error.message)
        //     console.log('toy en catch');
        // }
        signup(user.email, user.password)
            .then((res) => {
                navigate('/')
            })
            .catch(err => setError(err.code))
    }

    return (
        <div className='w-full max-w-xs m-auto'>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 m b-4">
                <div className='mb-4'>

                    <label htmlFor='email' className='block text-gray-700 text-sm font-fold mb-2'>Email</label>
                    <input type="email" name="email" placeholder='yourmail@gmail.com' onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>

                    <label htmlFor='password' className='block text-gray-700 text-sm font-fold mb-2'>Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>

                <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>


            </form>
            <p className='my-4 text-sm flex justify-between px-3'>Already have an Account <Link to='/login'>Login</Link></p>
        </div>
    )
}