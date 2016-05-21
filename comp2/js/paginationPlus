	$(document).ready(function(){
							var items = 5;  // number of rows to be shown, you can change it accordingly
							
							// in case user selects dropdown ends
							$('.rowsDropdown').change(function(){
							localStorage.setItem('rowsDropdown',$(this).val());
							location.reload();
							});
							
							var  rowsDropdown = 	localStorage.getItem('rowsDropdown');
							rowsDropdown = parseInt(rowsDropdown);
							
							if(rowsDropdown == 5 ||  rowsDropdown == 10 || rowsDropdown == 15 ){
							items =  rowsDropdown;
							$('.rowsDropdown').val(rowsDropdown);
							} 
							// In case user selects dropdown ends
							
							var count = $('.paginateCheck').length;
							var buttonsNeeded = Math.ceil(count/items);
							var chunk = [];
							for(i=1;i<=buttonsNeeded;i++){
							$('.appendNumButtons').append('<btn class="btn btn-special  btn-info btn-'+i+' " id=chunk_'+i+'>'+i+'</btn>');
							}
							
							$(".btn-info:first").addClass('btn-primary activeChunk').removeClass('btn-info');
							
							var  totalPages = Math.ceil(count/items);
							
							$('.counter').append('Page 1 of' +totalPages);
							

chunk_all= [] ;
chunk = [];
for(item=1;item<=count;item++){
chunk_all.push(item);
}

var createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}			

							$('.btn-special').click(function(){
														  $('.paginateCheck').hide();
														  $('.prev').removeClass('disabled');
														   $('.next').removeClass('disabled');
														  $('.btn-special').removeClass('activeChunk');
														  $('.btn-special').removeClass('btn-primary activeChunk').addClass('btn-info')
														  $(this).addClass('activeChunk').addClass('btn-primary activeChunk').removeClass('btn-info');
														  
														  var id = $(this).attr('id');
														  //var arr = eval(id);
														  var t = id.split('_');
														 
														  if(t[1] == 1){
														  $('.prev').addClass('disabled');
														  }
														  
														  if(t[1] == totalPages){
														  $('.next').addClass('disabled');
														  }
														 var r = t[1] ;
														  t = t[1] - 1;		
														  
														  $('.counter').empty();
														  $('.counter').append('Page  ' +  r + ' of '+totalPages );
														  
														  for(index = 0; index<=createGroupedArray(chunk_all,items)[t].length;index++){
														  y= createGroupedArray(chunk_all,items)[t][index] - 1;
														    $('.paginateCheck').eq(y).show();
														  }
														  
							});
							
							$('.prev').click(function(){
							$('.activeChunk').prev('.btn-special').click();
							});


							$('.next').click(function(){
							$('.activeChunk').next('.btn-special').click();
							});						

							$('.btn-special').eq(0).click();
							
							
							localStorage.setItem('rowsDropdown',' ');
							
	});		
