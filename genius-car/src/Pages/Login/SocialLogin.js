import React, { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googlesignin}=useContext(AuthContext);
    const googlelogin=()=>{
        googlesignin()
        .then(res=> {
            const user=res.user;
            console.log(user)
            const currentUser = {
                email: user.email
            }

            console.log(currentUser);

            // get jwt token
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('genius-token', data.token);
                 });

        })
    }
    return (
        <div className='mt-3'>
            <hr />
            <p className="text-center"><small>Social log In</small></p>
            <p className="text-center">
                <button type='submit' onClick={googlelogin} className="btn btn-ghost text-indigo-600">GOOGLE</button>
                 </p>
        </div>
    );
};

export default SocialLogin;