
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet("/giveNum")
public class CheatQuiz extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              System.out.println("In Get Quizz");
              PrintWriter out = response.getWriter();
              out.print("<html> ");
out.print("<head >");
out.print("<title>NumberQuiz is over</title> ");
out.print("</head> ");
out.print("<body> ");
out.print("<form method='post'><input type='number' name='num' /><input type='submit' name='btnStart'/></form>	</body> ");
  out.print("</html> ");
              System.out.println(request);


    }

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {


              System.out.println("In POST Quizz");
              String num = req.getParameter("num");


              HttpSession session=req.getSession();
              session.setAttribute("myNum",num);

              res.sendRedirect("addOne");

    }
}
