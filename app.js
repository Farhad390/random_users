fetch ('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    const userData = data.results[0];
        // user images
        const userImg = document.getElementById('user-img');
        const images = userData.picture.large;
        userImg.src = images;
    
        // user name
        const userFullName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
        const userName = document.getElementById('user-name');
        userName.innerHTML = userFullName;

        // User gender
        const gender = `${userData.gender}`;
        const genderShow = document.getElementById('user-gender');
        genderShow.innerHTML = gender;
        

        // Email
        const email = `${userData.email}`;
        const userEmail = document.getElementById('user-email');
        userEmail.innerHTML = email;

        // User country
        const country = `${userData.location.country}`;
        const userCountry = document.getElementById('user-country');
        userCountry.innerHTML = country;
        console.log(country)  
        
        
        // User city
        const city = `${userData.location.city}`;
        const uesrCity = document.getElementById('user-city');
        uesrCity.innerHTML = city;
        console.log(city)

        // Post code
        const postcode = `${userData.location.postcode}`;
        const uesrPostcode = document.getElementById('user-postcode');
        uesrPostcode.innerHTML = postcode;

        // User State
        const state = `${userData.location.state}`;
        const userState = document.getElementById('user-state');
        userState.innerHTML = state;

        // User TimeZone
        const timeZone = `Offset ${userData.location.timezone.offset} -> ${userData.location.timezone.description}`;
        console.log(timeZone)
        const userTimeZone = document.getElementById('user-timezone');
        userTimeZone.innerHTML = timeZone;

    console.log(userData);
})


const reloadBtn = document.getElementById('reload-btn');
reloadBtn.addEventListener('click', () => {
    location.reload();
})