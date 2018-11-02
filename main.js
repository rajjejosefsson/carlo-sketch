const carlo = require("carlo");

(async () => {
  // Launch the browser.
  const app = await carlo.launch();

  // Tell carlo where your web files are located.
  app.serveFolder(__dirname);

  // Expose 'env' function in the web environment.
  await app.exposeFunction("myEnvFunction", _ => process.env);

  // Navigate to the main page of your app.
  await app.load("index.html");
})();



