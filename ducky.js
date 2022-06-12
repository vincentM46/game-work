window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )
  let duck_div = document.createElement("div");
  duck_div.className = "duck";
  document.body.appendChild(duck_div);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  setInterval(function() {
    duck_div.classList.toggle("flap");
  }, 250);

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"
  function moveDuck(x) {
    let move = randomPosition();
    x.style.left = move[0] + "px";
    x.style.top = move[0] + "px";
    duckTransition(x);
  }
 
  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
  setInterval(function() {
    moveDuck(duck_div);
  }, 1000);
  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object
  function createDuck() {
    let duck_div = document.createElement("div");
    setInterval(function() {
      moveDuck(duck_div);
    }, 1000);
    duck_div.className = "duck";
    document.body.appendChild(duck_div);
    setInterval(function() {
      duck_div.classList.toggle("flap");
    }, 500);
    return duck_div;
  }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (let i = 0; i < 5; i++) {
    let create = new createDuck();
  }

  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;
  function randomPosition() {
    let duckWidth = 100;
    let duckHeight = 115;
    let x = Math.random() * (window.innerWidth - 120) + duckHeight;
    let y = Math.random() * (window.innerHeight - 120) + duckWidth;
    return [x, y];
  }

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
  let allDucks = document.querySelectorAll(".duck");
  allDucks.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.classList.toggle("shot");
      removeDuck(item);
      setTimeout(checkForWinner, 1000);
    })
  })

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain
  function removeDuck(i) {
    let text = i.className;
    const removeElement = () => {
      i.parentNode.removeChild(i);
    };
    if (text.includes("shot")) {
      setTimeout(removeElement, 1000);
    }
  }

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  function checkForWinner() {
    let duck_Count = document.querySelectorAll("div");
    if (duck_Count.length === 0) {
      window.alert("YOU WIN!");
    }
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?
  let duckSpeed = document.querySelectorAll("div");
  function duckTransition(speed) {
    speed.forEach((item) => {
      item.style.transitionTimingFunction = "cubic-bezier(0.2, 0.1, 0.3, 0.2)";
    });
  }
  duckTransition(duckSpeed);

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing
  let ducks = document.querySelectorAll("div");
  for (let i = 0; i < ducks.length; i++) {
    let a = ducks[Math.floor(Math.random() * ducks.length)];
    a.classList.toggle("right");
  }
  function direction(j) {
    j.forEach((v) => {
      if (v.className.includes("left")) {
        v.classList.toggle("right");
      } else {
        v.classList.toggle("left");
      }
    });
  }
  setInterval(function() {
    direction(ducks);
  }, 4000)
  // Done, you have accomplish another level of skill
};
