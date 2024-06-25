// import <LMS_logo className="jpg"></LMS_logo>
import { Link } from "react-router-dom";
import {MyLogo, MyNavbar} from "./pageService";
// import logo from "../images/LMS_logo.jpg"

function Test() {
    //to set title of the page
    document.title = "TEST";
  return (
    <div class="container">
    <div class="section book-details">
        <button onclick="window.history.back()" style="background: none; border: none; color: white; font-size: 16px;">&larr; Back</button>
        <h2><img src="book-icon.png" alt="Book Icon" /> Book Details</h2>
        <p>Book Id: 5</p>
        <p>Book Name: Java: A Beginner's Guide</p>
        <p>Author: Herbert Schildt</p>
        <p>Quantity: 3</p>
    </div>
    <div class="section student-details">
        <h2><img src="student-icon.png" alt="Student Icon" /> Student Details</h2>
        <p>Student Id: 7</p>
        <p>Student Name: Tony</p>
        <p>Course Name: B.E</p>
        <p>Branch: CS</p>
    </div>
    <div class="section issue-book">
        <button style="background: none; border: none; color: red; font-size: 20px; float: right;">&times;</button>
        <h2><img src="issue-book-icon.png" alt="Issue Book Icon" /> Issue Book</h2>
        <div class="form-group">
            <label for="book-id">Book Id:</label>
            <input type="text" id="book-id" value="5" />
        </div>
        <div class="form-group">
            <label for="student-id">Student Id:</label>
            <input type="text" id="student-id" value="7" />
        </div>
        <div class="form-group">
            <label for="issue-date">Issue Date:</label>
            <input type="date" id="issue-date" />
        </div>
        <div class="form-group">
            <label for="due-date">Due Date:</label>
            <input type="date" id="due-date" />
        </div>
        <button class="issue-button">ISSUE BOOK</button>
    </div>
</div>
  );
}



export default Test;
