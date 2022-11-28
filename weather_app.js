let weather = {
    apiKey: "6c0adbfbac9baf97e13fae2af1c821ec",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=37.3034933&lon=-89.5230357&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        // Gets data from the API
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed, gust } = data.wind;
      // changes the data thats aleardy in the html to the data retrieved by the API
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = Math.round(temp) + "°F";
      // document.querySelector(".pressure").innerText = "Pressure: " + pressure + "hPa";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + Math.round(speed) + " MPH";
      document.querySelector(".weather").classList.remove("loading");

console.log(description)

      // Changes the background depending on the description of the forecast
        if(description === "clear sky") {
          document.body.style.backgroundImage =
          "url('clear_sky.jpg')";
          // document.querySelector(".description").innerText = description + 's';
          } else if(description === "broken clouds") {
            document.body.style.backgroundImage =
            "url('broken_clouds.jpg')";
          } else if ( description === "overcast clouds") {
            document.body.style.backgroundImage =
            "url('overcast.jpg')";
          } else if( description === "scattered clouds") {
            document.body.style.backgroundImage = 
            "url('scattered.jpg')";
          } else if( description === "moderate rain") {
            document.body.style.backgroundImage = 
            "url('modrain.jpg')";
          }  else if( description === "thunderstorm with heavy rain") {
            document.body.style.backgroundImage = 
            "url('tshrain.jpg')";
          } else if( description === "light rain") {
            document.body.style.backgroundImage = 
            "url('lightrain.jpg')";
          } else if( description === "haze") {
            document.body.style.backgroundImage = 
            "url('haze.jpg')";
          } else if (description === "few clouds") {
            document.body.style.backgroundImage = 
            "url('fewclouds.jpg')"
          }
    },
    // search: function () {
    //   this.fetchWeather(document.querySelector(".search-bar").value);
    // },
  };
  
//   document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
  weather.fetchWeather();
// let weather = {
//     "apiKey": "6c0adbfbac9baf97e13fae2af1c821ec",
//     fetchWeather: function () {
//         fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=37.3034933&lon=-89.5230357&appid=6c0adbfbac9baf97e13fae2af1c821ec"
//         ).then((response) => {
//             if (!response.ok) {
//               alert("No weather found.");
//               throw new Error("No weather found.");
//             }
//             return response.json();
//           })
//           .then((data) => this.displayWeather(data));
//       },
//       displayWeather: function (data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;
//         document.querySelector(".city").innerText = "Weather in " + name;
//         // document.querySelector(".icon").src =
//         //   "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         document.querySelector(".temp").innerText = temp + "°F";
//         document.querySelector(".humidity").innerText =
//           "Humidity: " + humidity + "%";
//         document.querySelector(".wind").innerText =
//           "Wind speed: " + speed + " MPH";
//         document.querySelector(".weather").classList.remove("loading");
//         // document.body.style.backgroundImage =
//         //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
//       },
//       search: function () {
//         this.fetchWeather(document.querySelector(".search-bar").value);
//       },
//     };
    
//     document.querySelector(".search button").addEventListener("click", function () {
//       weather.search();
//     });
    
//     document
//       .querySelector(".search-bar")
//       .addEventListener("keyup", function (event) {
//         if (event.key == "Enter") {
//           weather.search();
//         }
//       });
    
//     weather.fetchWeather("Cape Girardeau");