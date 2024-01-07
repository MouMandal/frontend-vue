<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <h2>About</h2>
            <h2>Contact</h2>
            <RouterLink to="/Login"><button id="bts">click</button></RouterLink>
        </nav>
    </div>
    <RouterView />
</template>
<style scoped>
nav {
    height: 60px;
    background-color: rgba(0, 0, 0, 0.646);
    display: flex;
    align-items: center;

}

nav a {
    text-decoration: none;
    padding: 50px;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bolder;
    text-shadow: 2px 2px 2px white;
    text-align: center;
    cursor: pointer;
    color: white;
}


h2 {
    color: white;
    text-decoration: none;
    padding: 50px;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bolder;
    /* text-shadow: 2px 2px 2px white; */
    text-align: center;
    cursor: pointer;

}

h2:hover {
    color: #009B77;
    border: none;
}

button {
    margin-left: 500%;

}

/*RESPONSIVE DESIGN*/
@media only screen and (max-width:1200px) {
    nav {
        text-align: center;
        width: 100%;
        height: 150px;
    }

    nav a {
        display: block;
        padding: 40px;
        position: relative;


    }

    button {
        margin-left: 100px;

    }

}

@media only screen and (max-width:1024px) {

    nav {
        text-align: center;
        width: 100%;
        height: 150px;
    }

    nav a {
        display: block;
        padding: 40px;
        position: relative;
    }

    button {
        margin-left: 100px;

    }
}

/*RESPONSIVE DESIGN*/
@media only screen and (max-width:900px) {

    nav {
        text-align: center;
        min-width: 112%;
        height: 150px;
    }

    nav a {
        display: block;
        padding: 40px;
        position: relative;
    }

    button {
        margin-left: 100px;

    }

}

@media only screen and (max-width:620px) {

    nav {
        text-align: center;
        min-width: 112%;
        height: 150px;
    }

    nav a {
        display: block;
        padding: 40px;
        position: relative;
    }

    button {
        margin-left: -80px;

    }

}

@media only screen and (max-width:480px) {

    nav {
        text-align: center;
        min-width: 112%;
        height: 150px;
    }

    nav a {
        display: block;
        padding: 5px;
        position: relative;
    }

    button {
        margin-left: -150px;
        position: absolute;

    }

}
</style>