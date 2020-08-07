
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

public class SimpleRslt extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              System.out.println("In Get Rsult");
              System.out.println(request);


    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


              System.out.println("In POST Rsult");

              String lplus=request.getParameter("lplus");
              String rplus=request.getParameter("rplus");
              String lmult=request.getParameter("lmult");
              String rmult=request.getParameter("rmult");

              String plusLine="";

              String mLine = "";

              if(!lplus.equals("") && !rplus.equals("")){
                int  rsltplus = Integer.parseInt(lplus) + Integer.parseInt(rplus);
                plusLine = "<p>"+lplus+" + "+rplus+ " = "+rsltplus+"</p>";
              }
              if(!lmult.equals("") && !rmult.equals("")){
                int  rsltmult = Integer.parseInt(lmult)* Integer.parseInt(rmult) ;
                mLine = "<p>"+lmult+" * "+rmult+ " = "+rsltmult+"</p>";
              }

              PrintWriter out = response.getWriter();
        out.print("<html><head><title>SimpleResult</title></head><body>");
        out.print(plusLine);
        out.print(mLine);
        out.print("</body></html>");


    }
}
