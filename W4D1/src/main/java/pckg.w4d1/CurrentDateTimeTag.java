package pckg.w4d1;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;

public class CurrentDateTimeTag extends SimpleTagSupport {

   String color;
   String size;

   public void setColor(String str){
      this.color = str;

   }

   public void setSize(String str){
      this.size = str;
   }

   public void doTag() throws JspException, IOException {
      Date dNow = new Date();
SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
System.out.println("Current Date: " + ft.format(dNow));
      JspWriter out = getJspContext().getOut();
      out.write(String.format("<span style='color: %s; font-size:%s;'>%s</span>",color,size,ft.format(dNow)));
   }
}
