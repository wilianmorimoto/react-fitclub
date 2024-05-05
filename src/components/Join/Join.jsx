import { useRef } from "react";
import "./Join.css";

const Join = () => {
	return (
		<div id="join-us" className="join">
			<div className="left-j">
        <hr />
				<div>
					<span className="stroke-text">READY TO</span>
					<span>LEVEL UP</span>
				</div>
				<div>
					<span>YOUR BODY</span>
					<span className="stroke-text">WITH US?</span>
				</div>
			</div>
			<div className="right-j">
        <form className="email-container">
          <input type="email" name="user-email" placeholder="Enter your e-mail address" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
		</div>
	);
};

export default Join;
