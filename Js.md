
<script>
$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});
</script>

<script>
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
</script>

<script>
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
</script>

 <script>
$(document).ready(function(){
  $("#p1").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  }); 
});
</script>

<script>
$(document).ready(function() {
  $("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
  });
});
</script>

$("#p1").mouseenter(function(){
  alert("You entered p1!");
});

$("p").dblclick(function(){
  $(this).hide();
});

 $("p").click(function(){
  $(this).hide();
});


$("button").click(function(){
  $("p").toggle();
});

$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});


$("#flip").click(function(){
  $("#panel").slideToggle();
});


<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});
</script>


 <script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").remove();
  });
});
</script>


<script>
$(document).ready(function(){
  $("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
  });
});
</script>
