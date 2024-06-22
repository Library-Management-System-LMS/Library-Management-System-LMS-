// import <LMS_logo className="jpg"></LMS_logo>
function Test() {

  return (
    <div className="container">
      
  <title>Test</title>

  <div class="container">
  <div class="header">
        Library Management System
    </div>

    <div class="counters">
        <div class="counter">
            <h3>No. of Books</h3>
            <p>4</p>
        </div>
        <div class="counter">
            <h3>No. of Users</h3>
            <p>6</p>
        </div>
        <div class="counter">
            <h3>Issued Books</h3>
            <p>2</p>
        </div>
        <div class="counter">
            <h3>Defaulter List</h3>
            <p>1</p>
        </div>
    </div>

    <div class="container">
        <h3>User Details</h3>
        <table>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Sunil</td>
                <td>sunil@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Mangesh</td>
                <td>mangesh@example.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Deepak</td>
                <td>deepak@example.com</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Rahul</td>
                <td>rahul@example.com</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Praful</td>
                <td>praful@example.com</td>
            </tr>
        </table>
        <h3>Book Details</h3>
        <table>
            <tr>
                <th>Book ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Quantity</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Introducing Java 8</td>
                <td>Raoul-Gabriel Urma</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Java: The Legend</td>
                <td>Benjamin Evans</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Spring MVC: A tutorial</td>
                <td>Paul Deck</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Core Java Volume I</td>
                <td>Cay S. Horstmann</td>
                <td>3</td>
            </tr>
        </table>
    </div>
    </div>
    </div>
  );
}



export default Test;
