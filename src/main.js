import axios from "axios";
import say from "say";
import chalkAnimation from "chalk-animation";
export default async function jokeTeller() {
  let anim = chalkAnimation.rainbow("\n Welcome To Joke Teller \n");
  await new Promise((res) => setTimeout(res, 1500));
  anim.stop();
  let url = "https://api.chucknorris.io/jokes/random";

  await axios.get(url).then((response) => {
    say.speak(response.data.value);
  });
}
