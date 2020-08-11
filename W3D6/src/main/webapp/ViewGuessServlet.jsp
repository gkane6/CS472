<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="pcg.lab.Quiz" %>

<!DOCTYPE html>
<html>
  <head>
    <title>NumberQuiz</title>
  </head>
  <body>
    over:  ${over}
    <p><%= request.getAttribute('over) %></p>
   <c:choose>
    <c:when test="${request.getAttribute('over') == null}">
    <p><%= request.getAttribute("over") %></p>
        <form name="myform" method="post">
          <h3>Have fun with NumberQuiz!</h3>
          <p>Your current score is: <%=((Quiz)session.getAttribute("myQuizzState")).getCurrentQuestionIndex() %></p>
          <p>Guess the next number in the sequence!</p>
          <p>[<%= request.getAttribute("seq") %> <font style="color: red;"><b> ? </b></font>]
          </p>
          <p>Your answer:<input type="number" name="txtAnswer" /></p>
          <%
            if(request.getAttribute("error") !=null && !(boolean)request.getAttribute("error")){
          %>
          <p style='color:red'>Your last answer was not correct! Please try again</p>
          <%} %>
          <p>
            <input type="submit" name="btnNext" value="Next" /><input
              type="submit"
              name="btnStart"
              value="Restart!"
            />
          </p>
        </form>
      </c:when>
      <c:otherwise>
        <p style='color:red'>The number quiz is over!</p> <form method='post'><input type='submit' name='btnStart' value='Start Again!' /></form>
      </c:otherwise>
   </c:choose>
  </body>
</html>
