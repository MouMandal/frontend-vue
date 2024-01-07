<script>
</script>
<template>
    <div class="login">
        <div class="context">
            <h2>Login</h2>
            <form>
                <p>Username</p>
                <input type="text" placeholder="Email or Phone" name="uname">
                <p>Password</p>
                <input type="text" placeholder="Enter password" name="pass">
                <br>
                <a href="#">Forget password?</a>
                <div id="log">Log in</div>
            </form>


        </div>


    </div>
</template>
<style>
div .login {
    height: 55vh;
    width: 25vw;
    background-color: rgba(0, 0, 0, 0.339);
    margin-top: 8%;
    margin-left: 15%;
    border-radius: 14px;
    box-shadow: 4px 4px 8px 8px black;

}

.login .context {
    padding: 15px 30px;

}

.context h2 {
    color: black;
    font-size: 35px;
    text-transform: capitalize;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;



}

.context p {
    margin-top: 5px;
    padding: 0;
    font-weight: lighter;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;


}

.context input {
    border: none;
    width: 100%;
    margin-bottom: 20px;
    color: darkgray;
}

.context input[type="text"],
input[type="password"] {
    border: none;
    background: transparent;
    border-bottom: 2px solid black;
    outline: none;
    height: 40px;
    cursor: pointer;

}

.context input::placeholder {
    color: darkgray;

}

.context div {
    height: 7vh;
    width: 21vw;
    background-color: rgba(255, 255, 255, 0.322);
    border-radius: 4px;

}

.context div#log {
    margin-top: 15px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
    padding-top: 10px;

}

.context div#log:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.752);
}

.context a {
    text-decoration: none;
    line-height: 20px;
    font-size: 14px;
    color: darkgray;
    font-family: sans-serif;
}

.context a:hover {
    color: #ffc107;
}
/*RESPONSIVE DESIGN*/
@media only screen and (max-width:1200px) {
    div.login {
        min-width: 85%;
        margin-left: 20px;
    }
    .context div {
        min-width: 100%;
    }
}

@media only screen and (max-width:1024px) {
    div.login {
        min-width: 85%;
        margin-left: 20px;
    }

    .context div {
        min-width: 100%;
    }

}

@media only screen and (max-width:900px) {
    div.login {
        min-width: 90%;
        margin-left: 40px;
    }

    .context div {
        min-width: 100%;
    }
}

@media only screen and (max-width:620px) {
    div.login {
        min-width: 90%;
        margin-left: 30px;
    }

    .context div {
        min-width: 100%;
    }
}

@media only screen and (max-width:480px) {
    div.login {
        min-width: 90%;
        margin-left: 20px;
    }

    .context div {
        min-width: 100%;
    }
}</style>