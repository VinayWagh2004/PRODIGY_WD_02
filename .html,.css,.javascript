.HTML
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Neobrutalism Portfolio Page</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container circle-load-svg">
      <header>
        <div class="logo">Amit</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#portfolio">Showcase</a></li>
            <li><a onclick="showContactForm()">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="sctn-hero">
          <div class="hero-msg">
            <div class="hero-msg-content">
              <div class="hero-msg-tag">John Doe.</div>
              <div class="hero-msg-primary">Trans<wbr>forming design into Neu<wbr>brutal<wbr>ism.</div>
              <div class="hero-msg-sub">Backend/Frontend/UI Designer.</div>
            </div>
            <div class="hero-actions">
              <button class="btn hover-effect" onclick="showShowcase()">
                Showcase
              </button>
            </div>
          </div>
          <div class="hero-flaire">
            <svg role="img" aria-labelledby="laptopLabel" id="laptop" height="100%" viewBox="120 140 220 180" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title id="laptopLabel">This image shows a line-art drawing of a laptop whose lines get more defination with an animation.</title>
              <g>
                <path class="logopath" d="M213.5 159.5C209.833 159.167 194.5 160 167.5 162C140.5 164 126 165.667 124 167C122 168.333 121 170.333 121 173C121 175.667 124.667 191 132 219C139.333 247 144.5 262 147.5 264C150.5 266 154.167 267.333 158.5 268C162.833 268.667 165.833 269.833 167.5 271.5C169.167 273.167 175.333 275.167 186 277.5C196.667 279.833 202.167 280.667 202.5 280C202.833 279.333 202.5 278.667 201.5 278C200.5 277.333 195.167 275.667 185.5 273C180.667 271.667 175.833 270.333 171 269C183.333 266.167 195.667 263.333 208 260.5C232.667 254.833 249.833 252.5 259.5 253.5C269.167 254.5 275.333 255.333 278 256C280.667 256.667 282.333 257.5 283 258.5C283.333 259 283.667 259.5 284 260C271.167 263.833 258.333 267.667 245.5 271.5C219.833 279.167 204.333 282.833 199 282.5C193.667 282.167 184.333 280.167 171 276.5C164.333 274.667 157.667 272.833 151 271C150.833 271.667 150.667 272.333 150.5 273C150.167 274.333 150.667 275.5 152 276.5C153.333 277.5 165.833 281.5 189.5 288.5C201.333 292 213.167 295.5 225 299C224.271 299.006 223.542 299.024 222.812 299.031C224.167 299.262 225.516 299.588 226.844 300C227.896 300 228.948 300 230 300C229.333 299.5 228.667 299 228 298.5C226.667 297.5 214 293.667 190 287C166 280.333 153.5 276.5 152.5 275.5C151.5 274.5 151.167 273.667 151.5 273C151.833 272.333 159 274 173 278C187 282 196.333 284 201 284C205.667 284 220.833 280.167 246.5 272.5C272.167 264.833 285 260.5 285 259.5C285 258.5 284.5 257.667 283.5 257C282.5 256.333 277.167 255 267.5 253C257.833 251 239.333 253.167 212 259.5C184.667 265.833 167.5 268.333 160.5 267C153.5 265.667 148.833 264 146.5 262C144.167 260 139.667 246 133 220C126.333 194 122.833 179.167 122.5 175.5C122.167 171.833 123 169.333 125 168C127 166.667 141.667 165 169 163C196.333 161 211 160 213 160C215 160 216.833 160.833 218.5 162.5C219.333 163.333 220.167 164.167 221 165C206.5 165.833 192 166.667 177.5 167.5C148.5 169.167 133 170.5 131 171.5C129 172.5 128 174.167 128 176.5C128 178.833 131.333 192.5 138 217.5C144.667 242.5 148.833 255.833 150.5 257.5C152.167 259.167 153.833 260.167 155.5 260.5C157.167 260.833 170.5 258.333 195.5 253C220.5 247.667 234.167 244.167 236.5 242.5C238.833 240.833 239.833 237.833 239.5 233.5C239.167 229.167 236.5 217.667 231.5 199C226.5 180.333 224.167 170.5 224.5 169.5C224.667 169 224.833 168.5 225 168C225.667 169.167 226.333 170.333 227 171.5C228.333 173.833 231.667 185.667 237 207C242.333 228.333 244.833 240.167 244.5 242.5C244.167 244.833 243 246 241 246C239 246 237.333 246.833 236 248.5C235.333 249.333 234.667 250.167 234 251C235 251 236 251 237 251C239 251 240.667 250.333 242 249C243.333 247.667 245.5 247 248.5 247C251.5 247 264.167 249.333 286.5 254C296.732 256.138 304.2 257.788 310.094 259.156C307.446 258.418 305.875 257.862 302.5 257C286.833 253 273.333 250.167 262 248.5C250.667 246.833 245.167 244.5 245.5 241.5C245.833 238.5 243.167 226 237.5 204C231.833 182 227.333 169.167 224 165.5C220.667 161.833 217.167 159.833 213.5 159.5Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M310.094 259.156C315.701 260.719 320.809 262.18 323.156 263.188C322.917 262.962 322.832 262.699 322.5 262.5C321.597 261.958 317.065 260.775 310.094 259.156Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M323.156 263.188C324.119 264.095 324.534 265.165 324 266.5C323.333 268.167 319.833 270.333 313.5 273C307.167 275.667 302.667 276.167 300 274.5C297.333 272.833 295 272 293 272C291 272 288.5 271.333 285.5 270C282.5 268.667 279.167 268 275.5 268C271.833 268 267.333 268.833 262 270.5C256.667 272.167 253.167 273.833 251.5 275.5C250.667 276.333 249.833 277.167 249 278C251.667 279 254.333 280 257 281C262.333 283 267 284.167 271 284.5C275 284.833 280.5 284 287.5 282C294.5 280 298.5 279.167 299.5 279.5C299.897 279.632 300.291 279.774 300.688 279.906C303.013 278.211 306.512 276.421 312 274.5C318.667 272.167 322.667 270.333 324 269C325.333 267.667 326 266.333 326 265C326 264.562 324.845 263.913 323.156 263.188Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M300.688 279.906C300.507 280.038 300.224 280.151 300.062 280.281C300.374 280.183 300.689 280.098 301 280C300.897 279.966 300.791 279.941 300.688 279.906Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M300.062 280.281C290.874 283.183 281.689 286.098 272.5 289C253.5 295 243.833 298.333 243.5 299C243.333 299.333 243.167 299.667 243 300C245.177 300 247.354 300 249.531 300C250.322 299.656 251.113 299.311 251.938 299.031C250.958 299.021 249.979 299.011 249 299C256.833 296.5 264.667 294 272.5 291.5C288.167 286.5 297 283 299 281C299.226 280.774 299.778 280.511 300.062 280.281Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M175.5 168C149.167 170 134.833 171.5 132.5 172.5C130.167 173.5 131.833 186.167 137.5 210.5C143.167 234.833 147 248.833 149 252.5C151 256.167 153.667 258.167 157 258.5C160.333 258.833 173.667 256.5 197 251.5C220.333 246.5 233 243.5 235 242.5C237 241.5 238 238.833 238 234.5C238 230.167 235.5 218 230.5 198C225.5 178 222.833 167.667 222.5 167C222.167 166.333 220.833 165.833 218.5 165.5C216.167 165.167 201.833 166 175.5 168Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M261.5 272C255.167 274 252 275.667 252 277C252 278.333 254.5 279.667 259.5 281C264.5 282.333 269.833 283 275.5 283C281.167 283 286.833 282.167 292.5 280.5C298.167 278.833 301 277.667 301 277C301 276.333 300 275.5 298 274.5C296 273.5 293.5 273.333 290.5 274C289 274.333 287.5 274.667 286 275C286.167 274.667 286.333 274.333 286.5 274C286.667 273.667 286.833 273.333 287 273C286.667 272.833 286.333 272.667 286 272.5C285.667 272.333 285.333 272.167 285 272C285.5 271.833 286 271.667 286.5 271.5C287 271.333 287.5 271.167 288 271C285.167 270.667 282.333 270.333 279.5 270C273.833 269.333 267.833 270 261.5 272Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M169 271C169 271.667 169.833 272.333 171.5 273C173.167 273.667 178.5 275 187.5 277C192 278 196.5 279 201 280C200.333 279.5 199.667 279 199 278.5C197.667 277.5 192.333 275.833 183 273.5C178.333 272.333 173.667 271.167 169 270C169 270.333 169 270.667 169 271Z" fill="#ffffff" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path class="logopath" d="M274 275.5C269.333 277.167 266.833 278.5 266.5 279.5C266.333 280 266.167 280.5 266 281C267.167 281 268.333 281 269.5 281C271.833 281 275.167 280.167 279.5 278.5C281.667 277.667 283.833 276.833 286 276C283 276.667 280 277.333 277 278C274 278.667 271 279.333 268 280C270.833 279 273.667 278 276.5 277C279.333 276 282.167 275 285 274C284.333 273.833 283.667 273.667 283 273.5C281.667 273.167 278.667 273.833 274 275.5Z" fill="#000000" fill-rule="evenodd" opacity="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
              </g>
            </svg>
          </div>
        </section><a id="portfolio"></a>
        <section class="sctn-portfolio">
          <div class="portfolio-card">
            <header>Showcase</header>
            <h2>Simple Functions</h2>
            <img src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" alt="Image shows a screenshot of a portion of a dashboard">
            <div class="card-info">
              This does not go into intricacies of navingating to a showcase page or individual showcase details page.
            </div>
          </div>
          <div class="portfolio-card">
            <header>Showcase</header>
            <h2>Contact Form</h2>
            <img src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Image shows a snippet of meaningless code">
            <div class="card-info">The elements designed is minimalistic in the Form elements used.</div>
          </div>
        </section>
        <section class="sctn-design-notes">
          <header>
            <h2>Design Notes</h2>
          </header>
          <main>
            <div class="content">
              <p>
                Brutalism was generally characterised by its rough, unfinished surfaces, unusual shapes,
                heavy-looking materials, straight lines. What that translates into web design is,
                a more raw look, bold, pattern breaking, out with soft edges - in with hard, big contrasts,
                splashes of colors, hard borders.
              </p>
              <p>
                The aspects I have taken here for my design is to:
              <ul>
                <li>Keep Font Hirearchy</li>
                <li>Colors, multi, but more subtle</li>
                <li>Hard Lines</li>
                <li>Hard Shadows</li>
                <li>Hard Dark Borders</li>
                <li>Big Contrasts</li>
                <li>Animations</li>
              </ul>
              </p>
            </div>
          </main>
        </section>
      </main>
      <footer>
        <div class="fnt-sml">Have fun with code™</div>
      </footer>
    </div>

    <dialog id="confirm-dialog">
      <div class="dialog-message">
        <header>
          <h2>Contact Me</h2>
          <div class="close">
            <button class="btn" onclick="closeContactForm()">X</button>
          </div>
        </header>
        <div class="form-container">
          <div class="row row-6">
            <div class="cell">
              <label for="email">E-Mail</label>
            </div>
            <div class="cell cell-5">
              <input type="email" name="email" id="email" required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]*)$" data-text="Required, please enter a valid email.">
            </div>
          </div>
          <div class="row">
            <div class="cell">
              <label for="message">Message</label>
            </div>
            <div class="cell cell-5">
              <textarea required name="message" id="message" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="cell cell-6 rt-algn">
              <button id="send-message" class="btn btn-primary hover-effect">Send</button>
              <button id="cancel-send" class="btn btn-del hover-effect" onclick="closeContactForm()">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
    <script src="script.js"></script>
  </body>
