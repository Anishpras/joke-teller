const axios = require("axios");
const say = require("say");
const chalkAnimation = require("chalk-animation");
const joke = async () => {
  let anim = chalkAnimation.rainbow("\n Welcome To Joke Teller \n");
  await new Promise((res) => setTimeout(res, 1500));
  anim.stop();
  let url = "https://api.chucknorris.io/jokes/random";

  await axios.get(url).then((response) => {
    say.speak(response.data.value);
  });
};

joke();
