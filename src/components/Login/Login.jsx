import { useState } from "react";
function Login(){

    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[erreur,setErreur]=useState({});

    function handleSubmit(e){
        e.preventDefault();
        let newErreur={};
        if (email.trim()==="")
            newErreur.email="veuillez introduire un email";
        else if (! /\S+@+\S+\.+\S/.test(email))
            newErreur.email="veuiller introduire un email valide";
        

        if (password.trim()==="")
            newErreur.password="veuillez introduire le mot de passe";
        else if (password.length<8)
            newErreur.password="la taille du mot de passe doit etre supérieur ou égale à 8";
        else if(! /[A-Z]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au mois une lettre majuscule";
        else if(! /[0-9]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au mois un chiffre";
        else if(! /[^A-Za-z0-9]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au mois un caractére spécial";

        if(Object.keys(newErreur).length===0){
            alert("enregistrement avec succ")
            console.log("email:"+email+ "password:"+password);

        }
        else
        {
            setErreur(newErreur);
            console.log(newErreur);
        }
    } 



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    {
                    erreur.email && <span>{erreur.email}</span>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    name="password" 
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    {
                    erreur.password && <span>{erreur.password}</span>
                    }
                </div>

                <div>
                    <button type="submit">enregister</button>
                </div>
            </form>
        </div>
    )
}

export default Login;