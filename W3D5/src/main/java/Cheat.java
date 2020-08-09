
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet("/addOne")
public class Cheat extends HttpServlet {


    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
              System.out.println("In Get Add One");
              PrintWriter out = res.getWriter();
              String num = "error";
              HttpSession session=req.getSession(false);
              String sess = (String)session.getAttribute("myNum");
              if(sess !=null){
                num = sess;
              }
              out.print(num);

    }

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {


              System.out.println("In POST Quizz");
              String num = req.getParameter("num");

              HttpSession session=req.getSession();
              session.setAttribute("myNum",num);

              res.sendRedirect("/addOne");



    }
}
