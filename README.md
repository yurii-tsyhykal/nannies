# Nannies Services

Nanny.Services is a web service that simplifies the process of finding a
qualified nanny for your child. The application allows you to browse the catalog
of available nannies, use filters to search by criteria, add nannies to your
favorites list, and quickly make an appointment.

## Badges

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/nannies-kappa)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Demo

https://nannies-kappa.vercel.app/

## Features

- **User Registration and Authentication:** Users can register with an Email and
  password or log in to an existing account. <a href="#authentication">View
  authentication screenshot</a>
- **View the nannies directory:** A list of all nannies in the database is
  available with a brief description of each one.
- **Filtering and Sorting:** Ability to filter and sort the list of nannies by
  criteria such as name (alphabetically), hourly price, and popularity (by
  rating), as well as reset filters to display all nannies.
  <a href="#filter">View filter screenshot</a>
- **User Reviews:** See what other users have to say about a specific nanny
  (expands when clicked to <a href='#read-more'>"Read more"</a>).
- **Favorites List:** Registered users can add nannies to their personal
  favorites list for easy access in the future. The favorites list is available
  on a separate page.
- **Make an Appointment:** Registered users can fill out the form to book an
  appointment with their chosen nanny (available after clicking
  <a href='#read-more'>"Read more"</a>).

## Tech Stack Overview

- **Frontend:**
  [![Vite](https://img.shields.io/badge/Vite-6.0.5-%23646CFF.svg?style=flat&logo=vite)](https://www.npmjs.com/package/vite/v/6.0.5)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react?filename=package.json&logo=react&label=React) ](https://www.npmjs.com/package/react/v/18.3.1)
- **State Management:**
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/%40reduxjs%2Ftoolkit?filename=package.json&logo=redux&logoColor=%23764ABC&label=Redux%20Toolkit&labelColor=white&color=%23764ABC)](https://www.npmjs.com/package/@reduxjs/toolkit/v/2.5.1)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-redux?filename=package.json&logo=redux&logoColor=%23764ABC&label=React%20Redux&labelColor=white&color=%23764ABC) ](https://www.npmjs.com/package/react-redux/v/9.2.0)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/redux-persist?filename=package.json&logo=redux&logoColor=%23764ABC&label=Redux%20Persist&labelColor=white&color=%23764ABC) ](https://www.npmjs.com/package/redux-persist/v/6.0.0)
- **Routing:**
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-router-dom?filename=package.json&style=flat&logo=reactrouter&logoColor=%23CA4245&label=React%20Router%20Dom&color=%23CA4245) ](https://www.npmjs.com/package/react-router-dom/v/7.1.3)
- **Backend & Database:**
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/firebase?style=flat&logo=firebase&logoColor=%23FF7139&label=Firebase&color=%23FF7139) ](https://www.npmjs.com/package/firebase/v/11.2.0)
  [![Auth](https://img.shields.io/badge/Enabled-Firebase_Auth?style=flat&logo=firebase&logoColor=orange&label=Firebase%20Auth&color=%61DAFB) ](https://firebase.google.com/docs/auth)  
   [![Realtime DB](https://img.shields.io/badge/Used-Realtime_Database?style=flat&logo=firebase&logoColor=orange&label=Realtime%20Database&color=%61DAFB) ](https://firebase.google.com/docs/database)
- **Forms and validation:**
  ![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-hook-form?filename=package.json&style=flat&logo=reacthookform&logoColor=%23EC5990&label=React%20Hook%20Form&color=%23EC5990)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/yup?filename=package.json&style=flat&label=Yup&color=%23EC5990) ](https://www.npmjs.com/package/yup/v/1.6.1)
- **UI and Helpers:**
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-modal?filename=package.json&style=flat&logo=react&label=React%20Modal) ](https://www.npmjs.com/package/react-modal/v/3.16.3)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-toastify?filename=package.json&style=flat&logo=react&label=React%20Toastify) ](https://www.npmjs.com/package/react-toastify/v/11.0.5)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/react-select?filename=package.json&style=flat&logo=react&label=React%20Select) ](https://www.npmjs.com/package/react-select/v/5.10.0)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/dayjs?filename=package.json&style=flat&logo=javascript&label=Day.js) ](https://www.npmjs.com/package/dayjs/v/1.11.13)
  [![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/yurii-tsyhykal/nannies/clsx?filename=package.json&style=flat)](https://www.npmjs.com/package/clsx/v/2.1.1)
- **Stylization:**
  ![Static Badge](https://img.shields.io/badge/Used-css_modules?style=flat&logo=cssmodules&label=CSS%20Modules)
- **Deployment:**
  [![Static Badge](https://img.shields.io/badge/Used-vercel?style=flat&logo=vercel&label=Vercel&labelColor=%23000000) ](https://vercel.com/home)


## Installation

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-blue?style=flat)

**1. CLone the repository**:

```bash
  git clone https://github.com/yurii-tsyhykal/nannies.git
  cd nannies
```
**2. Install dependencies:** 
```bash
npm install
```

**Create .env file in the root directory with the following content:**

## Environment Variables

To run this project, you will need to add the following environment variables to
your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Authors

- [@octokatherine](https://www.github.com/octokatherine)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Usage/Examples

<details id='read-more'><summary>View usage screenshots for nannies profile</summary>
<img src="public/images/readMe/profileNanny.png"/>
<img src="public/images/readMe/profileNannyDetail.png"/>
</details>

<details id='read-more'><summary>View usage screenshots for filter</summary>
<img src="public/images/readMe/filter.png"/>
</details>

<details id='authentication'><summary>View usage screenshots for authentication</summary>
<img src="public/images/readMe/authenticationBtn.png"/>
<img src="public/images/readMe/signUpForm.png"/>
<img src="public/images/readMe/logInForm.png"/>
</details>
