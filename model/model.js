var homeContent = `
<div id="margin">
        <section class="promo-tours">
            <div class="promo" id="israel">
                <h2>Israel</h2>
                <h3>From $1000</h3>
                <a href="israel.html"><button>Learn More</button></a>
            </div>
            <div class="promo" id="usa">
                <h2>U.S.A.</h2>
                <h3>From $1500</h3>
                <button>Learn More</button>
            </div>
            <div class="promo" id="australia">
                <h2>Australia</h2>
                <h3>From $1800</h3>
                <button>Learn More</button>
            </div>
        </section>
        <section class="booking-form">
            <h2>Booking Form</h2>
            <form id="booking">
                <div>
                    <input type="text" id="name" placeholder="name...">
                    <input type="email" id="email" placeholder="email..."><br>
                </div>
                <div>  
                    <input type="text" id="country" placeholder="country...">
                    <input type="text" id="hotel" placeholder="hotel..."><br>
                </div>
                <div> 
                    <label for="checkin" class="check-date">check-in</label>
                    <input type="date" class="date"><br>
                </div>
                <div> 
                    <label for="checkout" class="check-date">check-out</label>
                    <input type="date" class="date"><br>
                </div>
                <div class="number-selection"> 
                    <div>
                        <label for="num-adults" class="number-needed">Adult</label>
                        <select type="number" min="1" max="100" step="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div>
                        <label for="num-children" class="number-needed">Children</label>
                        <select type="number" min="0" max="300" step="1">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div>
                        <label for="num-rooms" class="number-needed">Rooms</label>
                        <select type="number" min="1" max="100" step="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div> 
                    <input type="text" id="message" placeholder="message..."> 
                </div>
                <button type="submit" form="booking" value="Submit">Submit</button>
            </form>
        </section>
    </div>
`;
var aboutContent = `

        <div class="about">
            <div class="about-top-section">
                <h1>About:</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim hic amet saepe dignissimos nihil perferendis repellendus et rem, illum corporis. Quibusdam consectetur sapiente quis aliquam, dolorem velit veniam vero iste consequatur distinctio earum dignissimos quas error itaque dicta non atque, nam eos, dolorum voluptates eius ipsa ex! At ullam natus tempore quis eligendi laboriosam non eius totam cupiditate. Nostrum magnam a ipsa expedita nihil ex corrupti blanditiis nesciunt nam. Animi nam nobis reiciendis autem iste.</p>
            </div>
            <div class="about-bottom-section">
                <h4>Client Quotes:</h4>
                <div class="client">
                    <div class="client-image client1"></div>
                    <div class="client-about">
                        <div class="client-quote">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad error ea eveniet impedit hic! Ab sapiente dolor quis exercitationem, illo facilis quod consequatur numquam nisi veritatis vel, reiciendis ut minima. Voluptatem, fuga possimus? Sequi, commodi?</p>
                            <div class="client-quote-name">-Miranda Brown</div>
                        </div>
                        
                    </div>
                
                </div>
                <div class="client">
                    <div class="client-image client2"></div>
                    <div class="client-about">
                        <div class="client-quote">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad error ea eveniet impedit hic! Ab sapiente dolor quis exercitationem, illo facilis quod consequatur numquam nisi veritatis vel, reiciendis ut minima. Voluptatem, fuga possimus? Sequi, commodi?</p>
                            
                            <div class="client-quote-name">-Johnathan Wes</div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>

`;
var toursContent = `
<div id='tourApp'></div>
`;
var specialContent = `

<div class="special">
        <h4>Special Offer(s):</h4>
        <div class="offer">
            <div class="offer-image offer1"></div>
            <div class="offer-about">
                <div class="offer-about-top">
                    <div class="offer-about-top-header">
                        <h4>BARCELONA, SPAIN</h4>
                        <h5>(20% off!)</h5>
                    </div>
                    <div class="offer-about-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                <div class="offer-bottom">
                    <div class="button-holder">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="offer">
            <div class="offer-image offer2"></div>
            <div class="offer-about">
                <div class="offer-about-top">
                    <div class="offer-about-top-header">
                        <h4>BANGKOK, THAILAND</h4>
                        <h5>(10% off!)</h5>
                    </div>
                    <div class="offer-about-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                <div class="offer-bottom">
                    <div class="button-holder">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;
var blogContent = `

        <div class="blog">
                <h4>Blog:</h4> 
                <div class="entry">
                    <div class="date">
                        <div class="date-day">06</div>
                        <div class="date-month">Jun</div>
                    </div>
                    <div class="entry-about">
                        <div class="entry-about-top">
                            
                            <div class="entry-image offer1"></div>
                            <div class="entry-about-top-header">
                                <h6>Sed et persipiatis unde omnis iste natus</h6>
                            </div>
                            <div class="entry-about-info">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="entry">
                    <div class="date">
                        <div class="date-day">23</div>
                        <div class="date-month">Jul</div>
                    </div>
                    <div class="entry-about">
                        <div class="entry-about-top">
                            
                            <div class="entry-image offer1"></div>
                            <div class="entry-about-top-header">
                                <h6>Sed et persipiatis unde omnis iste natus</h6>
                            </div>
                            <div class="entry-about-info">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

