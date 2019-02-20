$(document).ready(function(){
	$(".pages").hide();
	$("#logo").hide();
	$("#home").show	("fast");
	$("#logo").fadeIn("slow");
});

function mostrarId(id){
	  $(".pages").hide("fast");
	  $("#"+id).show("fast");
	  $("#btn-home").removeClass("active");
	  $("#btn-quienes").removeClass("active");
	  $("#btn-galeria").removeClass("active");
	  $("#btn-contacto").removeClass("active");
	  $("#btn-"+id).addClass("active");
	  if (id=="home") {
	  	$("#body").addClass("back1");
	  	$("#body").removeClass("back2");
	  	$("#body").removeClass("back3");
	  	$("#body").removeClass("back4");
	  }
	  else if(id=="quienes"){
	  	$("#body").addClass("back2");
	  	$("#body").removeClass("back1");
	  	$("#body").removeClass("back3");
	  	$("#body").removeClass("back4");
	  }
	  else if(id=="galeria"){
	  	$("#body").addClass("back3");
	  	$("#body").removeClass("back1");
	  	$("#body").removeClass("back2");
	  	$("#body").removeClass("back4");
	  }
	  else if(id=="contacto"){
	  	$("#body").addClass("back4");
	  	$("#body").removeClass("back1");
	  	$("#body").removeClass("back2");
	  	$("#body").removeClass("back3");
	  }

};

 $(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "button:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });