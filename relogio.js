<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours(1);
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>


<div id="txt">
<script type="text/javascript">document.write(startTime())</script>
</div>