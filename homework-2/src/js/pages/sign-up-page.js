const signUp = `
    <main class="section-main">
      <form class="form-main router-submit">
        <div class="form-main__box-content form-main__box-content--height-large">
          <legend class="form-main__title">Sign up</legend>
          <div class="form-main__wrapper-input">
            <input type="text" id="firstName" class="form-main__input" placeholder="First name" 
            required/>
          </div>
          <div class="form-main__wrapper-input">
            <input type="text" id="lastName" class="form-main__input" placeholder="Last name" 
            required />
          </div>
          <div class="form-main__wrapper-input form-main__wrapper--email">
            <input
              type="email"
              id="emailName"
              class="form-main__input"
              placeholder="Email"
              minlength="3"
              required
            />
            <label
              for="emailName"
              class="form-main__error animate__animated animate__backInUp is-hidden-error"
            >
              Email not correct. Please check the spelling
            </label>
          </div>
          <div class="form-main__wrapper-input form-main__wrapper--password">
            <input
              type="password"
              id="passwordName"
              class="form-main__input"
              placeholder="Password"
              required
            />
            <label
              for="passwordName"
              class="form-main__error is-hidden-error animate__animated animate__backInUp"
            >
              Password contain unsupported characters
            </label>
          </div>
          <div
            class="form-main__wrapper-input form-main__wrapper--password form-main__wrapper--lock"
          >
            <input
              type="password"
              id="checkName"
              class="form-main__input"
              placeholder="Password"
              required
            />
            <label
              for="checkName"
              class="form-main__error is-hidden-error animate__animated animate__backInUp"
            >
              Password does not match
            </label>
          </div>
          <button class="form-main__wrapper-btn form-main__btn-submit" type="submit" id='patients'>
            Sign up
          </button>
        </div>
        <div class="form-main__box-content form-main__box--row">
          <p class="form-main__text">Already have an account?</p>
          <a href="#" class="form-main__link router" id='signIn'>Sign in</a>
        </div>
      </form>
    </main>

`;

export default signUp;
