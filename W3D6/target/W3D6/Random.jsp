<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="pcg.lab.Quiz" %>

<!Doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Randoms</title>
</head>

<body>
    <ul>
        <c:forEach var="ra" items="${listRan}">
            <li>${ra}</li>
        </c:forEach>
    </ul>
</body>
</html>

