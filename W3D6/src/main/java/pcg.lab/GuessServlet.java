package pcg.lab;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet(urlPatterns="/guessServlet",loadOnStartup = 1)
public class GuessServlet extends HttpServlet{

  String[] seq={"3, 1, 4, 1, 5,","1, 1, 2, 3, 5,","1, 4, 9, 16, 25,","2, 3, 5, 7, 11,","1, 2, 4, 8, 16,"};

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
  throws ServletException, IOException {
    System.out.println("In Get guess");
    PrintWriter out = response.getWriter();

    Quiz mySession = new Quiz();
    HttpSession session=request.getSession();
    session.setAttribute("myQuizzState",mySession);
    //genQuizPage(mySession,out,seq[0],false,"9");
  }

  protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

              System.out.println("In Post Guess");
              HttpSession session = null;
              Quiz mySess = null;
              if(req.getSession(false).getAttribute("myQuizzState") != null){
                session = req.getSession();
                mySess = (Quiz)session.getAttribute("myQuizzState");
              }else{
                mySess = new Quiz();
                session = req.getSession();
                session.setAttribute("myQuizzState",mySess);
              }


              System.out.println("==========");
              System.out.println(mySess.index);
              System.out.println("==========");

              String guessed = req.getParameter("txtAnswer");
              String rstart = req.getParameter("btnStart");
              String nxt = req.getParameter("btnNext");
              PrintWriter out = res.getWriter();

              if (rstart != null) {
                mySess.restart();
                req.setAttribute("seq",seq[0]);
              }else if(nxt != null){
                if(guessed != null && mySess.index != 4){
                  boolean isItCor = mySess.isCorrect(Integer.parseInt(guessed));
                  req.setAttribute("seq",seq[mySess.index]);
                  //genQuizPage(mySess,out,seq[mySess.index],!isItCor,guessed);
                }else {
                  //genQuizOverPage(out);
                  req.setAttribute("over","over");
                  System.out.println("over");
                }
              }


              RequestDispatcher rd = req.getRequestDispatcher("ViewGuessServlet.jsp");

              rd.forward(req, res);
            }
}
