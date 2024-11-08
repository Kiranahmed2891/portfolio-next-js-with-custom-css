"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
        <div className="foot">
          <ul>
            <li className="animate">
              <Link
                    target="_blank"
                href={
                  "www.linkedin.com/in/kiran-ahmed-8064462b7"
                }
              >
                <FaLinkedin />
              </Link>
            </li>

            <li className="animate"> 
              <Link
                
                target="_blank"
                href={
                  "https://github.com/Kiranahmed2891"
                }
              >
                <FaGithub />
              </Link>
            </li>

            <li className="animate">
              <Link
                target="_blank"
                href={
                  "https://web.facebook.com/profile.php?id=100007473633651"
                }
              >
                <FaSquareFacebook />
              </Link>
            </li>

            <li className="animate">
              <Link       
                target="_blank"
                href={
                  "www.linkedin.com/in/kiran-ahmed-8064462b7"
                }
              >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>

        <p id="copyright">
          Copyright &copy; 2024 Designed by KiranAhmed &#9829; All right Reserved
        </p>
      </footer>
    </div>
  );
}
