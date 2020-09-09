const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/devanfarrell/aim.git"
  },
  e => {
    console.log("Deploy Complete!");
    if (e) {
      console.log(e);
    }
  }
);
