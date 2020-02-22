import React from 'react';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css';


function WelcomeHeader() {
  return (
  <div className="welcomeHeader">
    <Row className="grid-container valign-wrapper center-align">
      <div className="kiwi-hero-image">
        <img src="../../public/images/ggbackground1.png"></img>
      </div>
      <div 
        className="title-container center-align"
        >
          <div className="title-content">
            <h2>What does 'eating on a diet' really mean?</h2>
            <hr></hr>
            <div className="sub-title-content">
            <p>We all know that a large pizza and a pound of MnMs is not eating healthy. Neither is eating a whole crown of broccoli and glass of grapefruit juice. Eating healthy means taking in a variety of nutritional ingredients in regular intervals.</p>
            <hr></hr>
            <p>Each individual has different requirements for what makes up their ideal diet. Some people need more protein, some need more minerals, some need to structure their diets to avoid certain irritants.</p>
            <hr></hr>
            <p>There are many different types of diets, and finding the correct one can be difficult sometimes, especially if you aren't sure of what you need to feed your body. One simple way to test your food sensitivities is an elimination diet.</p>
          </div>
          </div>
      </div>
    <Row className="data-row">
      <div className="subTitle">
        <h1>ELIMINATION DIET</h1>
      </div>
      <div 
        className="content-container center-align col s12 m4"
        >
          <div className="title-card-content">
            <div className="card-content-image">

            </div>
            <div className="card-content-title">
              <p>Why?</p>
            </div>
            <div className="card-content-data">
              <p>Elimination diets can help you determine which foods your body can't tolerate well. If you're experiencing symptoms that you think may be related to your diet, then an elimination diet could help you discover which foods are causing them.</p>
              <p>One important detail to note about the elimination diet is that it is meant to be temporary, no more than 30 days. After that time, the reintroduction of foods on a scheduled basis will give you the information you need about what foods cause sensitivities to your body.</p>
            </div>
          </div>
      </div>
      <div 
        className="content-container center-align col s12 m4"
        >
          <div className="title-card-content">
            <div className="card-content-image">
              
            </div>
            <div className="card-content-title">
              <p>What you can eat:</p>
            </div>
            <div className="card-content-data">
              <ul>
                <li>Fruits: Most fruits, excluding citrus fruits.</li>
                <li>Vegetables: Most vegetables, excluding nightshades.</li>
                <li>Grains: Including rice and buckwheat.</li>
                <li>Meat and fish: Including turkey, lamb, wild game and cold-water fish like salmon.</li>
                <li>Dairy substitutes: Including coconut milk and unsweetened rice milk.</li>
                <li>Fats: Including cold-pressed olive oil, flaxseed oil and coconut oil.</li>
              </ul>
            </div>
          </div>
      </div>
      <div 
        className="content-container center-align col s12 m4"
        >
          <div className="title-card-content">
            <div className="card-content-image">
              
            </div>
            <div className="card-content-title">
              <p>What you can't eat:</p>
            </div>
            <div className="card-content-data">
              <ul>
                <li>Citrus fruits: Avoid citrus fruits, such as oranges and grapefruits.</li>
                <li>Nightshade vegetables: Avoid nightshades, including tomatoes, peppers, eggplant, white potatoes, cayenne pepper and paprika.</li>
                <li>Nuts and seeds: Eliminate all nuts and seeds.</li>
                <li>Legumes: Eliminate all legumes, such as beans, lentils, peas and soy-based products.</li>
                <li>Starchy foods: Avoid wheat, barley, corn, spelt, rye, oats and bread. Also avoid any other gluten-containing foods.</li>
                <li>Meat and fish: Avoid processed meats, cold cuts, beef, chicken, pork, eggs and shellfish.</li>
                <li>Dairy products: Eliminate all dairy, including milk, cheese, yogurt and ice cream.</li>
                <li>Fats: Avoid butter, margarine, hydrogenated oils, mayonnaise and spreads.</li>
                <li>Sugar and sweets: Avoid sugar (white and brown), honey, maple syrup, corn syrup and high-fructose corn syrup, agave nectar, desserts and chocolate.</li>
              </ul>
            </div>
          </div>
      </div>
    </Row>
      <Col 
        s={12}
        className="title-container linear-top center-align"
        >
          <div className="title-content">
            <h2>Oh no!! There goes all my favorite foods!!</h2>
            <hr></hr>
            <p>This is a common fear when the word 'diet' is mentioned. A gut feeling knowing that, eventually, you will cave to a mountain of cookies. Well, worry not!! There are still plenty of delicious meals to be made on all sorts of diets.</p>
            <p>Below are some links to information about some of the more common diet types.</p>
          </div>
      </Col>
    </Row>
    <Row className="diet-row">
      <Col
        s={3}
        className="diet-container center-align dietFour"
        >
          <div>
            <h4>VEGETARIAN</h4>
          </div>
          <div className="diet-description">
            <p>Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.</p>
          </div>
          <div className="image-holder">
            <a href="https://www.eatrightpro.org/-/media/eatrightpro-files/practice/position-and-practice-papers/position-papers/vegetarian-diet.pdf">
              <img src="https://safoodbank.org/wp-content/uploads/2018/05/Vegetarian-Icon.png"></img>
            </a>
          </div>
      </Col>
      <Col
        s={3}
        className="diet-container center-align dietOne"
        >
          <div>
            <h4>VEGAN</h4>
          </div>
          <div className="diet-description">
            <p>Veganism is a way of living which seeks to exclude, as far as is possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose. Some are vegan by choice, others by necessity.</p>
          </div>
          <div className="image-holder">
            <a href="https://www.mdpi.com/2072-6643/6/6/2131/htm">
              <img src="https://ih1.redbubble.net/image.571860557.5608/flat,550x550,075,f.u6.jpg"></img>
            </a>
          </div>
      </Col>
      <Col
        s={3}
        className="diet-container center-align dietTwo"
        >
          <div>
            <h4>KETOGENIC</h4>
          </div>
          <div className="diet-description">
            <p>The keto diet is an eating plan that consists of 80 percent fat and little to no carbohydrates. Staples of the keto diet are fish, meat, eggs, dairy, oils, and green vegetables. Pasta, rice and other grains, potatoes, and fruits are strictly prohibited.</p>
          </div>
          <div className="image-holder">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6251269/">
              <img src="https://easyhealth.asia/wp-content/uploads/2019/02/Keto-diet-300x300.jpeg"></img>
            </a>
          </div>
      </Col>
      <Col
        s={3}
        className="diet-container center-align dietThree"
        >
          <div>
            <h4>GLUTEN FREE</h4>
          </div>
          <div className="diet-description">
            <p>Those who are gluten-free enjoy a diet of fruits, vegetables, meats, poultry, fish, beans, legumes and most dairy products. Such ingredients are naturally gluten-free, and safe for those who have no allergies to these food groups.</p>
          </div>
          <div className="image-holder">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5439366/">
              <img src="https://i.pinimg.com/236x/87/26/bb/8726bb1958892bc6899ea4e6dcdcb627--gluten-dairy-free-awesome-tattoos.jpg"></img>
            </a>
          </div>
      </Col>
    </Row>
    </div>
  );
}
export default WelcomeHeader;
