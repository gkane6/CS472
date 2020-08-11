
package pckg.w4d2;

import com.google.gson.Gson;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;


/**
 *
 * @author levi
 */
@WebServlet(name = "ajaxPets", urlPatterns = {"*.phpppp"})
public class GalleryServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              System.out.println("Get Gallery");
              RequestDispatcher view = request.getRequestDispatcher("guests.jsp");
              view.forward(request, response);

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
  System.out.println("Post Gallery");
    }



}
