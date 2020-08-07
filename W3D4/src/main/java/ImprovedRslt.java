import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ImprovedRslt extends HttpServlet{

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
  throws ServletException, IOException {
    System.out.println("In Get Improved");
    PrintWriter out = response.getWriter();

  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              System.out.println("In Post Improved");
              PrintWriter out = response.getWriter();

              String lplus=request.getParameter("lplus");
              String rplus=request.getParameter("rplus");
              String lmult=request.getParameter("lmult");
              String rmult=request.getParameter("rmult");

              String plusLine="<input type=\"number\" name=\"rplus\" /><span>+</span><input type=\"number\" name=\"lplus\" /><span>=</span><input type=\"number\" name=\"rslplus\" />";

              String mLine = "<input type=\"number\" name=\"rmult\" /><span>*</span><input type=\"number\" name=\"lmult\" /><span>=</span><input type=\"number\" name=\"rslmult\" />";

              if(!lplus.equals("") && !rplus.equals("")){
                int  rsltplus = Integer.parseInt(lplus) + Integer.parseInt(rplus);
                plusLine = String.format("<input value='%d' type=\"number\" name=\"rplus\" /><span>+</span><input value=%d type=\"number\" name=\"lplus\" /><span>=</span><input value='%d' type=\"number\" name=\"rslplus\" />",Integer.parseInt(lplus),Integer.parseInt(rplus),rsltplus);
              }
              if(!lmult.equals("") && !rmult.equals("")){
                int  rsltmult = Integer.parseInt(lmult)* Integer.parseInt(rmult) ;
                mLine = String.format("<input type=\"number\" value='%d' name=\"rmult\" /><span>*</span><input value='%d' type=\"number\" name=\"lmult\" /><span>=</span><input type=\"number\" value='%d' name=\"rslmult\" />",Integer.parseInt(lmult),Integer.parseInt(rmult),rsltmult);
              }

              out.print("<html>");
              out.print("<body>");
                out.print("<h2>Improved Calculator</h2>");
                out.print("<form>");
                  out.print("<div>");
                    out.print(plusLine);
                  out.print("</div>");
                  out.print("<div>");
                    out.print(mLine);
                  out.print("</div>");
                  out.print("<button type=\"submit\"  >Submit</button>");
                out.print("</form>");
              out.print("</body>");
            out.print("</html>");
            }


}
