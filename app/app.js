import * as MODEL from "../model/model.js";
// import { getName } from "../model/model.js";

function initial(){

    console.log("")
    $("nav a").click(function(e){
        let btnId = this.id;
        let contentId = btnId + "Content";

        //updates hero image and page content
        $(".hero")

            // .removeClass(`${currentHeroImage}-hero-image`)
            // .addClass(`${btnId}-hero-image`);

                //update the nav bar
        if(btnId == "home"){
            //hero container
            $('.heroContainer').removeClass('hero');
            $('.heroContainer').addClass('hero');
     
            //update colors
            $('.black').addClass('white');
            $('.black').removeClass('black');

            //update logo
            $('.blk').addClass('wht');
            $('.blk').removeClass('blk');

            //show intro
            $('div.introContainter').show();

            // console.log("white nav")

        } else{
            //hero container
            $('.heroContainer').removeClass('hero');

            //update colors
            $('.white').addClass('black');
            $('.white').removeClass('white');

            //update logo
            $('.wht').addClass('blk');
            $('.wht').removeClass('wht');

            // console.log("black nav");

            //hide intro
            $('div.introContainter').hide();
            // $('.introContainter').innerHTML = " ";

        }

        $(".page-name").html(btnId);
        
    // //trade hiding apps
    // $('#app').show();
    // $('#tourApp').hide();

        MODEL.getPageContent(contentId);
        MODEL.getTourPackage("allTour");

    })
    
    $(".tours a").click(function(e){
        let countryId = this.id;
        let countryTour = countryId + "Tour";

        console.log(countryTour);

        $(".page-name").html(countryTour);
        

         //trade hiding apps
        // $('#app').hide();
        // $('#tourApp').show();

        MODEL.getTourPackage(countryTour);
    })
}
// function touring(){

//     $(".tours a").click(function(e){
//         let countryId = this.id;
//         let countryTour = countryId + "Tour";

//         console.log(countryTour);

//         $(".page-name").html(countryTour);
        

//         //  //trade hiding apps
//         // $('#app').hide();
//         // $('#tourApp').show();

//         MODEL.getTourPackage(countryTour);
//     })
//     // $(".tours a").click(function(e){
//     //     let countryId = this.id;
//     //     let tourId = countryId + "Tour";

//     //     console.log(countryId);

//     //     $(".page-name").html(countryId);
//     //     MODEL.getPageContent(tourId);
//     // })
    
// }



$(document).ready(function(){
    initial();
    // touring();
    MODEL.getPageContent("homeContent");
})
