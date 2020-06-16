import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3frloO-bdywixDBDgSxh4-KclWqZLJcHab97OTVO-1IJXsfw_6RRIyxrOZ7dJ0Oq5QRJmmayKvZGKSKYpbdSCzu_Gr-e-aXay4dpOdRypFRoYsp5ALXWlAUq48vnXnYx",
  },
});
