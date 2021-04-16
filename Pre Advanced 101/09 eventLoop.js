const uno = () => {
  console.log("I am One");
};

const dos = () => {
  setTimeout(() => {
    console.log("Wooohoooo");
  }, 3000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am Three");
};

//Asyncronous programming happening since the timeout is called for printing wooohoooo

uno();
dos();
tres();
