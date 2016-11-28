
var optionTextArray = [];
var optionValueArray = [];

function checkList(ddId){
$('#'+ddId).after('<div class="dropdown" style=""><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select &nbsp <span class="caret"></span></button><ul class="dropdown-menu" style="width:350px"></ul></div>');

optionTextArray = [];
optionValueArray = [];

var appendDD = $('#'+ddId+'>option').length;

$('#'+ddId+'>option').each(function() {
   optionTextArray.push(this.text);
   optionValueArray.push(this.value);
});
sessionStorage.setItem('ddId',ddId);
makeDD(ddId);
}  


function makeDD(ddId){
var ddI = ddId;
dd = $('#'+ddId+'>option').length;
for(i=1; i<=dd;i++){
var tx = optionTextArray[i-1];
var url = optionValueArray[i-1];

$('.dropdown-menu').append('<li class="ddli"><div style="display:table-cell"><input type="checkbox" name="selectedVal" class="selectedVal" value='+url+'></input></div><div style="width:100%; display:table-cell" class="ddli2span"><span>'+tx+'</span></li></div>');
}
$('#'+ddId).eq(0).remove();
$('.dropdown-menu').append('<input type="hidden" id='+ddId+'></input>')
}


$(document).on('click',".ddli2span",function(e) {
$(this).parent().find('div').eq(0).find('.selectedVal').click();
var arrayofDropdown = [] ;
$('.ddli').css('background-color','white');
$('input[name="selectedVal"]:checked').each(function() {
	$(this).parent().css('background-color','#4285F4');
   arrayofDropdown.push(this.value);
});
var id = sessionStorage.getItem('ddId');
$('#'+id).val(arrayofDropdown);

e.stopPropagation();
});

$(document).on('click','.selectedVal',function(){
arrayofDropdown = [];
$('.ddli').css('background-color','white');
$('input[name="selectedVal"]:checked').each(function() {
	$(this).parent().css('background-color','#4285F4');
   arrayofDropdown.push(this.value);
});
var id = sessionStorage.getItem('ddId');
$('#'+id).val(arrayofDropdown);
});




 