`
var contactContent = `
        <div class="contact">
            <h4>Contact Us:</h4> 
            <div class="contact-box">
                <div class="contact-box-info">
                    <div class="map"></div>
                    <p>
                    travel-fly Inc. <br>
                    8901 Marmora Road, <br>
                    Glasgow, D04 89GR.<br>
                    Freephone:+1 800 559 6580<br>
                    Telephone:+1 800 603 6035<br>
                    FAX:+1 800 889 9898<br>
                    E-mail: mail@travelfly.org<br>
                    </p>
                </div>
                <div class="contact-box-direct">
                    <form class="contact-box-direct-form">
                        <input type="text" id="name" placeholder="name..."><br>
                        <input type="email" id="email" placeholder="email..."><br>
                        <input type="text" id="company" placeholder="company..."><br>
                        <input type="text" id="message" placeholder="message..."><br>
                        <button type="submit" form="message" value="Submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
`
var allTour=`
<div class="tourpg">
        <div id="tourban" >
            <h1>Tours:</h1>
        </div>
        <div id="margin" class="tours">
            <a id="israel" href="#">
                <div class="promo" id="israelPic">
                    <h2>Israel</h2>
                    <h3>From $1000</h3>
                    <button>Learn More</button>
                </div>
            </a>
            <a id="usa" href="#">
                <div class="promo" id="usaPic">
                    <h2>U.S.A.</h2>
                    <h3>From $1500</h3>
                    <button>Learn More</button>
                </div>
            </a>
            <a id="australia" href="australia.html">
                <div class="promo" id="australiaPic">
                    <h2>Australia</h2>
                    <h3>From $1800</h3>
                    <button>Learn More</button>
                </div>
            </a>
            <a id="nz" href="nz.html">
            <div class="promo" id="kiwiPic">
                <h2>New Zealand</h2>
                <h3>From $1200</h3>
                <button>Learn More</button>
            </div>
            </a>
            <a id="france" href="france.html">
            <div class="promo" id="francePic">
                <h2>France</h2>
                <h3>From $2500</h3>
                <button>Learn More</button>
            </div>
            </a>
            <a id="egypt" href="egypt.html">
            <div class="promo" id="egyptPic">
                <h2>Egypt</h2>
                <h3>From $900</h3>
                <button>Learn More</button>
            </div>
            </a>
            <a id="japan" href="japan.html">
            <div class="promo" id="japanPic">
                <h2>Japan</h2>
                <h3>From $1300</h3>
                <button>Learn More</button>
            </div>
            </a>
            <a id="canada" href="canada.html">
            <div class="promo" id="canadaPic">
                <h2>Canada</h2>
                <h3>From $2000</h3>
                <button>Learn More</button>
            </div>
            </a>
            <a id="uae" href="uae.html">
            <div class="promo" id="uaePic">
                <h2>U.A.E.</h2>
                <h3>From $3000</h3>
                <button>Learn More</button>
            </div>
            </a>
        </div>
    </div>
    `
var israelTour= `
<div class="trip">
        <div id="banner">
            <h2>Israel Tour Package:</h2>
            <h3>starting from $1000 (prices may vary)</h3>
        </div>
        <div id="mobile">
            <div id="subbanner">
                <div class="ph1"></div>
                <div class="ph2"></div>
                <div class="ph3"></div>
            </div>
            <div id="itinerary">
                <div class="day">
                    <h2>Day #1:</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
                <div class="day">
                    <h2>Day #2:</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
                <div class="day">
                    <h2>Day #3:</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
            </div>
        </div>
        <button>Book Now</button>
    </div>
`
export function getPageContent (pageId){
    $("#app").html(eval(pageId));
    // $(".introContainter").innerHTML($heroContent);
}

export function getTourPackage (tourId){
    $("#tourApp").html(eval(tourId));
    // $(".introContainter").innerHTML($heroContent);
}
// export function displayIntro(){
//     $(".introContainter").innerHTML()
// }