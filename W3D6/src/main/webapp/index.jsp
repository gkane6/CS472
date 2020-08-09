<html>
  <body>
    <h2>Hello World!</h2>
    <form name="myform" action="guessServlet" method="post">
      <h3>Have fun with NumberQuiz!</h3>
      <p>Your current score is : 0 .</p>
      <p>Guess the next number in the sequence!</p>
      <p>[3, 1, 4, 1, 5,<font style="color: red;"><b> ? </b></font>]
      </p>
      <p>Your answer:<input type="number" name="txtAnswer" /></p>
      <p>
        <input type="submit" name="btnNext" value="Next" /><input
          type="submit"
          name="btnStart"
          value="Restart!"
        />
      </p>
    </form>
  </body>
</html>
