<!--#include virtual="/common/includes/alerts.inc"-->

<script language="javascript">
whichDept="";
whichStyle="";

function changeFilter(whichCol){
 if(whichCol == "Dept"){
   $('#deptCollection').val(whichDept);
   document.forms[0].proxystylesheet.value = whichStyle;
 }else{
   document.forms[0].site.value = "default_collection";
   document.forms[0].proxystylesheet.value = "cos_frontend";
 }
}
</script>

<!-- 2016 References -->
<link rel="stylesheet" type="text/css" href="//www.seattle.gov/common/css/bootstrap_customNonCMS.min.css" media="all" />       
<link rel="stylesheet" type="text/css" href="/assets/prebuilt/css/anda.css" media="all" />  
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:400,700,800,600" media="all" />
<link rel="stylesheet" type="text/css" href="/assets/prebuilt/css/font-awesome.min.css" >
<link rel="stylesheet" type="text/css" href="//www.seattle.gov/common/css/shared2016_static.css" />
<!-- END 2016 References -->

<style>
/*2016 GLOBAL FIXES*/
#header nav .container,
#seaGovHeader .container,
#seaGovFooter .container{max-width:960px}
#header nav .container #seagovNavbar{width:100% !important;}
  #searchIcon{display:block !important;}
  div#searchModal {padding:0px !important;}
  nav#slideMenuNav ul{margin:0px;}
  nav#slideMenuNav li {text-align:left;}
    nav#slideMenuNav li a {font-family:"Open Sans"}
.footerBottom15Wrapper {margin-top: 40px !important;}
    #footerBottom15{
      padding:0px;
      min-height: 40px;
    }
    #footerBottom15 .row{ margin:0px;}
    .footerContainer {
      padding:0px !important;
      width:initial !important;
      float: left;
      margin-right: 140px;
    }
      #footerBottom15,
      #footerBottom15 a{
        font-size:14px !important;
        padding-top:22px;
        font-family: 'Open Sans';
        font-weight:700;
        }
      .footerContainer:last-child {
        margin-right: 0px !important;
      }

 #seaGov_topNav_Container{display:none;}

/*Fix Only for 960 Search w/o Bootstrap*/
#searchModal{margin-top:60px;}
  #searchModal .modal-content {
    background-color: rgba(0,0,0, .75);
  }
  #searchModal .modal-dialog {margin: 0px auto;}
  #searchModal #searchInput {box-sizing: border-box;}
  #searchModal #searchButtonSea{
    display:inline-block;
    padding:6px 12px;
    margin:0px;
    background-image:none;
  }
/*END 2016 GLOBAL FIXES*/
</style>

<script language="javascript" type="text/javascript">
//2016 JS
$(function () {
    var primaryMenuToggle = $('#mainMenuToggle')[0];
    
    primaryMenuToggle.onclick = function () {
        $(this).addClass('active');
        $('.slidemenu-right').addClass('slidemenu-open');        
    };
    //Menu Close Button
    $('#mainMenuClose').click(function () {        
        $('.slidemenu-right').removeClass('slidemenu-open');        
    });
  
  //Search Modal w/o Bootstrap
  $('#searchIcon').click(function(){
    if( $('#searchModal').hasClass('active') == true){
      $('#searchModal').removeClass('active').slideUp();
      $("#searchIcon i").removeClass("fa-times").addClass("fa-search");
    }else{
      $('#searchModal').slideDown().addClass('active');
      $('.modal-backdrop').hide();
      $("#searchIcon i").removeClass("fa-search").addClass("fa-times"); 
    }
  }); 
  $('#searchModalClose').click(function(){
    $('#searchModal').removeClass('active').slideUp();
    $("#searchIcon i").removeClass("fa-times").addClass("fa-search");
  });
  $(".searchToggles label").click(function (e) {
      $(this).children("input").attr("checked", true)
  });

  //append footer at the very end
  $('.footerBottom15Wrapper').parent().appendTo(document.body);

  /*Mac Fix Detection*/
  if(navigator.platform == 'MacIntel'){
    $('body').addClass('mac');
    if(navigator.userAgent.indexOf('Firefox') < 0){
      $('body').addClass('notFF');
    }
  }
  
});

//END 2016 JS
</script>




<div id="seaGovHeader" role="banner">
  <div id="header">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container"> 
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" id="seagovNavbar"> 
          <div class="navbar-brand">                    
              <a href='//seattle.gov' class="logohome exec">
                Seattle.gov
              </a>
          </div>
          <span class="seattleMayor"></span>
          <p class="navbar-text navbar-right" id="mainMenuToggle" > <i class="fa fa-bars fa-2x"></i> </p>
          <p class="navbar-text pull-right" id="searchIcon" title="Search" data-toggle="modal" data-target="#searchModal"><i class="fa fa-search fa-2x"></i></p>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling --> 
      </div>
      <!-- /.container-fluid --> 
    </nav>
    <nav role="navigation" id="slideMenuNav">
      <ul class="list-group slidemenu-right">
        <li class="list-group-item first">
          <button id="mainMenuClose" aria-label="Close Main Menu"> <i class="fa fa-times fa-4x"></i> </button>
        </li>
        <li class="list-group-item"><a href="/services-and-information">Services & Information</a></li>
        <li class="list-group-item"><a href="/elected-officials">Elected Officials</a></li>
        <li class="list-group-item"><a href="/city-departments-and-agencies">Departments</a></li>
        <li class="list-group-item"><a href="/visiting-seattle">Visiting Seattle</a></li>
        <li class="list-group-item"><a href="//news.seattle.gov/">News</a></li>
        <li class="list-group-item"><a href="/event-calendar">Event Calendar</a></li>
        <li class="list-group-item last"></li>
      </ul>
    </nav>
  </div>
  <!-- SEATTLE.GOV HEADER ENDS --> 
</div>
<div class="modal" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchIcon">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="searchModal" id="searchModalClose" data-toggle="modal" data-target="#searchModal" aria-label="Close"><span aria-hidden="true" class="fa fa-close fa-2x"></span></button>
      </div>
      <div class="modal-body">
        <form role="search" id="googleSearch" method="get" action='http://find.seattle.gov/search' class="navbar-form">
          <div class="input-group">
            <input type="text" class="form-control" title="Search" id="searchInput" type="text" name="q" size="18" maxlength="255" value="" placeholder="Search">
            <span class="input-group-btn">
            <button id="searchButtonSea" type="submit" class="btn btn-primary btn-default" name="btnG" value="Go" onclick="document.forms['googleSearch'].submit()"><i class="fa fa-search fa-2x"></i></button>
            </span>
            <input type="hidden" name="client" value="cos_frontend"/>
            <input type="hidden" name="proxystylesheet" value="cos_frontend"/>
            <input type="hidden" name="output" value="xml_no_dtd"/>
          </div>
      <div id="googleSearchToggle">
      <fieldset class="searchToggles">
        <legend> <span> I want to search within the following:</span> </legend>
        <div class="radio">
          <label for="Seattlegov">
            <input type="radio" name="site" value="default_collection" title="Seattlegov" id="Seattlegov" checked="checked" onclick="changeFilter('Seattle')">
            <span>Seattle.Gov</span></label>
          <label for="currentSite">
            <input type="radio" name="site" value="dept" title="Current Site" id="deptCollection" >
            <span onclick="changeFilter('Dept')">This Site Only</span></label>
        </div>
      </fieldset>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>

