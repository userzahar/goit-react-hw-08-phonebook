
export const RegistrationForm = () => {
    return <>
    <form>
  <label>
    Ім'я:
    <input type="text" name="firstName" required />
  </label>

  <label>
    Прізвище:
    <input type="text" name="lastName" required />
  </label>

  <label>
    Електронна пошта:
    <input type="email" name="email" required />
  </label>

  <label>
    Пароль:
    <input type="password" name="password" minlength="8" required />
  </label>

  <button type="submit">Зареєструватися</button>
</form></>
}