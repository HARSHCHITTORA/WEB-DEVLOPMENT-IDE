document.getElementById("ide1").addEventListener("keydown", myFunction);
document.getElementById("ide2").addEventListener("keydown", myFunction1);
document.getElementById("ide3").addEventListener("keydown", myFunction2);
function myFunction() {
    document.getElementById("ide1").style.backgroundColor = "black";
   
  }
  function myFunction1() {
  document.getElementById("ide2").style.backgroundColor = "black";
  }
  function myFunction2() {
  document.getElementById("ide3").style.backgroundColor = "black";
  }
  function compiler() {
    var html = document.getElementById("ide1");
    var css = document.getElementById("ide2");
    var js = document.getElementById("ide3");
    var code = document.getElementById("console").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        ide1.value +"<style>" +ide2.value +"</style>" +"<script>" +ide3.value + "</script>"
      );
      code.close();
    };
  }
  
  compiler();
  document.getElementById("ide4").innerHTML =compiler(); 