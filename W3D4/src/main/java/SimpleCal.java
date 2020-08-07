import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SimpleCal extends HttpServlet{

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
  throws ServletException, IOException {
    System.out.println("In Get SimpleCal");
    PrintWriter out = response.getWriter();

    out.print("<html>");
      out.print("<body>");
        out.print("<h2>Simple Calculator</h2>");
        out.print("<form method='post' url='/simplerslt' action='simplerslt'>");
          out.print("<div>");
            out.print("<input type=\"number\" name=\"rplus\" />");
            out.print("<span>+</span>");
            out.print("<input type=\"number\" name=\"lplus\" />");
          out.print("</div>");
          out.print("<div>");
            out.print("<input type=\"number\" name=\"rmult\" />");
            out.print("<span>*</span>");
            out.print("<input type=\"number\" name=\"lmult\" />");
          out.print("</div>");
          out.print("<button type=\"submit\"  >Submit</button>");
        out.print("</form>");
      out.print("</body>");
    out.print("</html>");
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              System.out.println("In Post SimpleCal");
              System.out.println(request);
            }


}
