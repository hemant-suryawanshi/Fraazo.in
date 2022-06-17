import React from "react";
import "./Footer.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import img1 from "../../Images/footer-design.svg";
import img2 from "../../Images/fraazo-logo-white.svg";
import img3 from "../../Images/google-play-white.png";
import img4 from "../../Images/apple-store-white.png";
import img5 from "../../Images/mobiles.png";
import img6 from "../../Images/google-play.png";
import img7 from "../../Images/apple-store.png";

const Footer = () => {
  return (
    <>
      <div id="Container">
        <div id="dowloadeappcontainer">
          <img src={img5} alt="img" id="img1" />
        </div>
        <div id="container2">
          <h1>Download The App</h1>
          <h3>
            Enter your phone number to receive a text with a link to download
            the app
          </h3>
          <div id="Container3">
            <div id="Container31">
              <FaGooglePlay />
              Android
            </div>
            <div id="Container32">
              <FaApple />
              IPhone
            </div>
          </div>
          <div id="Container4">
            <div>+91</div>
            <input
              type="text"
              id="Container41"
              placeholder="Enter Your Mobile number"
            />
          </div>
          <div>
            <button id="Container5">SUBMIT</button>
          </div>
          <div id="Container6">
            Available on <img src={img6} alt="img" />
            <img src={img7} alt="img" />
          </div>
        </div>
      </div>
      <div id="Card">
        <div id="footer_imgDiv">
          <img src={img1} alt="img" id="footer_img" />
        </div>

        <div id="Footer_Card">
          <div >
            <div id="footer_card_1">
              <div id="footer_card_2">
                <img src={img2} alt="img" id="footer_card_3" />
                <p >
                  Order online vegetables & fruits directly from the farm.
                  Fraazo is online platform that allows customer to get farm
                  fresh produce directly from farmers.
                </p>
              </div>
              <div id="footer_Card_4">
                <h3 id="footer_card_5">Useful Links</h3>
                <div>Privacy Policy</div>
                <div>FAQ</div>
                <div>Terms & Conditions</div>
              </div>
              <div id="footer_card_7">
                <h3 id="footer_card_5">Cities We Serve</h3>

                <div>Mumbai</div>
                <div>Hyderabad</div>
                <div>Bangalore</div>
                <div>Delhi</div>
                <div>Noida</div>
                <div>Gurugram</div>
                <div>Pune</div>
              </div>
              <div id="footer_card_8">
                <h3 id="footer_card_5">Connect with us</h3>

                <div id="footer_card_9">
                  <HiOutlineMail id="footer_card_10" />
                  support@fraazo.com
                </div>
                <div className="footer_card_9">
                  <TbPhoneCall id="footer_card_10" />
                  +91 9152291522
                </div>
                <div>
                  102, We Work Vijay Diamond, A3 & B2, Cross Road B, MIDC,
                  Andheri (East), Mumbai City MH 400093.
                </div>
                <div>
                  <h3 id="footer_card_5">Download The App</h3>
                  <div id="footer_card_6">
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div id="footer_card_11">
              <h1 id="footer_card_12">
                Fresh Fruits & Vegetables Grocery Shopping Online
              </h1>
              <p>
                The quality of fruits & vegetables is synonymous with its
                freshness, while getting fresh fruits and vegetables is a
                tedious task at times but with Fraazo you can get it delivered
                at your doorstep. Fraazo brings a wide range of farm fresh
                fruits, vegetables and dairy products to you, all in just a
                click. We currently serve about more than 3lacs+ happy customers
                in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo
                has made online shopping of fresh produce much easier with its
                hassle-free home delivery options. You can choose the delivery
                slot as per your choice and schedule your order accordingly. Or
                you can simply opt for the option of 90 mins Express Delivery
                and get your order delivered in not more than 90 mins. The farm
                fresh fruits and vegetables on Fraazo are available at best
                prices compared to other vendors & supermarkets. Plus with so
                many exciting offers, one can save up to 20% on their Monthly
                grocery budgets. No need to wait in long queues in crowded
                supermarkets or local mandis for getting the best prices on
                veggies. Kick the stress out & just Fraazo your dose of
                freshness with savings at the comfort of your home. Fraazo
                directly sources fresh fruits and veggies from an extensive
                network of farmers across Maharashtra, hence bringing you fresh
                produce straight from farm to table in less than 12 hours. With
                our Safe & Hygienic packaging and minimal multiple handling, we
                ensure you get the best quality fresh produce.
              </p>
              <p>
                The fruits and vegetables are 100% hand-picked fresh from farm,
                while some products are hydroponically-grown. The wide range of
                fruits and veggies on Fraazo include more than 100+ farm fresh
                vegetables and fruits, starting from regular veggies like dudhi,
                cauliflower, beetroot, cabbage, etc. to exotic veggies like
                broccoli, lettuce etc. We also provide the essential vegetable
                combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh
                Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more.
                There are a lot of exciting deals on vegetables & fruits, every
                day of the week, the major highlights being Monday Mandi, Veggie
                Wednesday, Freelivery Thursday & Fruit Friday.For payments, you
                can choose from the multiple payment options as Fraazo accepts
                Debit card, Credit card, UPI options like iMobile, Google Pay,
                8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo,
                NetBanking and Cash on Delivery (COD). If you ever have an issue
                with missing items or any quality issue, you can raise your
                concern with us in 48 hrs & we shall refund/ replace your
                product with “no-questions-asked-policy”. You can simply connect
                with our Customer Support team via Chat Support or Call on
                9152291522.
              </p>
            </div>
            <div id="copyright">
              © Copyrights 2022-2023. Fraazo. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
