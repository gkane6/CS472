import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet(urlPatterns="/guess",loadOnStartup = 1)
public class GuessServlet extends HttpServlet{

  String[] seq={"3, 1, 4, 1, 5,","1, 1, 2, 3, 5,","1, 4, 9, 16, 25,","2, 3, 5, 7, 11,","1, 2, 4, 8, 16,"};


//students - You can use this if you want.  It might save you a little typing for the servlet.

private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

out.print("<html>");
out.print("<head>");
out.print("	<title>NumberQuiz</title>");
out.print("</head>");
out.print("<body>");
out.print("	<form method='post'>");
out.print("		<h3>Have fun with NumberQuiz!</h3>");
  out.print("<p>Your current score is: ");
  out.print(sessQuiz.getNumCorrect() + "</br></br>");
  out.print("<p>Guess the next number in the sequence! ");
  out.print("["+currQuest +"<font style='color:red'><b> ? </b></font>]</p>");

  out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

  /* if incorrect, then print out error message */
  if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
      out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
  }
  out.print("<p><input type='submit' name='btnNext' value='Next' /><input type='submit' name='btnStart' value='Restart!' /></p> ");

  out.print("</form>");
  out.print("</body></html>");
}

private void genQuizOverPage(PrintWriter out) {
  out.print("<html> ");
out.print("<head >");
out.print("<title>NumberQuiz is over</title> ");
out.print("</head> ");
out.print("<body> ");
out.print("<p style='color:red'>The number quiz is over!</p> <form method='post'><input type='submit' name='btnStart' value='Start Again!' /></form>	</body> ");
  out.print("</html> ");
}


  protected void doGet(HttpServletRequest request, HttpServletResponse response)
  throws ServletException, IOException {
    System.out.println("In Get guess");
    PrintWriter out = response.getWriter();

    Quiz mySession = new Quiz();
    HttpSession session=request.getSession();
    session.setAttribute("myQuizzState",mySession);
    genQuizPage(mySession,out,seq[0],false,"9");
  }

  protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
              System.out.println("In Post Guess");
              HttpSession session=req.getSession(false);
              Quiz mySess = (Quiz)session.getAttribute("myQuizzState");

              System.out.println("==========");
              System.out.println(mySess.index);
              System.out.println("==========");

              String guessed = req.getParameter("txtAnswer");
              String rstart = req.getParameter("btnStart");
              String nxt = req.getParameter("btnNext");
              PrintWriter out = res.getWriter();

              if (rstart != null) {
                mySess.restart();
                genQuizPage(mySess,out,seq[0],false,"9");
              }else if(nxt != null){
                if(guessed != null && mySess.index != 4){
                  boolean isItCor = mySess.isCorrect(Integer.parseInt(guessed));
                  genQuizPage(mySess,out,seq[mySess.index],!isItCor,guessed);
                }else {
                  genQuizOverPage(out);
                }
              }
            }
}
