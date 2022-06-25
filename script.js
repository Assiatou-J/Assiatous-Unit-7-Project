$(".submission").click(function(){
      let age = $(".ageinput").val();
    	console.log(age);
      let happynewsamount = $(".happynewsinput").val();
    console.log(happynewsamount);
      let dance = $(".danceinput").val();
          console.log(dance);
     $(".questions").hide();
    let yearsuntil60 = 60 - age;
    let happydancenumber = yearsuntil60 * happynewsamount;
    $(".prediction").append("<p>" + "By the time you turn 60, you will " + dance + " " + happydancenumber + " times" + "</p>");
            });