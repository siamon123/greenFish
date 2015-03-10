jQuery(document).ready(function( $ ) { 
//Menu Toggle
        $(".navbar-toggle").click(function() { 
          $(".navbar").slideToggle(100);
          $('#sub-header').slideToggle(100);
          return false;
        });                   
});