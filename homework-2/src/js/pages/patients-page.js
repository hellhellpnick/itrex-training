const patients = `
    <div class="container">
      <header class="header-wrapper">
        <div class="logo-wrapper">
          <img src="./images/logo.png" alt="Logo" class="logo" />
        </div>
        <div class="header-wrapper__row">
          <div class="header-wrapper__column">
            <h2 class="header__title">Miranda Nelson</h2>
            <h4 class="header__subtitle">Doctor</h4>
          </div>
          <div class="header-wrapper__img">
            <img src="./images/avatars/avatar-doctor.png" alt="main avatar" class="header-img" />
          </div>
        </div>
      </header>
      <main class="main-wrapper">
        <div class="main-wrapper__row">
          <button type="button" class="btn-main">Patients</button>
          <button type="button" class="btn-main btn-main--primary">Resolutions</button>
        </div>
        <div class="main-wrapper__row main-wrapper__row--between">
          <h2 class="main-title">My patients</h2>
          <div class="main-btn__box">
            <button type="button" class="main-btn__icon">
              <img src="./images/icons/search.png" alt="search" />
              <input class="main-btn__input" placeholder="search"/>
            </button>
            <button type="button" class="main-btn__icon">
              <img src="./images/icons/filter.png" alt="filter" class="main-btn__icon-img" />
              <p class="main-btn__icon-text">
                Sort by:
                <span class="main-btn__icon-sort"
                  >Date <img src="./images/icons/arrow-up.png" class="main-btn__icon-arrow"
                /></span>
              </p>
              <ul class="main-btn__menu is-hidden-menu">
                <li class="main-btn__menu-item">By name</li>
                <li class="main-btn__menu-item">By date</li>
              </ul>
            </button>
          </div>
        </div>
        <div class="patients-wrapper">
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-1.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Jane Cooper</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-2.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Eleanor Pena</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-3.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Devon Lane</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-4.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Jenny Wilson</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-5.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Courtney Henry</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-6.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Arlene McCoy</h2>
                  <h3 class="patient__subtitle patient__subtitle--canceled">
                    Appointment is canceled
                  </h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-7.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Annette Black</h2>
                  <h3 class="patient__subtitle patient__subtitle--waiting">
                    Waiting for confirmation...
                  </h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-8.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Cameron Williamson</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-9.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Bessie Cooper</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-10.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Savannah Nguyen</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-11.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Esther Howard</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
          <article class="patient-card__box">
            <div class="patient-box__row patient-box__row--border-bottom">
              <div class="patient-box__row patient-box__row--min-width">
                <img src="./images/avatars/patients-12.png" alt="patient" class="patient-img" />
                <div class="patient-box__column">
                  <h2 class="patient__title">Jerome Bell</h2>
                  <h3 class="patient__subtitle">Appointment is confirmed</h3>
                </div>
              </div>
              <button type="button" class="patient-btn">
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
                <span class="patient-btn__dot"></span>
              </button>
            </div>
            <div class="patient-list__box">
              <ul class="patient-list__description">
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/time.png"
                    alt="time"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-title">Thu Sept 10, 2021 4 pm ??? 5 pm</h2>
                </li>
                <li class="patient-list__description-item">
                  <img
                    src="./images/icons/schedule.png"
                    alt="schedule"
                    class="patient-list__description-img"
                  />
                  <h2 class="patient-list__description-text">
                    We will invite you in for a full review every year and more frequently if you
                    are struggling with blood sugar levels
                  </h2>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
    </div>
`;

export default patients;
