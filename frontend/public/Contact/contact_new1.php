
<?php include('include/header.php')?>

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
    }

    /* Column styles */
    .column {
line-height: 30px;
        width: 20%;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ddd;
        text-align:center;
font-weight:bold;
background-color: #E8E8E8; /* Light grey color for inactive buttons */
        color: black;

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








<div class="container" style=" margin-top: 10px;">
<h2 >Contact us</h2>
<hr>
</div>
<p>&nbsp;</p>




















<div class="container" >

            <div class="container">
        <div class="column active">
            <a class="nav-link active" data-toggle="tab" href="#home" onclick="toggleTab('home')">NITTTR Chennai</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#profile" onclick="toggleTab('profile')">Bangalore</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#contacts" onclick="toggleTab('contacts')">Hyderabad</a>
        </div>
        <div class="column">
            <a class="nav-link" data-toggle="tab" href="#about" onclick="toggleTab('about')">Kalamassery</a>
        </div>
	
    </div>

<p>&nbsp;</p>



    <div class="tab-content mt-2">
        <div class="tab-pane active show" id="home">
            
        	<div class="contact_inner">
            	<div class="contact_left">
                	<div class="contact_leftimg" style="">
                    	<ul class="contact_leftimginner">
                        	<li><i class="fa fa-"></i>National Institute of Technical Teachers' Training and Research</li>
                        	<li>Taramani, Chennai 600113 Tamilnadu</li>
                            <li>[MINISTRY OF EDUCATION, GOVT. OF INDIA]</li>
                        </ul>
                    </div>
                    <div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><span>Job Title </span><em> : The Director </em></li>
                        	<li><span>Director  </span><em> : (+91-44) 2254 5405 </em></li>
                            <li><span>Office </span><em> :(+91-44) 2254 5406/ 2254 5442</em></li>
                            <li><span>Fax </span><em>: (+91-44) 2254 1126 </em></li>
                            <li><span>Email Id </span><em> :  director@nitttrc.ac.in / directoroffice@nitttrc.ac.in</em></li>
                            <li><span>Website </span><em>:  www.nitttrc.ac.in </em></li>
                        </ul>
                    </div>
                </div>
                <div class="contact_right">
                	<div id="mapouter"><div id="gmap_canvas"><iframe width="100%" height="260" frameborder="0" scrolling="no" marginheight="0" src="https://maps.google.com/maps?q=NATIONAL INSTITUTE OF TECHNICAL TEACHERS' TRAINING AND RESEARCH, Taramani, Chennai Tamilnadu, &t=&z=14&ie=UTF8&iwloc=&output=embed" marginwidth="0"></iframe><a class="addmaps"href="http://www.map-embed.com"id="get-map-data">www.map-embed.com</a></div><style>#gmap_canvas{height:260px;width:100%;}#mapouter{overflow:hidden;height:260px;width:100%;}</style></div>
                </div>
 </div>
</div>
            
       
  


        <div class="tab-pane fade" id="profile">

        	<div class="contact_inner">
            	<div class="contact_left">
                	<div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><i class="fa fa-"></i>National Institute of Technical Teachers' Training and Research</li>
                        	<li>Extension Centre, Bangalore- 560 001 Karnataka</li>
                            <li>[MINISTRY OF EDUCATION, GOVT. OF INDIA]</li>
                        </ul>
                    </div>
                    <div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><span>Job Title </span><em> : Professor & Head  </em></li>
                            <li><span>Phone </span><em> : 080 - 2237 4154</em></li>
                            <li><span>Fax </span><em>: 080 - 2228 1419 </em></li>
                            <li><span>Email Id </span><em> :  nitttrecb@nitttrc.ac.in </em></li>
                            <li><span>Website </span><em>:  www.nitttrc.ac.in </em></li>
                        </ul>
                    </div>
                </div>
                <div class="contact_right">
                	<div id="mapouter"><div id="gmap_canvas"> 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.884320329756!2d77.58417241482209!3d12.979249990850844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ1LjMiTiA3N8KwMzUnMTAuOSJF!5e0!3m2!1sen!2sin!4v1631679329604!5m2!1sen!2sin" width="100%" height="240" style="border:0;" allowfullscreen="" loading="lazy"></iframe><a class="addmaps"href="http://www.map-embed.com"id="get-map-data">www.map-embed.com</a></div><style>#gmap_canvas{height:240px;width:100%;}#mapouter{overflow:hidden;height:240px;width:100%;}</style></div>
                </div>
            </div>
</div>






        <div class="tab-pane fade" id="contacts">

        	<div class="contact_inner">
            	<div class="contact_left">
                	<div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><i class="fa fa-"></i>National Institute of Technical Teachers' Training and Research</li>
                        	<li>Extension Centre, Hyderabad- 500 028 Telangana </li>
                            <li>[MINISTRY OF EDUCATION, GOVT. OF INDIA]</li>
                        </ul>
                    </div>
                    <div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><span>Job Title </span><em> : Professor & Head  </em></li>
                            <li><span>Phone </span><em>  : 040 - 2339 1459</em></li>
                            <li><span>Fax </span><em>: 080 - 2228 1419 </em></li>
                            <li><span>Email Id </span><em>  : nitttrech@nitttrc.ac.in </em></li>
                            <li><span>Website </span><em>:  www.nitttrc.ac.in </em></li>
                        </ul>
                    </div>
                </div>
                <div class="contact_right">
                	<div id="mapouter"><div id="gmap_canvas"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3807.2322014619454!2d78.44999726537065!3d17.400640757001632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snational%20institute%20of%20technical%20teachers%20training%20and%20research%20masab%20tank%20hyderabad%20telangana!5e0!3m2!1sen!2sin!4v1626670210614!5m2!1sen!2sin" width="100%" height="240" style="border:0;" allowfullscreen="" loading="lazy"></iframe> <a class="addmaps"href="http://www.map-embed.com"id="get-map-data">www.map-embed.com</a></div><style>#gmap_canvas{height:240px;width:100%;}#mapouter{overflow:hidden;height:240px;width:100%;}</style></div>
                </div>
            </div>
</div>







        <div class="tab-pane fade" id="about">
            <div class="contact_inner">
            	<div class="contact_left">
                	<div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><i class="fa fa-"></i>National Institute of Technical Teachers' Training and Research</li>
                        	<li>Extension Centre, Kalamassery- 683 104 Kerala </li>
                            <li>[MINISTRY OF EDUCATION, GOVT. OF INDIA]</li>
                        </ul>
                    </div>
                    <div class="contact_leftimg">
                    	<ul class="contact_leftimginner">
                        	<li><span>Job Title </span><em> : Professor & Head  </em></li>
                            <li><span>Phone </span><em>: 0484 - 2542653</em></li>
                            <li><span>Fax </span><em>: 0484 - 2542653  </em></li>
                            <li><span>Email Id </span><em>  : nitttreck@nitttrc.ac.in  </em></li>
                            <li><span>Website </span><em>:  www.nitttrc.ac.in </em></li>
                        </ul>
                    </div>
                </div>
                <div class="contact_right">
                	<div id="mapouter"><div id="gmap_canvas"><iframe width="100%" height="240" frameborder="0" scrolling="no" marginheight="0" src="https://maps.google.com/maps?q=NATIONAL INSTITUTE OF TECHNICAL TEACHERS' TRAINING AND RESEARCH EXTENSION CENTRE, KALAMASSERY  KERALA, &t=&z=14&ie=UTF8&iwloc=&output=embed" marginwidth="0"></iframe><a class="addmaps"href="http://www.map-embed.com"id="get-map-data">www.map-embed.com</a></div><style>#gmap_canvas{height:240px;width:100%;}#mapouter{overflow:hidden;height:240px;width:100%;}</style></div>
                </div>
            </div>
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

    // Bind click event to tab links
    $(".nav-link").click(function(e){
        e.preventDefault(); // Prevent default link behavior
        var tabId = $(this).attr("href").substring(1); // Get the tab id from href attribute
        toggleTab(tabId); // Call the toggleTab function
    });

    // Add active class to the first tab and change its color
    $("#home").addClass("active show");
    $("a[href='#home']").addClass("active");

    // Call the toggleTab function with the first tab id
    toggleTab("home");
});
</script>




<?php include('include/footer.php')?>
