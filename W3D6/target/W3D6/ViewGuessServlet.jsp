<%@ page import="pcg.lab.Quiz" %>
<!DOCTYPE html>
<html>
  <head>
    <title>NumberQuiz</title>
  </head>
  <body>
  <%
    if(request.getAttribute("over") == null){
  %>
    <form name="myform" method="post">
      <h3>Have fun with NumberQuiz!</h3>
      <p>Your current score is: <%=((Quiz)session.getAttribute("myQuizzState")).getCurrentQuestionIndex() %></p>
      <p>Guess the next number in the sequence!</p>
      <p>[<%= request.getAttribute("seq") %> <font style="color: red;"><b> ? </b></font>]
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
    <%
      }else {
    %>
        <p style='color:red'>The number quiz is over!</p> <form method='post'><input type='submit' name='btnStart' value='Start Again!' /></form>
   <%
    }
   %>
  </body>
</html>
