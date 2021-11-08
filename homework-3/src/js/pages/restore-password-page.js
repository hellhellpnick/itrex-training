const restorePassword = `

    <main class="section-main">
      <form class="form-main">
        
        <div class="form-main__box-content form-main__box-content--height">
        <div class="form-main__box-content">
          <div class="form-main__wrapper-title">
            
        <legend class="form-main__title form-main__title--padding">
          <a href="#" class="form-main__link-back router" id='signIn'>
        </a>
          <span class="form-main__title ">Restore password</span>
        </legend>
        </div>
        <div class="form-main__box-content is-visible-block">
        <p class="form-main__text form-main__text--margin">Please use your email address, and we’ll send you the link to reset your password</p>
        <div class="form-main__wrapper-input form-main__wrapper--email form-main__wrapper-input--margin">
              <input 
              required
                type="email"
                id="emailName"
                class="form-main__input"
                placeholder="Email"
              />
          <label for="emailName" class="form-main__error is-hidden-error animate__animated animate__backInUp">
            Email not found. Please check the spelling
          </label>
        </div>
        <div class="form-main__box-content">
          <button class="form-main__wrapper-btn form-main__wrapper-btn--large form-main__btn-submit" type="submit" value="Send Reset Link">
            Send Reset Link
          </button>
         </div>
        </div>
        
      <div class="form-main__box-content is-hidden-block">
        <p class="form-main__text">An email has been sent to <span class="form-main__link">example@exam.com.</span> Check your inbox, and click the reset link provided.</p>
      </div>
      </div>
      </form>
    </main>
`;

export default restorePassword;
