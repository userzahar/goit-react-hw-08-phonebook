
export const LoginForm = () => {
    return <>
    <form>
  <label>
    Електронна пошта:
    <input type="email" name="email" required />
  </label>

  <label>
    Пароль:
    <input type="password" name="password" required />
  </label>

  <button type="submit">Увійти</button>
        </form>
    </>
}