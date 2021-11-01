const signIn = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <title>Sign In</title>
  </head>

  <body>
    <main class="section-main">
      <form class="form-main">
        <div class="form-main__box-content form-main__box-content--height">
          <legend class="form-main__title">Sign in</legend>
          <div class="form-main__wrapper-input form-main__wrapper--email">
            <input type="email" id="emailName" class="form-main__input" placeholder="Email" />
            <label
              for="emailName"
              class="form-main__error is-hidden-error animate__animated animate__backInUp"
            >
              Email not found. Please check the spelling
            </label>
          </div>
          <div class="form-main__wrapper-input form-main__wrapper--password">
            <input
              type="password"
              id="passwordName"
              class="form-main__input"
              placeholder="Password"
            />
            <label
              for="passwordName"
              class="form-main__error is-hidden-error animate__animated animate__backInUp"
            >
              Password contain unsupported characters
            </label>
          </div>
          <div class="form-main__box-content">
            <button
              class="form-main__wrapper-btn form-main__box-content--margin form-main__btn-submit"
              type="submit"
              id='patients'
            >
              Sign in
            </button>
            <a class="form-main__link router" href="#" id='restorePassword'>Forgot password?</a>
          </div>
        </div>
        <div class="form-main__box-content">
          <p class="form-main__text">Don’t have an account?</p>
          <a href="./index.html" class="form-main__link router" id=''>Sign up</a>
        </div>
      </form>
    </main>

    <script src="./js/sign-in.js"></script>
    <script src="./js/index.js"></script>
  </body>
</html>

`;

export default signIn;