</html>


.CSS
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;700;900&display=swap");

@keyframes line-anime {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
@keyframes color-change {
  0% {
    color: #1f2020;
  }
  20% {
    color: #25282a;
  }
  40% {
    color: #a5282c;
  }
  60% {
    color: #5eb0e5;
  }
  80% {
    color: #ebebe3;
  }
  100% {
    color: #f9f6ef;
  }
}
* {
  box-sizing: border-box;
}
:root {
  font-family: "Poppins", sans-serif;
  color: #1f2020;
}
::selection {
  background: #ffb7b7;
}
::-moz-selection {
  background: #ffb7b7; /* cannot combine*/
}
html {
  scroll-behavior: smooth;
}
body,
.container,
header,
div.logo,
nav,
ul {
  margin: 0;
  /*-- annoying margin at top --- */
}

body {
  padding: 0;
  background-color: #f3d060;
}
.container {
  width: min(120ch, calc(100% - 2rem));
  margin: 0 auto;
}
.spinner {
  background-color: #a5282c !important;
  color: #a5282c !important;
}
.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2rem;
  height: 2rem;
  margin-top: -1rem;
  margin-left: -1rem;
  border-radius: 50%;
  border: 4px solid #25282a;
  border-top-color: #f3d060;
  transform-origin: center center;
  animation: spinner 1s linear infinite;
}
.btn {
  position: relative;
  border: 2px solid #1f2020;
  border-radius: 3px;
  box-shadow: 3px 3px 0px #25282a;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  transition: 200ms ease;
  z-index: 2;
  background-color: #5eb0e5;
}
.btn + .btn {
  margin-left: 1rem;
}
.btn:active {
  box-shadow: -2px -2px 0px #25282a;
  transform: translate(2px, 2px);
}
.btn.hover-effect::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #1f2020;
  transform-origin: bottom right;
  transition: 100ms ease-in-out;
  mix-blend-mode: screen;
  z-index: 1;
  clip-path: ellipse(0px 0px at bottom center);
}
.btn.hover-effect:hover:before {
  clip-path: ellipse(50% 100% at bottom center);
}
.btn.hover-effect:active:before {
  background-color: #25282a;
  mix-blend-mode: color-dodge;
}
.btn-primary {
  background-color: #aee1cd;
}
.btn-del {
  background-color: #a5282c;
  color: #f9f6ef;
}
a {
  cursor: pointer;
}
img {
  width: 100%;
}
.container > header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  padding: 0.5rem;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.15em;
  color: transparent;
  background-color: #f3d060;
  background-size: 2px 2px;
  background-image: repeating-linear-gradient(
    45deg,
    #1f2020 0,
    #1f2020 0.5px,
    #f3d060 0,
    #f3d060 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px #1f2020;
}
.logo:first-letter {
  color: #a5282c;
}
nav ul {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
}
nav ul li {
  text-align: center;
}
nav ul li a {
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: #a5282c;
  text-underline-offset: 2px;
  color: #1f2020;
  font-size: 1rem;
}
dialog {
  transition: 300ms ease-in-out, clip-path 0.5s linear;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transform: scale(0);
  min-width: min(50vw, 80ch);
  padding: 0;
  box-shadow: 2.5px 2.5px 0px #25282a, 5px 5px 0px #25282a,
    7.5px 7.5px 0px #25282a, 10px 10px 0px #25282a, 12.5px 12.5px 0px #25282a,
    15px 15px 0px #25282a;
}
dialog::backdrop {
  opacity: 0.7;
  background-color: #f3d060;
  background-size: 100%, 50px 50px;
  background-image: radial-gradient(
      circle at bottom right,
      #f3c050c0 0%,
      #f3d060c0 50%
    ),
    repeating-linear-gradient(
      45deg,
      #1f2020 0,
      #1f2020 1.5px,
      #f3d060 0,
      #f3d060 50%
    );
}
dialog header {
  border-bottom: 3px solid;
  padding-inline: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
  background-color: #25282a;
  color: #f9f6ef;
}
dialog .close .btn {
  border-radius: 50%;
  top: 5px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  position: absolute;
  box-shadow: 2px 2px 0px #25282a;
  overflow: hidden;
  background-color: #a5282c;
  color: #f9f6ef;
  padding: 0;
}
#confirm-dialog {
  background-color: #ebebe3;
}
.dialog-message {
  border: 5px solid #1f2020;
}
.form-container {
  padding-block: 1rem;
  padding-inline: 2rem;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
textarea {
  background-color: #f9f6ef;
  border: 3px solid #25282a;
  font-size: 1.3rem;
  padding: 0.3rem 0.5rem;
  position: relative;
  width: 100%;
}
input[type="text"]:invalid,
input[type="email"]:invalid,
input[type="tel"]:invalid,
input[type="url"]:invalid,
textarea:invalid {
  border-color: #a5282c;
}

input[type="text"]:valid,
input[type="email"]:valid,
input[type="tel"]:valid,
input[type="url"]:valid,
textarea:invalid {
  border-color: #aee1cd;
}

.rt-algn {
  display: flex;
  justify-content: end;
}

.fnt-sml {
  font-size: 0.9rem;
}

/*  table */
.row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
}
.cell {
  padding: 0.3rem 0.5rem;
}
.cell-2 {
  grid-column: span 2;
}
.cell-4 {
  grid-column: span 4;
}
.cell-5 {
  grid-column: span 5;
}
.cell-6 {
  grid-column: span 6;
}

