
function checkList(ddId){
$('#'+ddId).after('<div class="dropdown" style=" margin-top:30px"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select<span class="caret"></span></button><ul class="dropdown-menu" style="width:350px"></ul></div>');

var optionTextArray = [];
var optionValueArray = [];

var appendDD = $('#'+ddId+'>option').length;

$('#'+ddId+'>option').each(function() {
   optionTextArray.push(this.text);
   optionValueArray.push(this.value);
});

makeDD(ddId);
}

 
function makeDD(ddId){ 
dd = $('#'+ddId+'>option').length;
for(i=1; i<=dd;i++){
var tx = optionTextArray[i-1];
var url = optionValueArray[i-1];

$('.dropdown-menu').append('<li class="ddli"><div style="display:table-cell"><input type="checkbox" name="selectedVal" class="selectedVal" value='+url+'></input></div><div style="width:100%; display:table-cell" class="ddli2span"><span>'+tx+'</span></li></div>');
}

}


$(document).on('click',".ddli2span",function(e) {
$(this).parent().find('div').eq(0).find('.selectedVal').click();
var arrayofDropdown = [] ;
$('input[name="selectedVal"]:checked').each(function() {
   arrayofDropdown.push(this.value);
});
console.log(arrayofDropdown);
e.stopPropagation();
});

$(document).on('click','.selectedVal',function(){
arrayofDropdown = [];
$('input[name="selectedVal"]:checked').each(function() {
   arrayofDropdown.push(this.value);
});
console.log(arrayofDropdown);
}); 


