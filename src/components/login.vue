<template>
  <div class="cont">
    <div class="olascont">
      <img class="olaazul" src="../assets/olaazul.svg">
      <img class="olaverde" src="../assets/olaverde.svg">
    </div>

    <div class="tittle">BIENVENIDO</div>
    <p class="subtittle">Por favor ingrese sus datos de usuario para continuar, ¡te esperamos!</p>
    <input class="input" type="text" placeholder="Nombre de usuario">
    <div class="contrasenacont">
      <input class="input" type="text" placeholder="Contraseña">
      <p class="contrasenaayuda">¿olvidaste tu contraseña?</p>
    </div>
    <router-link to="/home" class="opcioncont">
      <button class="opcion">Ingresar</button>
    </router-link>
  </div>
  
</template>

<!-- scoped sirve para evitar que los estilos afecte a los
demas componentes  -->
<style scoped>

  *{
    margin: 0;
    padding: 0;
    font-size: large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
  }

  .tittle{
    font-size: 128px;
    font-weight: bolder;
    color: #3F497F;
  }

  .subtittle{
    font-size: 28px;
    font-weight: bold;
    color: #3F497F;
  }

  .input{

  }
  .opcion{
    font-size: 50px;
    font-weight: bolder;
    padding: 10px 100px;
    margin: auto;
    background-color: #3F497F;
    color: white;
    border-radius: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  .opcioncont{
    margin: 100px;
  }

.olascont{
  z-index: -1;
  Overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  right: 50%;
  transform: translate(50%,0);
}
.olaverde, .olaazul {
  position: absolute;
  width: 100vw;
  min-width: 1280px;
  bottom: 0;
  right: 50%;
  transform: translate(50%,0);
}
</style>