/* table end */

.sctn-hero {
  position: relative;
  min-height: 60vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5em 0;
}
.hero-msg-primary {
  font-size: clamp(2rem, 5vw + 2rem, 7rem);
  line-height: 1;
  font-weight: 900;
  inline-size: min(140%, calc(100vw - 2rem));
  overflow-wrap: break-word;
  hyphens: manual;
  position: relative;
}

.hero-msg-tag {
  font-size: clamp(1rem, 1vw + 1rem, 2rem);
}
.hero-flaire {
  position: absolute;
  inset: 0 auto;
  right: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center right;
  filter: drop-shadow(-2px 5px 0px #5eb0e5);
}

.hero-flaire svg {
  width: min(60%, calc(40vw + 50px));
  opacity: 0.9;
  transform: scaleX(-1);
}
.hero-actions {
  padding-top: 5em;
}

.sctn-portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  gap: 1rem;
}
.portfolio-card {
  border: 3px solid #25282a;
  background-color: #5eb0e5;
  box-shadow: 5px 5px 0px #25282a;
  position: relative;
  transform: scale(1);
  transition: 200ms cubic-bezier(0.11, -0.25, 0.7, 1.22);
  transform-origin: bottom right;
}
.portfolio-card:hover {
  transform: scale(1.01) translate(-3px, -3px);
  box-shadow: 8px 8px 0px #25282a;
  z-index: 5;
}

