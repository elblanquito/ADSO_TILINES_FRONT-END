<template>
  <div class="cont">
    <div class="olascont">
      <img class="olaazul" src="../assets/olaazul.svg">
      <img class="olaverde" src="../assets/olaverde.svg">
    </div>
    <div class="opcioncont">
    <p class="tittle">BIENVENIDO</p>
    <p class="subtittle">Por favor ingrese sus datos de usuario para continuar, ¡te esperamos!</p>
    
    
    <input class="input opcion" type="text" placeholder="Nombre de usuario">
    <div class="contrasenacont">
      <input class="input opcion" type="text" placeholder="Contraseña">
      <p class="contrasenaayuda">¿olvidaste tu contraseña?</p>
    </div>
    <router-link to="/home" class="ingresarcont">
      <button class="ingresar opcion">Ingresar</button>
    </router-link>
  </div>
  </div>
  
</template>

<!-- scoped sirve para evitar que los estilos afecte a los
demas componentes  -->
<style scoped>

.paleta{
  background-color: 
#3F497F
#29A19C
#A3F7BF;
}

  *{
    margin: 0;
    padding: 0;
  }

  .tittle{
    font-size: 128px;
    font-weight: 700;
    color: #3F497F;
  }

  .subtittle{
    font-size: 28px;
    font-weight: bold;
    color: #3F497F;
    margin-bottom: 10px;
  }

  .opcioncont{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  }

  .opcion{
    width: 95vw;
    max-width: 700px;
  }

  .input{
    background-color: #29A19C;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    text-align: left;
    padding: 20px 30px;
    margin-top: 80px;
  }


input::placeholder {
  color: rgb(255, 255, 255); 
}

.input:focus {
  outline: solid  #A3F7BF ;
  }

.contrasenacont{
  width: min-content;
  margin: auto;
}

.contrasenaayuda{
  text-align: right;
}


  .ingresar{
    font-size: 36px;
    font-weight: 700;
    padding: 10px 100px;
    background-color: #3F497F;
    color: white;
    border-radius: 20px;
    margin-top: 80px;
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

