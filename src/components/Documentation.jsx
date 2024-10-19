import { useState } from "react";
import "../assets/Doc.css";

const Documentation = () => {
  const [copiedId, setCopiedId] = useState(null); // Track the ID of the copied code

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id); // Set the copied ID
    setTimeout(() => setCopiedId(null), 2000); // Clear the copied ID after 2 seconds
  };

  return (
    <div className="documentation">
      <h1>Project Documentation</h1>

      <section id="installation">
        <h2>Installation</h2>
        <p>To install the project, use the following command:</p>
        <pre>
          <code className={copiedId === "install" ? "copied" : ""}>
            npm install num2talk
          </code>
          <span
            className="copy-icon"
            onClick={() =>
              handleCopy("npm install your-project-name", "install")
            }
          >
            <i className="fas fa-copy"></i>
          </span>
        </pre>
      </section>

      <section id="usage">
        <h2>Usage</h2>
        <p>Here’s how to use the project:</p>
        <pre>
          <code className={copiedId === "usageImport" ? "copied" : ""}>
            {`
    import {
    num2Arabic,
    num2Bangla,
    num2Chinese,
    num2English,
    num2Hindi,
    num2Japanese,
    num2Portuguese,
    num2Russian,
    num2Spanish,
    num2Urdu
} from 'num2talk';



const languageMap =  () => {
    const number = 2432144423

    console.log(num2English(number))
    console.log(num2Hindi(number))
    console.log(num2Japanese(number))
    console.log(num2Portuguese(number))
    console.log(num2Russian(number))
    console.log(num2Spanish(number))
    console.log(num2Urdu(number))
    console.log(num2Arabic(number))
    console.log(num2Bangla(number))
    console.log(num2Chinese(number))


}

export default languageMap`}
          </code>
          <span
            className="copy-icon"
            onClick={() =>
              handleCopy(
                "import { yourFunction } from 'your-project-name';",
                "usageImport"
              )
            }
          >
            <i className="fas fa-copy"></i>
          </span>
        </pre>
      
      </section>

      

      <section id="api">
        <h2>API Reference</h2>
        <p>List of available functions and their descriptions:</p>
        
      </section>

      <footer>
        <p>
          For more information, check out the{" "}
          <a
            href="https://github.com/zobkazi/num2talk"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Documentation;