.portfolio-card header {
  border-bottom: 2px solid #25282a;
  background-color: #a5282c;
  color: #f9f6ef;
  padding: 0.3rem 0.5rem;
  font-size: 0.65rem;
}
.portfolio-card h2 {
  margin: 0;
  position: absolute;
  width: 100%;
  padding: 0.5rem 1rem;
  color: #f9f6ef;
  background-color: #1f2020;
  mix-blend-mode: screen;
  text-shadow: 2px 2px 0px #5eb0e5;
}
.portfolio-card:nth-of-type(2n) header {
  background-color: #aee1cd;
  color: #1f2020;
}
.portfolio-card img {
  height: 300px;
  overflow: hidden;
  border-bottom: 3px solid #25282a;
}
.portfolio-card .card-info {
  padding: 0.5rem 1rem;
  position: relative;
}
.portfolio-card:after {
  content: "\27A0";
  color: #f9f6ef;
  font-size: 2rem;
  line-height: 0, 3;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  height: 2rem;
}
footer {
  padding-block: 3rem 1rem;
}

#circle {
  position: absolute;
  top: 0.8rem;
  left: 32rem;
  z-index: -10;
  pointer-events: none;
  width: 650px;
}
.sctn-design-notes {
  margin-top: 3rem;
  font-size: 1.5rem;
  border: 3px solid #25282a;
}

