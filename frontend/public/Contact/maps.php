
<?php include('include/header.php')?>
<div style="margin-top:10px;"><hr/></div>
<!-- Widely used font - Arial -->
<link href="https://fonts.googleapis.com/css?family=Arial&display=swap" rel="stylesheet">

<style>
    /* Reset some default styles for consistency */

 

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1400px;
        margin: 0 auto;
 box-sizing: border-box;
        line-height: 30px;
font-size:16px;
text-align: justify;
    }

    /* Column styles */
    .column {
        width: 20%;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ddd;
        text-align:center;
font-weight:bold;
background-color: #E8E8E8; /* Light grey color for inactive buttons */
        color: black;
height:50px;
    }

    .column ul li{
        text-align: center;
    }

    /* Media query for smaller screens */
    @media (max-width: 768px) {
        .column {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        .column {
            width: 100%;
        }
    }



.column.active {
    background-color: #002060; /* Bootstrap primary color */
    color: white !important; /* Set text color to white */
}

.column.active a.nav-link {
    color: white !important; /* Set text color of the link to white */
}
.fa{
font-size: 1.2em;
}

</style>


<h2 style="text-align: center; margin-top: 0px;">Maps & Directions</h2>
<p>&nbsp;</p>
<div class="container">The campus is located 10 km (6.2 mi) from the Chennai Airport, 15 km (9.3 mi) from the Chennai Central Railway station, and is well connected by city buses. Thiruvanmiyur is the nearest station on the Chennai MRTS line.

The NITTTR Chennai campus features two entrances. The primary entrance is situated on the bustling Rajiv Gandhi Salai in Taramani, directly across from the Thiruvanmiyur MRTS Railway Station. It's conveniently located near the Rajiv Gandhi Salai–Thiruvanmiyur West Avenue Junction, a heavily trafficked intersection accommodating approximately 30,000 vehicles daily. Additionally, the campus is in close proximity to TIDEL Park, a prominent information technology (IT) park within Chennai.

Another entrance can be found in Tharamani, opposite the Spastics Society of Tamil Nadu and the International Tech Park, Chennai

</p>
<p>&nbsp;</div>
<div class="container" >

            <div class="container">
        <div class="column active">
            <a class="nav-link active" data-toggle="tab" href="#home" onclick="toggleTab('home')"><i class="fa fa-plane"></i>&emsp;From Airport</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#profile" onclick="toggleTab('profile')"><i class="fa fa-train"></i>&emsp;From Central</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#contact" onclick="toggleTab('contact')"><i class="fa fa-bus"></i>&emsp;From CMBT</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#about" onclick="toggleTab('about')"><i class="fa fa-bus"></i>&emsp;From Kilambakkam</a>
        </div>
    </div>

<p>&nbsp;</p>



    <div class="tab-content mt-2">
        <div class="tab-pane active show" id="home">
            <h4>To Reach NITTTR from Airport</h4>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d124408.28618279146!2d80.225883!3d12.987264!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a525e21f5641e5f%3A0x9aff7555087bf50e!2sAirport%20Rd%2C%20Meenambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600016!3m2!1d12.9805306!2d80.16404589999999!4m5!1s0x3a525d63d4b9ac11%3A0x1c04a0729d1662bc!2sNITTTR%2C%20CSIR%20Rd%2C%20near%20TIDEL%20Park%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!3m2!1d12.9872638!2d80.2498415!5e0!3m2!1sen!2sin!4v1712052669044!5m2!1sen!2sin" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
        <div class="tab-pane fade" id="profile">
            <h4>To Reach NITTTR from Central Railway Station</h4>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62192.185933836336!2d80.22198884777072!3d13.034931816103523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a5265ffee00643b%3A0x392710ab0f3eeffd!2sCentral%20Railway%20Station%2C%20Jutkapuram%2C%20Periyamet%2C%20Chennai%2C%20Tamil%20Nadu!3m2!1d13.083397!2d80.276202!4m5!1s0x3a525d63d4b9ac11%3A0x1c04a0729d1662bc!2sNITTTR%2C%20CSIR%20Rd%2C%20near%20TIDEL%20Park%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!3m2!1d12.9872638!2d80.2498415!5e0!3m2!1sen!2sin!4v1712052932189!5m2!1sen!2sin" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
        <div class="tab-pane fade" id="contact">
            <h4>To Reach NITTTR from CMBT</h4>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62195.779633941565!2d80.18297874773229!3d13.020623374258744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a5266a355934b35%3A0x5a99c19dba6f3482!2sCMBT%2C%20Koyambedu%2C%20Chennai%2C%20Tamil%20Nadu!3m2!1d13.068594!2d80.203913!4m5!1s0x3a525d63d4b9ac11%3A0x1c04a0729d1662bc!2sNITTTR%2C%20CSIR%20Rd%2C%20near%20TIDEL%20Park%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!3m2!1d12.9872638!2d80.2498415!5e0!3m2!1sen!2sin!4v1712052793668!5m2!1sen!2sin" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
        <div class="tab-pane fade" id="about">
            <h4>To Reach NITTTR from Kilambakkam</h4>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d124442.01002028835!2d80.0914963556557!3d12.919749381907634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a52f73f78ee692b%3A0x7a9587770e2525b2!2sKilambakkam%20CMBT%2C%20Vandalur%2C%20Tamil%20Nadu!3m2!1d12.873612099999999!2d80.0785303!4m5!1s0x3a525d63d4b9ac11%3A0x1c04a0729d1662bc!2sNITTTR%2C%20CSIR%20Rd%2C%20near%20TIDEL%20Park%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!3m2!1d12.9872638!2d80.2498415!5e0!3m2!1sen!2sin!4v1712053087157!5m2!1sen!2sin" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
    </div>

</div>
<p>&nbsp;</p><p>&nbsp;</p>


<!-- Bootstrap JS and jQuery (required for Bootstrap) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>
$(document).ready(function(){

    // Function to toggle tab
    function toggleTab(tabId) {
        // Hide all tab panes
        $(".tab-pane").removeClass("active show");
        // Show the clicked tab pane
        $("#" + tabId).addClass("active show");
        // Update the active class of nav-links
        $(".nav-link").removeClass("active");
        $("a[href='#" + tabId + "']").addClass("active");
        // Update the background color of columns
        $(".column").removeClass("active"); // Remove from all columns
        $("a[href='#" + tabId + "']").closest('.column').addClass("active"); // Add to the active column
    }

    // Add active class to the first tab and change its color
    $("#home").addClass("active show");
    $("a[href='#home']").addClass("active");

    // Bind click event to tab links
    $(".nav-link").click(function(){
        var tabId = $(this).attr("href").substring(1); // Get the tab id from href attribute
        toggleTab(tabId); // Call the toggleTab function
    });
});
</script>
<?php include('include/footer.php')?>
