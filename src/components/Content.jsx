import image from "../assets/image-web-3-desktop.jpg";
import retro from "../assets/image-retro-pcs.jpg";
import gaming from "../assets/image-gaming-growth.jpg";
import keyboard from "../assets/image-top-laptops.jpg";
export default function Content() {
  return (
    <>
      <main className="content">
        <img src={image} height={100} alt="" width={"100%"} />

        <div className="grid-item-two">
          <h1>New</h1>
          <div className="grid-two-child">
            <h3> Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="grid-two-child">
            <h3> The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="grid-two-child">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>

        <div className="web">
          <h1>The Bright Future of Web 3.0</h1>
        </div>
        <div className="read-more">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="button">Read more</button>
        </div>

        <div className="item one">
          <img src={retro} />
          <div>
            <h1>O1</h1>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="item two">
          <img src={keyboard} />
          <div>
            <h1>02</h1>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="item three">
          <img src={gaming} alt="" />
          <div>
            <h1>03 </h1>
            <h3>The Growth of Gaming </h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </main>
    </>
  );
}