.sctn-design-notes h2 {
  margin: 0;
  background-color: #5eb0e5;
  padding: 1rem;
  border-bottom: 2px solid #25282a;
}

.sctn-design-notes .content {
  padding: 1rem;
  margin: 0;
  background-color: #ebebe3;
}
.sctn-design-notes p {
  margin: 0;
}
.sctn-design-notes p ~ p {
  margin-top: 1rem;
}
.sctn-design-notes ul {
  background-color: #aee1cd;
}
.sctn-design-notes li::marker {
  content: "\25BA  ";
  font-size: 1rem;
  animation: color-change 10s ease-in-out infinite alternate;
}
.hero-flaire svg path:nth-child(1) {
  stroke-dasharray: 1870px;
  stroke-dashoffset: 1870px;
  animation: line-anime 1s ease forwards;
}
.hero-flaire svg path:nth-child(2) {
  stroke-dasharray: 27.5px;
  stroke-dashoffset: 27.5px;
  animation: line-anime 0.3s ease forwards 0.5s;
}
.hero-flaire svg path:nth-child(3) {
  stroke-dasharray: 172.1px;
  stroke-dashoffset: 172.1px;
  animation: line-anime 1s ease forwards 0.8s;
}
.hero-flaire svg path:nth-child(4) {
  stroke-dasharray: 2px;
  stroke-dashoffset: 2px;
  animation: line-anime 0.1s ease forwards 1s;
}
.hero-flaire svg path:nth-child(5) {
  stroke-dasharray: 127.4px;
  stroke-dashoffset: 127.4px;
  animation: line-anime 0.5s ease forwards 1.5s;
}
.hero-flaire svg path:nth-child(6) {
  stroke-dasharray: 341.7px;
  stroke-dashoffset: 341.7px;
  animation: line-anime 1s ease forwards 3s;
}
.hero-flaire svg path:nth-child(7) {
  stroke-dasharray: 113.4px;
  stroke-dashoffset: 113.4px;
  animation: line-anime 1s ease forwards 2s;
}
.hero-flaire svg path:nth-child(8) {
  stroke-dasharray: 68.4px;
  stroke-dashoffset: 68.4px;
  animation: line-anime 0.5s ease forwards 2.5s;
}
.hero-flaire svg path:nth-child(9) {
  stroke-dasharray: 78.9px;
  stroke-dashoffset: 78.9px;
  animation: line-anime 0.5s ease forwards 2.5s;
}
#circle #big-circle {
  stroke: #25282a;
  fill: none;
  stroke-dasharray: 2487.7px;
  stroke-dashoffset: 2487.7px;
  animation: line-anime 3s ease forwards;
}

