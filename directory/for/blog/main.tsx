/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Kirstin's blog",
  description: "This is my creative coding blog.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  //avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatar: "./images/mii.png",
  avatarClass: "rounded-full",
  author: "Kirstin Marshall",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
