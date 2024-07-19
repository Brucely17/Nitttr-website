<!-- <?php $menu_id=25?> -->
<!-- <?php include('include/header.php');?> -->
<!-- <?php include_once('SiteNitttrAdmin/db.php'); ?> -->

	<script type="text/javascript">
		$(document).ready(function(e) 
		{
            $( "p" ).prepend('<i class=""></i>');
     	 });
    </script>
	<br>      
<div id="top">  	
<div class="inr_top_bar">
	<div class="container">
    		<ul>
            	<li><a href="index.php"><i class="fa fa-home"></i></a></li> 
                <li><a href="civil.php">RESOURCE CENTRE</a></li>
			
            </ul>
    	</div>
    </div>
	</div>
	
	<br>

<html>				
  <style>

/* Style the tab */
.tab {  
  float: left;
  border: 1px #ccc;
  width:22%;
  height: 100%;  
}

@media screen and (max-width: 700px){
	span.letters-left,span.letters-right{
	font-size:20px;
}

.tab{
	width:100%!important;
}

div.tab {

  width: 51%important;
 
}

}	
@media screen and (max-width: 800px){
	span.letters-left,span.letters-right{
	font-size:20px;
}
div.tab {

  width: 51%important;

  
}
}
@media screen and (max-width: 480px){
	span.letters-left,span.letters-right{
	font-size:15px;
}
}

@media screen and (max-width: 1000px){
	span.letters-left,span.letters-right{
	font-size:20px;
}
}
@media screen and (max-width: 1240px){
	div.tab {

  width: 21%important!important;

  
}
}
/* Style the buttons inside the tab */
.tab button {
  display: block;
  padding: 18px 14px;
  width: 100%;
  text-align: left;
    border-left: 0;
    border-right:0 ;
    border-top: 0;
    border-bottom-color: #2EE59D;
    border-bottom-width: 2px;

    font-family: 'Rubik', sans-serif;
  font-size: 14px;
  
  letter-spacing: 1px;
  font-weight: 500;
  color: black;
  background-color: #eee;
  border: none;
 
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
 
}

/* Change background color of buttons on hover */

.tab button:hover {
   text-transform: uppercase;
   background-color: #8cc5bb;
  box-shadow: 0px 15px 20px rgba(229, 46, 67, 0.3);
  color: white;
  transform: translateY(-7px);
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #41B3A3;
  text-transform: uppercase;
  color: white;
  
}

/* Style the tab content */
.tabcontent {

  float: left;
  
  border: 1px  #ccc;
  width:78%;
  height: 100%;
  
  
   
  
  
}







.ml5 {
  position: relative;
  font-weight: 500;
  font-size: 3em;
  color: #c55a83;
}

.ml5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
  line-height: 1em;
}

.ml5 .line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 1px;
  width: 100%;
  background-color: #402d2d;
  transform-origin: 2s;
 
}



.ml5 .letters {
  display: inline-block;
  opacity: 0;
  font-family:lato;
}


<!--
/* table style content */
#table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

}

#table tr:nth-child(even){background-color: #eee;}

#table tr:hover {background-color: #ddd;}

#table th {
 padding-top: 15px;
  
  background-color: grey;
  color: white;
}
-->

.annual_left li{ min-height:auto; width:50%;}



.polytechnic_button {
	float: right;
}
.polytechnic_button a {
	background-color: #4b8e90;
	/*border-radius: 5px;*/
	color: #fff;
	font-family: lato-bold;
	padding:10px 14px;
	margin:0;
}


.justify {
 text-align:justify;
}


.textboxleft {
  background-color: #aa863a;
  width: 350px;
  border: 15px green;
 color: white;
  padding: 20px;
 display:inline-block;
  text-align: center;
  font-weight: 400;
  font-size:16px;
   cursor: pointer;
    border-radius: 3px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	float :initial;
	
}

.textboxcenter {
  background-color: #729f98;
  width: 357px;
  border: 15px green;
 color: white;
  padding: 20px;
  text-align: center;
  font-weight: 400;
  font-size:16px;
   cursor: pointer;
    border-radius: 3px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	float :initial;
	
}




.textboxright {
  background-color: #aa863a;
  width: 350px;
  border: 15px green;
 color: white;
  padding: 20px;
  text-align: center;
  font-weight: 400;
  font-size:16px;
   cursor: pointer;
    border-radius: 3px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	display:inline-block;
float :initial;	

}



