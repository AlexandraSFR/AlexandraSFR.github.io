let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #82629f;">Desarrollo sitios web y manejo bases de datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
