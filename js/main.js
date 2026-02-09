// Function to get the current time in a specific country
function getTimeInCountry(countryCode) {
    const options = {
        timeZone: countryCode,
        hour12: false, // Use 24-hour format
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const currentTime = new Date().toLocaleTimeString('en-GB', options); // Format time for the given country
    return currentTime;
}

// Function to update the times for each country
function updateTimes() {
    // Time zones for different countries
    const countries = {
        uk: 'Europe/London',
        us: 'America/New_York',
        india: 'Asia/Kolkata',
        japan: 'Asia/Tokyo',
        germany: 'Europe/Berlin',
        china: 'Asia/Shanghai',
        cairo: 'Africa/Cairo',
        australia: 'Australia/Perth',
        kigali: 'Africa/Kigali',
        honolulu: 'Pacific/Honolulu',
        accra: 'Africa/Accra',
        paris: 'Europe/Paris',
        moscow: 'Europe/Moscow'

    };

    // Update time for each country
    document.getElementById('uk').textContent = getTimeInCountry(countries.uk);
    document.getElementById('us').textContent = getTimeInCountry(countries.us);
    document.getElementById('india').textContent = getTimeInCountry(countries.india);
    document.getElementById('japan').textContent = getTimeInCountry(countries.japan);
    document.getElementById('germany').textContent = getTimeInCountry(countries.germany);
    document.getElementById('china').textContent = getTimeInCountry(countries.china);
    document.getElementById('cairo').textContent = getTimeInCountry(countries.cairo);
    document.getElementById('australia').textContent = getTimeInCountry(countries.australia);
    document.getElementById('kigali').textContent = getTimeInCountry(countries.kigali);
    document.getElementById('honolulu').textContent = getTimeInCountry(countries.honolulu);
    document.getElementById('accra').textContent = getTimeInCountry(countries.accra);
    document.getElementById('paris').textContent = getTimeInCountry(countries.paris);
    document.getElementById('moscow').textContent = getTimeInCountry(countries.moscow);


}

// Update time every second for live display
setInterval(updateTimes, 1000);

// Initial call to display the time immediately when the page loads
updateTimes();