arr {
border: solid black;
  border-width: 0 3px 4px 0;
  display:inline-block;
  padding: 4px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}


#call {
    display: none;
}
.hiddenClass{
  display: none;
}
.activeClass{
  display: block;
}

<!-- carousel style -->



</style>


<style>



/* Position the image container (needed to position the left and right arrows) */
.container1 {
  position: relative;
  margin-top:3%;
  margin-left: 200px;
 
 
}


/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}
/*
/* Next & previous buttons */
.prev1,
.next1 {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  
  
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
 
}

/* Position the "next button" to the right */
.next1 {
  right:20%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev1:hover,
.next1:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
 */
 
/* Number text (1/3 etc) */
.numbertext1 {
  color: black;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container1 {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row1:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column1 {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

.ctn_all table{
			   border:1px solid #ccc;	
			   width:100%;	
}

.ctn_all table tr{
	  border:1px solid #ccc;
	  border-right:1px solid #ccc;	
}

.ctn_all td{
border-right:1px solid #ccc;	

}

.ctn_all table tr:hover{ box-shadow:0 2px 20px 0 rgba(0, 0, 0, 0.3)}

.table, td{
  vertical-align:top;
   font-family: 'Rubik', sans-serif;
   
 
 
}
em {
	font-family: 'Rubik', sans-serif;
}

.table_td_pad {
	font-family: 'Rubik', sans-serif;
}

h {
	font-family: 'Comfortaa', cursive;
	
	color:#950740;
	font-size:23px;
	font-weight:1000;
}
h4 {
	color:#C3002F;
}

.image {
   
  float: left;
  border: 1px #ccc;
 
  width: 100%;
  height: auto;
  overflow-y:auto;
  
}
c {
	font-family: 'Comfortaa', cursive;
	color:#240090;
	font-size:20px;
	font-weight:1000;
}
h3 {
	font-size:17px;
}

#test1::before,
#test2::before {
  display: block;
  content: " ";
  margin-top: -65px;
  height: 65px;
  visibility: hidden;
}

.affix {
    top: 8%;
    width: 100%;
    z-index: 9999 !important;
	color:red;
  }

  .affix + .container-fluid {
    padding-top: 70px;
	
  }
  .carosel {
	  height:100%;
	  width:100%;
  }

h4 .min_head {
	color:#EC4D37;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  height: 40px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 4px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href='https://fonts.googleapis.com/css?family=Pontano Sans' rel='stylesheet'>

<link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
<link rel="stylesheet" type="text/css" href="engine1/style.css" />
<script type="text/javascript" src="engine1/jquery.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">


<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 </head>
<br>		

<!--
<nav class="navbar navbar" data-spy="affix" data-offset-top="197">
  <ul class="nav navbar-nav">
  </ul>
  -->

 
<div class="ml5">
<center>
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters letters-left">RESOURCE</span>
    <span class="letters letters-right">CENTRE</span>
    <span class="line line2"></span>
  </span>
</center>
</div>


<br><br>


<div class="tab">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        
        <button class="tablinks" onclick="content(event, 'vision')" id="defaultOpen">About</button>
           <button class="tablinks" onclick="content(event, 'vismis')">Vision &nbsp; &amp; &nbsp; Mission</button>
        <button class="tablinks" onclick="content(event, 'rules')">Rules</button>
        <button class="tablinks" onclick="content(event, 'holidays')">Timings & Holidays</button>
		<button class="tablinks" onclick="content(event, 'collect')">Collections</button>
		<button class="tablinks" onclick="content(event, 'ejourn')">E-Journals</button>
		<button class="tablinks" onclick="content(event, 'dstp')">Domain of Short Term Programmes</button>
		<button class="tablinks" onclick="content(event, 'itp')">International Training Programme</button>
		<button class="tablinks" onclick="content(event, 'nli')">National Level Initiatives</button>
		<button class="tablinks" onclick="content(event, 'opac')">OPAC</button>
		<button class="tablinks" onclick="content(event, 'faculty')">Senior Librarian</button>
		
	  </div>
    </div>
  </div>
</div>


<div id="vision" class="tabcontent">
	<div class="container">
		<div class="row"> 	
			<div class="col-md-12">
				<div class="animated fadeInRight">
					<div id="1">
						<h>History</h><br><br>
							<table>
								<tr>
									<td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
									<td><p class="justify"><em>In the year 1966, Library was established in the institute and after a decade it is renamed as Resource Centre with enhanced facilities. The Resource Centre building is spread over in 1187 sq. mt. space and it is completely furnished to cater the reading and lending facilities. The entireindependent building is Wi-Fi enabled and designed for laptop use. Reference and reading halls are completely air conditioned. Resource Centre approximately 30,700 books and 4000 back volumes. A comprehensive range of videos, DVDs, CD-ROMS and electronic resources, including- e journals, is also available for our users. Exclusive reading lounge in the ground floor for reading newspaper, magazine and also for private reading.</em></p></td>
								</tr>
							</table>
							<br>
 
 <h>Automation with RFID</h><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>The Resource Centre provides a wide variety of services physically as well as through online. The resource centrehas been automated its services using open source software – KOHA and the users have seamless access to all the databases from any desktop that is connected to the campus LAN.   RFID has been implemented at the Resource Centre for circulation and theft detection purpose.</em></p>
 </td>
  </tr>
</table><br>
   <h>Online Public Access Catalogue (OPAC):</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>The Resource Centre collections are computerized and it can be accessed through Online Public Access Catalogue (OPAC) </em></p>
 </td>
  </tr>
 
  </table><br>
    <h>Digital Knowledge Centre</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>In the ResourceCentre 26 systems are available with high speed internet connection. It provides on line access to e journals and NPTEL digital resources to our library users. In addition, lab oriented courses are also conducted in this Centrefor national and international library professionals.</em></p>
 </td>
  </tr>
 
  </table>
<br>
 </div></div></div></div></div></div>
 
 <div id="vismis" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>Vision </h><br><br>
              <table>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Connecting people and resources through technology</em></p></td>
                </tr>
              </table>
              <br><br>
 
 <h>Mission</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>To acquire, organize and provide access to various kinds of information sources including books, journals, theses, etc. both in print and electronic forms </em></p>
 </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>To provide IT based information services and be partner in the pursuit of academic excellence by teacher trainees of India and Overseas, researchers and faculty.</em></p>
  </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>To Collaborate with other institutions at local, regional, national and international levels for mutually beneficial resource sharing.</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>To promote excellence to library staff and other faculty in technical institutions of India and Overseas.</em></p>
   </td>
  </tr>
  

  </table>
 </div></div></div></div></div></div>
 
 <div id="rules" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
           
 <h>Rules and Regulation</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>Services are provided to the members only. Non-members will be allowed with permission</em></p>
 </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>Books must be returned on before the due date and books will be renewed if there are no reservations.</em></p>
  </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Loss of Books, if any, shall be reported immediately to the resource centre on the prescribed form. </em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>If the borrower is unable to replace the lost books, the cost is recovered, price of the book plus procurement charges 10 %</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Members are requested not to bring their belongings inside the resource centre.</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>Use of edibles in the Resource Centre is strictly prohibited.</em></p>
  </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Reference materials should not be taken outside from the Resource Centre.</em></p>
   </td>
</tr>
<tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
<tr>
<td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td> 
<td> 
   <p class="justify"><em>Patrons are responsible for complying with the limitation of copyright act while photocopying a resource centre book.</em></p>
 </td></tr>
 <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
<tr>
<td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td> 
<td> 
   <p class="justify"><em>Strict silence must be observed in the Resource Centre.</em></p>
 </td></tr>
 <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
<tr>
<td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td> 
<td> 
   <p class="justify"><em>Readers should not write in, mark or otherwise disfigure/damage books, furniture etc.</em></p>
 </td></tr>
  </table>
  <table id="customers">
  <tr>
    <th></th>
    <th>BooksEligibility </th>
    <th>Loan Period</th>
  </tr>
  <tr>
    <td>Faculty & Group ‘A’ Staff</td>
    <td>10</td>
    <td>1 Month</td>
  </tr>
  <tr>
    <td>Non-teaching Staff</td>
    <td>5</td>
    <td>1 Month</td>
  </tr>
  <tr>
    <td>Group ‘D’ Staff</td>
    <td>2</td>
    <td>1 Month</td>
  </tr>
  <tr>
    <td>Long Term Trainees</td>
    <td>5</td>
    <td>15 days</td>
  </tr>
  <tr>
    <td>Research Scholars</td>
    <td>5</td>
    <td>15 days</td>
  </tr>
  <tr>
    <td>Short Term Trainees</td>
    <td>2</td>
    <td>5 Days</td>
  </tr>


</table>
<p>If the borrowed books / journals are not returned within due date, the Resource Centre will collect overdue charges.</p>
<br><br>
 </div></div></div></div></div></div>
 


  <div id="holidays" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
           
 <h>Resource Centre Timings & Holidays</h><br><br>

  <table id="customers">
  <tr>
    <th>Monday to Friday</th>
    <th>09:00 Hrs - 17:30 Hrs</th>
  </tr>
  <tr>
    <td>Circulation Counter (Mon-Fri)</td>
    <td>09:30 Hrs - 17:00 Hrs</td>
  
  </tr>
  <tr>
   <td colspan="2"><center>The Resource Centre remains closed on all Saturday, Sunday and public holidays 

Public Holiday List</center>
</td>
  </tr>
</table>
<BR>
<table id="customers" style="height: 50%">
  <tr>
    <th>SI.No.</th>
      <th>CLOSED PUBLIC HOLIDAY’S</th>
    <th>DATE</th>
    <th>DAY</th>
  </tr>
  <tr>
    <td>1</td>
    <td>PONGAL</td>
    <td>14.01.2022</td>
     <td>FRIDAY</td>
  </tr>
  <tr>
    <td>2</td>
    <td>REPUBLIC DAY </td>
    <td>26.01.2022</td>
     <td>WEDNESDAY</td>
  </tr>
  <tr>
    <td>3</td>
    <td>MAHAVIR JAYANTHI </td>
    <td>14.04.2022</td>
     <td>THURSDAY</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GOOD FRIDAY</td>
    <td>15.04.2022</td>
     <td>FRIDAY</td>
  </tr>
  <tr>
    <td>5</td>
    <td>IDU'L FITR (RAMZAN)*</td>
    <td>03.05.2022</td>
     <td>TUESDAY</td>
  </tr>
  <tr>
    <td>6</td>
    <td>BUDDHA PURNIMA</td>
    <td>16.05.2022</td>
     <td>FRIDAY</td>
  </tr>
  <tr>
    <td>7</td>
    <td>ID-UL-ZUHA (BAKRID)*</td>
    <td>10.07.2022</td>
     <td>SUNDAY</td>
  </tr>
  <tr>
    <td>8</td>
    <td>MUHARRAM</td>
    <td>09.08.2022</td>
     <td>TUESDAY</td>
  </tr>
  <tr>
    <td>9</td>
    <td>INDEPENDENCE DAY</td>
    <td>15.08.2022</td>
     <td>MONDAY</td>
  </tr>
  <tr>
    <td>10</td>
    <td>GANESH CHATURTHI/ VINAYAK CHATURTHI</td>
    <td>31.08.2022</td>
     <td>WEDNESDAY</td>
  </tr>
   <tr>
    <td>11</td>
    <td>MAHATMA GANDHI’S BIRTHDAY</td>
    <td>02.10.2022</td>
     <td>SUNDAY</td>
  </tr>
  <tr>
    <td>12</td>
    <td>DUSSEHRA (VIJAYADASAMI)</td>
    <td>04.10.2022</td>
     <td>TUESDAY</td>
  </tr>
  <tr>
    <td>13</td>
    <td>DUSSEHRA (MAHANAVAMI)</td>
    <td>05.10.2022</td>
     <td>WEDNESDAY</td>
  </tr>
  <tr>
    <td>14</td>
    <td>MILAD-UN-NABI or ID-E-MILAD
(BIRTHDAY OF PROPHET MOHAMMAD)</td>
    <td>09.10.2022</td>
     <td>SUNDAY</td>
  </tr>
  <tr>
    <td>15</td>
    <td>DIWALI (DEEPAVALI)</td>
    <td>24.10.2022</td>
     <td>MONDAY</td>
  </tr>
  <tr>
    <td>16</td>
    <td>GURU NANAK’S BIRTHDAY</td>
    <td>08.11.2022</td>
     <td>TUESDAY</td>
  </tr>
  <tr>
    <td>17</td>
    <td>CHIRISTMAS DAY</td>
    <td>25.12.2022</td>
     <td>SUNDAY</td>
  </tr>
</table>
<br>
 </div></div></div></div></div></div>

 <div id="collect" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
           
 
 <h>Collection</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>The Resource Centre holds a good number of learning and teaching materials books, periodicals, reports etc. as detailed below.</em></p>
 </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>Books - 30700</em></p>
  </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Magazine - 4 Titles</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Journals - 6 Titles</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>News papers</em></p>
   </td>
  </tr>

   <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>English - 1</em></p>
   </td>
  </tr>

   <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Tamil - 1</em></p>
   </td>
  </tr>
   <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Hindi - 1</em></p>
   </td>
  </tr>
  </table>
  <br><br>
   <h>E-Resources</h><br><br>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>Springer (Engineering Collection only -  53 Titles)  https://rd.springer.com/</em></p>
 </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>lEmerald Publishing (Business, Management and Education Collections Only – 700 titles for easy reference the list is attached) https://www.emerald.com/insight/products</em></p>
  </td>
  </tr>
  

  </tr>
  

  </table>
 </div></div></div></div></div></div>


<div id="ejourn" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>E-Journals</h><br><br>
              <table>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>E-Resources subscription through e-Shodh Sindhu Consortia</em></p></td>
                </tr>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>1.ASCE Library</em></p></td>
                </tr>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>2.Springer</em></p></td>
                </tr>
              </table>
              <br><br>
 
<h4>E-Resources subscription through DELNET</h4>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>1.DELNET Engineering/Technology Collection  https://www.proquest.com/211086</em></p>
 </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
  <p class="justify"><em>2.IESTC E-Journals Package (Gale- A Cengage Company) – All Tittles                                                    
https://link.gale.com/apps/menu?u=nitttr
</em></p>
  </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>In addition to the above, the remote access service is available for Open Access Journals and Books in all subject areas, as per details given below</em></p>
   </td>
  </tr>
  
  <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Open Access E-Books – 95869</em></p>
   </td>
  </tr>

    <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>Open Access E-Journals – 41634 Titles</em></p>
   </td>
  </tr>
  
 <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>To avail this facility, users must first register at https://nitttrc.knimbus.com/user#/home . After registering, please contact the resource centre to activate your account.</em></p>
   </td>
  </tr>

   <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
  <tr>
  <td><i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
  <td>
   <p class="justify"><em>The remote access facility for the above-mentioned digital resources is also available on your mobile device. Hence, all registered users are requested to avail this facility by downloading the mobile app -mLibrary–Your Mobile eLibrary from the Google Play store. (The mobile app link is https://play.google.com/store/apps/details?id=com.elib.knimbusapp)</em></p>
   </td>
  </tr>
  </table>
<br>
 </div></div></div></div></div></div>


 <div id="dstp" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>Domain of Short Term Prgrammes</h><br><br>
              <table>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Library Automation</em></p></td>
                </tr>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Application of IT in Libraries</em></p></td>
                </tr>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Open Source Software</em></p></td>
                </tr>
                 <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Digital Library, Library</em></p></td>
                </tr>
                 <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Management</em></p></td>
                </tr>
                 <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Collection Development</em></p></td>
                </tr>
                 <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Open Educational Resources</em></p></td>
                </tr>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Copyright and Patent</em></p></td>
                </tr>
              </table>
              <br><br>
 

 </div></div></div></div></div></div>

 <div id="itp" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>Domain of Short Term Prgrammes</h><br><br>
              <table>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>The Resource Centre, National Institute of Technical Teachers Training and Research (NITTTR), is organizing an Advanced Certificate Course on “Modern Library Practices” from the year 2007 onwards. The course is designed for teacher’s / curriculum developers in Library and Information Science and practicing library professionals of overseas. The course is sponsored by Ministry of External Affairs, Government of India under ITEC scheme.The programme aims to migration of present conventional library system to Modern Digital Library, Preservation of historical content, Library Management & Maintenance and Information Security. So far, twelve batches completed</em></p></td>
                </tr>
              </table>
              <br><br>
 <CENTER><P>Advanced Certificate Course on Modern Library Practices - Statistics</P></CENTER>
<table id="customers">
  <tr>
    <th>S.NO</th>
    <th>BATCH</th>
    <th>NO OF COUNTRY</th>
    <th>MALE</th>
    <th>FEMALE</th>
    <th>NO OF PARTICIPANT</th>
    <th>DURATION</th>
  </tr>
  <tr>
    <td>1</td>
    <td>I</td>
    <td>9</td>
    <td>3</td>
    <td>10</td>
    <td>13</td>
    <td>15-10-2007 to 07-12-2007</td>

  </tr>
  <tr>
   <td>2</td>
    <td>II</td>
    <td>17</td>
    <td>7</td>
    <td>20</td>
    <td>27</td>
    <td>20-10-2008 to 12-12-2008</td>
  </tr>
  <tr>
    <td>3</td>
    <td>III</td>
    <td>15</td>
    <td>9</td>
    <td>14</td>
    <td>23</td>
    <td>14-10-2009 to 08-12-2009</td>
  </tr>
  <tr>
   <td>4</td>
    <td>IV</td>
    <td>16</td>
    <td>11</td>
    <td>11</td>
    <td>22</td>
    <td>13-10-2011 to 07-12-2011</td>
  </tr>
  <tr>
    <td>5</td>
    <td>V</td>
    <td>16</td>
    <td>9</td>
    <td>17</td>
    <td>26</td>
    <td>05-12-2012 to 29-01-2013</td>
  </tr>
  <tr>
   <td>6</td>
    <td>VI</td>
    <td>14</td>
    <td>11</td>
    <td>12</td>
    <td>23</td>
    <td>04-12-2013 to 28-01.2014</td>
  </tr>
  <tr>
    <td>7</td>
    <td>VII</td>
    <td>12</td>
    <td>13</td>
    <td>10</td>
    <td>23</td>
    <td>30-07-2014 to 23-09.2014</td>
  </tr>
  <tr>
   <td>8</td>
    <td>VIII</td>
    <td>13</td>
    <td>9</td>
    <td>13</td>
    <td>22</td>
    <td>20-09-2015 to 17-11.2015</td>
  </tr>
  <tr>
   <td>9</td>
    <td>IX</td>
    <td>17</td>
    <td>10</td>
    <td>12</td>
    <td>22</td>
    <td>28-09-2016 to 23-09.2016</td>
  </tr>
   <tr>
   <td>10</td>
    <td>X</td>
    <td>16</td>
    <td>12</td>
    <td>13</td>
    <td>25</td>
    <td>29.11.2017 to 23.01.2018</td>
  </tr>
   <tr>
   <td>11</td>
    <td>XI</td>
    <td>11</td>
    <td>11</td>
    <td>12</td>
    <td>23</td>
    <td>20.06.2018 to 14.08.2018</td>
  </tr>
   <tr>
   <td>12</td>
    <td>XII</td>
    <td>7</td>
    <td>7</td>
    <td>13</td>
    <td>20</td>
    <td>19.08.2019 to 30.08.2019</td>
  </tr>
   <tr>
   <td colspan="2">Total</td>
    
    <td>48  Countries</td>
    <td>110 Male</td>
    <td>159  Female</td>
    <td>Total 269 Participants</td>
    <td></td>
  </tr>
</table>
<br>
 </div></div></div></div></div></div>

 <div id="opac" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>OPAC</h><br><br>
              <table>
                
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>Under Construction
</em></p></td>
                </tr>
              </table>
            
 


 
 </div></div></div></div></div></div>

<div id="nli" class="tabcontent">
  <div class="container">
    <div class="row">   
      <div class="col-md-12">
        <div class="animated fadeInRight">
          <div id="1">
            <h>National Level Initiatives</h><br><br>
              <table>
                <h4>IRINS</h4>
                <tr>
                  <td><i class="fa fa-hand-o-right">&nbsp;&nbsp;&nbsp;</i></td>
                  <td><p class="justify"><em>IRINS is web-based Research Information Management (RIM) service developed by the Information and Library Network (INFLIBNET) Centre in collaboration with the Central University of Punjab. It is Ministry of Education, Government of India Project under National Mission on Education through ICT (NME-ICT)
The portal facilitates the academic, R&D organizations and faculty members, scientists to collect, curate and showcase the scholarly communication activities and provide an opportunity to create the scholarly network. The IRINS would support to integrate the existing research management system such as HR system, course management, grant management system, institutional repository, open and commercial citation databases, scholarly publishers, etc. It has integrated with academic identity such as ORCID ID, Scopus ID, Research ID, Microsoft Academic ID, Google Scholar ID for ingesting the scholarly publication from various sources.  Our institute is part of IRINS, all our faculty members’details are updated in NITTTR, Chennai - IRINS Instance
</em></p></td>
                </tr>
              </table>
            
 
 <h4>ShodhShuddhi</h4>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>Based on the recommendation of Sub-Committee, National Steering Committee (NSC) of e-ShodhSindhu, The Ministry of Education, Govt. of India has initiated a programme "ShodhShuddhi" which provides access to Plagiarism Detection Software (PDS) to all universities/Institutions in India since Sept 1, 2019. Under this initiative, URKUND a Web Based Plagiarism Detection Software system is being provided to all users of universities/Intuitions in the country. This initiative is formally launched by Honorable Minister of HRD (now renamed as Minister of Education) on September 21, 2019. NITTTR, Chennai, is one of the beneficiary Institute under this scheme. </em></p>
 </td>
  </tr>
</table>
   <h4>e-ShodhSindhu Consortium</h4>
 <table>
 <tr>
 <td><i class="fa fa-hand-o-right" ></i>&nbsp;&nbsp;&nbsp;</td>
 <td>
 <p class="justify"><em>Based on the recommendation of an Expert Committee, the Ministry of HRD (now renamed as Ministry of Education) has formed e-ShodhSindhu merging three consortia initiatives, namely UGC-INFONET Digital Library Consortium, NLIST and INDEST-AICTE Consortium.The e-ShodhSindhu will continue to provide current as well as archival access to more than 10,000 core and peer-reviewed journals and a number of bibliographic, citation and factual databases in different disciplines from a large number of publishers and aggregators to its member institutions including centrally-funded technical institutions. </em></p>
 </td>
  </tr>
 </table>

 </div></div></div></div></div></div>
 
<br>


<div id="faculty" class="tabcontent">
<div class="container">
	<div class="row">
	<div class="col-md-12">
<div style="color:red">
<h>Senior Librarian</h></div>
<br>

	
				
				<div class="animated fadeInRight">
				
				 <h6 class="faculty_acc" ><strong>Dr.R.Ravichandran, M.Ed., M.Sc., M.B.A., M.L.I.S.<small><strong></strong></small></strong></h6>
			
            <div class="faculty_ctn ful_wid">
            	<p class="justify"><body class="light_bg" data-spy="scroll" data-target="#bs-example-navbar-collapse-1" data-offset="80" data-scroll-animation="true">
       
    
               <div class="row">
                        <div class="col-md-2">
                            <div class="person_img"><img src="assets/images/ravi.PNG" style="width:200px;height:150;" ></div>
                        </div>
            <div class="col-md-2">        
              </div>
		     <div class="col-md-5">
                           
						  <h4>Contact</h4>  
						
						<table>
						<tr>
						<td><i class="material-icons" style="color:#5da039">call</i></td>
						<td>
							<div>&nbsp;&nbsp;&nbsp; (044) 2254&nbsp;5468  / 044-2254&nbsp;5469</div>
							</td>
							</tr>
              <tr>
            <td><i class="material-icons" style="color:#5da039">fax</i></td>
            <td>
              <div>&nbsp;&nbsp;&nbsp;(044) 2254 1982</div>
              </td>
              </tr>
							
							<tr>
							<td><i class="material-icons" style="color:#e05915">email</i></td>
							<td>
							<div>&nbsp;&nbsp;&nbsp;ravi@nitttrc.ac.in</div></td>
							</tr>
							
<tr><td>&nbsp;&nbsp;&nbsp;</td></tr>																				<tr>
							<td>
							<img src="./images/vidwanimage.JPG" height=40 width=15>
							</td>
							<td><div style="vertical-align:center;">&nbsp;&nbsp;&nbsp;
							<a href="https://vidwan.inflibnet.ac.in/profile/166780" target="_blank">Vidwan ID Link</a></div></td>
							</tr>
							</table>
						  
						  </div>
						  </div>
						  <br>
						
           
        
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>

    </body></p>
	
                </div></div></div></div></div></div>
 <script>

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml5 .line',
    duration: 700,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

</script>




<script>

function content(evt,program ) {
	
	
location.href="#top";
   
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
	  
    tabcontent[i].style.display = "none";
	
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
	
  }
  document.getElementById(program).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
<style>
@media only screen and (max-width: 1300px) {
  .clear {
    height:150px;
    clear:both;
  }
}
</style>
<div class="clear"></div>

        
</body>
</html>
