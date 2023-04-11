<template>
  <div class="bg">
    <div class="box">
      <p class="title">ВХОД</p>
      <div class="flex">
        <form method="post" class="form">
          <label for="login">логин</label>
          <input type="text" name="login" class="input" />
          <label for="password">пароль</label>
          <input type="password" name="password" class="input" />
          <button type="submit" class="btn">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    #2d3036 0%,
    #2d3036 11.52%,
    #2c2f35 22.52%,
    #2a2d33 32.98%,
    #292b31 42.83%,
    #26292e 52.06%,
    #24262b 60.6%,
    #212328 68.42%,
    #1e2024 75.48%,
    #1a1c20 81.73%,
    #17191c 87.14%,
    #131518 91.66%,
    #0f1113 95.24%,
    #0c0d0f 97.86%,
    #080a0b 99.46%,
    #050607 100%
  );
}

.box {
  width: 400px;
  height: 330px;
  background-color: #49454f;
  border-radius: 60px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 30px;
}

.flex {
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}

.input,
.btn {
  width: 350px;
  height: 40px;
  border-radius: 60px;
  font-size: 24px;
  padding: 0 10px;
  font-family: 'MontserratAlternates';
}

label {
  padding-left: 30px;
  color: white;
  font-size: 28px;
  align-self: flex-start;
  font-family: 'MontserratAlternates';
}

/* ширина кнопки адаптирована под инпут с бордером */
.btn {
  width: 360px;
  border: 0;
  padding: 0;
  margin: 30px 0;
  font-family: 'Montserrat';
  font-weight: bold;
}
</style>