.circle-load-svg {
  background-repeat: no-repeat;
  background-size: 650px;
  background-position: 34.1rem 1.2rem;
  background-image: url("data:image/svg+xml,%3Csvg height='100%25' stroke-miterlimit='10' style='fill-rule:nonzero%3Bclip-rule:evenodd%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B' version='1.1' viewBox='0 0 500 500' width='100%25' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs/%3E%3Cg id='LoadCircle'%3E%3Cpath d='M28.1395 132.351C28.1395 124.857 34.2147 118.782 41.7089 118.782C49.203 118.782 55.2783 124.857 55.2783 132.351C55.2783 139.845 49.203 145.921 41.7089 145.921C34.2147 145.921 28.1395 139.845 28.1395 132.351Z' fill='%235eb0e5' fill-rule='evenodd' opacity='1' stroke='none'/%3E%3Cpath d='M21.4398 371.142L24.7478 353.29L28.0557 335.438L43.1619 347.007L58.2682 358.575L39.854 364.858L21.4398 371.142Z' fill='%23aee1cd' fill-rule='evenodd' opacity='1' stroke='none'/%3E%3Cg opacity='0.5'%3E%3Cpath d='M249.406 10.5C231.54 10.6029 213.788 12.9511 196.406 17.0312C183.264 20.1163 170.31 24.1968 157.875 29.4688C143.472 35.5753 129.669 42.9944 116.719 51.7812C90.4539 69.6023 68.4614 92.2674 48.8125 117.031C48.4674 117.466 48.5338 118.092 48.9688 118.438C49.4037 118.783 50.0299 118.716 50.375 118.281C69.8969 93.6784 91.7485 71.174 117.844 53.4688C130.686 44.7555 144.373 37.3683 158.656 31.3125C170.985 26.0851 183.844 22.0579 196.875 19C214.11 14.9557 231.691 12.632 249.406 12.5312C279.15 12.3622 308.799 18.2826 336.281 29.625C362.953 40.6328 387.448 56.6058 408.531 76.2812C429.149 95.5224 446.488 118.35 459.438 143.406C470.887 165.56 478.921 189.486 483 214.094C486.582 235.705 487.073 257.812 484.469 279.562C482.609 295.096 479.152 310.476 474.188 325.312C455.964 379.775 417.654 426.727 368.562 456.375C338.873 474.306 305.37 485.916 270.812 489.344C249.343 491.473 227.586 490.471 206.406 486.344C189.62 483.072 173.257 477.836 157.5 471.219C129.113 459.298 103.445 441.446 81.75 419.656C65.2654 403.1 51.1791 384.423 38.5 364.844C38.1812 364.351 37.5235 364.213 37.0312 364.531C36.539 364.85 36.3999 365.508 36.7188 366C50.9288 387.941 66.9074 408.713 85.9375 426.719C106.83 446.486 131.108 462.459 157.625 473.594C175.303 481.017 193.88 486.569 212.812 489.656C232.035 492.791 251.622 493.36 271 491.438C294.974 489.059 318.571 482.795 340.656 473.188C350.986 468.694 360.924 463.448 370.562 457.625C395.742 442.413 418.154 422.349 436.375 399.281C454.61 376.196 468.744 349.81 477.531 321.719C484.329 299.987 487.917 277.3 488.156 254.531C488.347 236.406 486.416 218.215 482.438 200.531C469.873 144.681 437.033 94.114 391.656 59.3125C374.611 46.2397 355.882 35.534 336.031 27.3438C308.687 16.0614 278.974 10.3298 249.406 10.5Z' fill='%2325282a' stroke='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.JAVASCRIPT
  const contactDialog = document.getElementById("confirm-dialog");
const sendButton = document.getElementById("send-message");

contactDialog.addEventListener("click", function (event) {
  if (event.target !== contactDialog) {
    return;
  }
  console.log(event.target.tagName);
  if (
    event.offsetX < 0 ||
    event.offsetX > event.target.offsetWidth ||
    event.offsetY < 0 ||
    event.offsetY > event.target.offsetHeight
  ) {
    closeContactForm();
  }
});

function showContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.showModal();
  contactDialog.style.transform = "scale(1)";
}
function closeContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.style.transform = "scale(0)";
  contactDialog.close();
  sendButton.classList.remove("spinner");
  sendButton.classList.add("hover-effect");
}
function showShowcase() {
  location.hash = "#portfolio";
  document.getElementById("portfolio").scrollIntoView();
}

//only used to get path length for animation.
const logo = document.querySelectorAll("#big-circle");
for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

sendButton.addEventListener("click", (e) => {
  /*let offsetTop = e.target.offsetTop;
           let offsetLeft = e.target.offsetLeft;
           let offsetHeight = e.target.offsetHeight;*/
  let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = e.target;
  let strClipPath =
    "polygon(" +
    offsetLeft +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px, " +
    offsetLeft +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px)";
  contactDialog.style.clipPath = strClipPath;
  contactDialog.style.transform = "translate(-25%, -25%)";

  sendButton.classList.remove("hover-effect");
  sendButton.classList.add("spinner");
  setTimeout(closeContactForm, 1500);
});
