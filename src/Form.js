import { useState } from "react";

function Form(){

        const [name, setName] = useState('');
        const [nameEroor, setNameError] = useState('');

        const [email, setEmail] = useState('');
        const [emailError, setEmailError] = useState('');


        const [phone, setPhone] = useState('');
        const [phoneError, setPhoneError] = useState('');

        const [pass, setPass] = useState('');
        const [passError, setPassError] = useState('');

        function handleSubmit(e){

            e.preventDefault();
            let valid = true;

            // Name Validation

            if(name.length < 3)
            {
                setNameError("Name must be at least three characters long!");
                valid = false;
            }
            else{
                setNameError('');
            }

            // Email Validation 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailRegex.test(email)){
                setEmailError("Invalid email address");
                valid = false;
            }
            else{
                setEmailError('');
            }
            // Phone Validation
            const phoneRegex = /^\+91+-[0-9]{10}$/; // Adjust the regex as per your phone format requirements
            if(!phoneRegex.test(phone)){
                setPhoneError("Invalid phone number. It should be 10 digits long.");
                valid = false;
            }
            else
            {
                setPhoneError('');
            }

                // Password Validation

                const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                if (!passRegex.test(pass)) {
                    setPassError("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
                     valid = false;
                }

            if(valid){
                console.log("Form submitted successfully!");
                console.log("Name:", name);
                console.log("Email: ", email);
                console.log("Phone:", phone);
                console.log("Password", pass);
            }

        }

    return (
            <div>
                    <form onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input 
                        type="text"
                        placeholder="Please enter your name"
                        required

                        onChange={ (e)=> setName(e.target.value)}
                     />
                     <br />
                     {nameEroor && <span style={{ color:'red' }}>{nameEroor}</span>}
                    <br />
                    <br />

                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Please enter your email"
                        required

                        onChange={ (e)=> setEmail(e.target.value)}
                     />
                     <br />

                     {emailError && <span style={{ color: 'red'}}>{emailError}</span>}
                    <br />
                    <br />

                    <label>Phone:</label>
                    <input 
                        type="phone"
                        placeholder="Please enter your phone No."
                        required

                        onChange={ (e)=> setPhone(e.target.value)}

                    />
                    <br />

                    {phoneError && <span style={{ color:'red' }}>{phoneError}</span>}
                    <br />
                    <br />

                    <label>Password:</label>
                    <input 
                        type="password"
                        placeholder="Pleas enter your password"
                        required

                        onChange={ (e)=> setPass(e.target.value)}

                    />
                    <br />

                    {passError && <span style={{ color: 'red' }}>{passError}</span>}
                    <br />
                    <br />

                    <button type="submit">Submit</button>

                    </form>
                    


            </div>
    );

}

export default Form;