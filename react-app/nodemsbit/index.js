const express = require("express");
const axios = require("axios");
const router = express.Router();
let dataOnlyReleventStatus;
// http://localhost:3000/product
router.get("/", (req, res) => {
  let url =
    "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
  axios.get(url).then((resp) => {
    let myData = resp.data;
    dataOnlyReleventStatus = myData.filter((item) => {
      if (item.status) {
        if (item.status == 1) {
          return item;
        }
      }
    });
    res.json(dataOnlyReleventStatus);
  });
});

router.get("/search/", (req, res) => {
  // מה שבא אחרי הסימן שאלה נקרא
  // QUERY STRING and we collect it with req.query....
  //http://localhost:3000/prods/search/?q=Mil
  // משתמשים בריגולר מכיוון שאנחנו רוצים לעשות חיפוש
  // לחלק מהסטינג ושלא יהיה מדוייק
  const mySearch = new RegExp(`${req.query.q}`);
  //const mySearch = req.query.q;
  // prodsModel.find({name:mySearch})
  // $or = קווירי מיוחד של המונגו לחיפוש בכמה עמודות
  prodsModel
    .find({ $or: [{ name: mySearch }, { cat: mySearch }] })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;