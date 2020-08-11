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
import java.util.*;

@WebServlet("/random")
public class QuizRandom extends HttpServlet{

  protected void doGet(HttpServletRequest req, HttpServletResponse response)
  throws ServletException, IOException {
    System.out.println("In Get Random");
    PrintWriter out = response.getWriter();
    List<Integer> ran = new ArrayList<>();
    Random rnd = new Random();
    int amn = Integer.parseInt(req.getParameter("amount"));

    for (int i = 0; i < amn; i++) {
      ran.add(rnd.nextInt());
    }
    req.setAttribute("listRan",ran);

    RequestDispatcher rd = req.getRequestDispatcher("random.jsp");

              rd.forward(req, response);

  }

}
