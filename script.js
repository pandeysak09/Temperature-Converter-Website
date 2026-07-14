function convertTemperature() {

    let temp = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    let celsiusResult = document.getElementById("celsiusResult");

    let fahrenheitResult = document.getElementById("fahrenheitResult");

    let kelvinResult = document.getElementById("kelvinResult");

    error.innerHTML = "";

    celsiusResult.innerHTML = "";

    fahrenheitResult.innerHTML = "";

    kelvinResult.innerHTML = "";

    if (temp === "") {

        error.innerHTML = "Please enter a temperature.";

        return;

    }

    if (isNaN(temp)) {

        error.innerHTML = "Please enter a valid numeric value.";

        return;

    }

    temp = parseFloat(temp);

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        if (temp < -273.15) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        celsius = temp;

        fahrenheit = (temp * 9 / 5) + 32;

        kelvin = temp + 273.15;

    }

    else if (unit === "fahrenheit") {

        if (temp < -459.67) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        celsius = (temp - 32) * 5 / 9;

        fahrenheit = temp;

        kelvin = celsius + 273.15;

    }

    else {

        if (temp < 0) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        kelvin = temp;

        celsius = temp - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;

    }

    celsiusResult.innerHTML =
        "Celsius : " + celsius.toFixed(2) + " °C";

    fahrenheitResult.innerHTML =
        "Fahrenheit : " + fahrenheit.toFixed(2) + " °F";

    kelvinResult.innerHTML =
        "Kelvin : " + kelvin.toFixed(2) + " K";

}