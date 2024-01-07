<script setup>
</script>
<template>
    <div class="content">
        <h1 data-text="Adventure">Adventure</h1>
        <br>
        <p>“Life is an adventure. Live it” – Anonymous <br>
            “Life is either a daring adventure or nothing at all” – Helen Keller <br>
            “The biggest adventure you can take is to live the life of your dreams” – Oprah Winfrey <br>
            “We travel not to escape life, but for life not to escape us” – Anonymous <br>
            “The purpose of life is to live it, to taste experience to the utmost"- Eleanor Roosevelt <br>
            “Adventure is worthwhile in itself” – Amelia Earhart</p>
        <button id="btn">Click</button>
    </div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background: url("../assets/font.avif");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

}

.content h1 {
    position: relative;
    font-size: 8vw;
    font-family: sans-serif;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 0.3vw white;
    cursor: pointer;
}

h1::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: rgba(0, 0, 0, 0.85);
    -webkit-text-stroke: 0vw #323d52;
    border-right: 3px solid black;
    overflow: hidden;
    animation: animate 6s linear infinite;

}

@keyframes animate {

    0%,
    10%,
    100% {
        width: 0;
    }

    70%,
    90% {
        width: 55%;
    }
}

.content {
    margin-top: 10%;
    margin-left: 10%;
}

.content p {
    color: black;
    font-family: sans-serif;
    letter-spacing: 2px;
    cursor: pointer;
    font-size: 15px;
    transition: all 1s;
}

button {
    padding: 10px 40px;
    border: none;
    border-radius: 30px;
    margin: 28px;
    margin-left: 20%;
    background: rgba(255, 255, 255, 0.501);
}

button:hover {
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
    background-color: #009b7789;

}

button#btn {
    text-shadow: 1px 1px 1px white;
    font-family: sans-serif;
    font-size: 20px;
    text-transform: lowercase;
    border: none;
}
</style>