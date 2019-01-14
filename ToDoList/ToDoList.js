$(document).ready(function(){
	$('#button').on('click',addList);
	$('#listItem').on('keypress',pressEnter);
	$('#displayList').on('change','#completeItem',clickCheckbox);
	$('#displayList').on('click','#bin',removeItem);
	$('#displayList').on('click','#editText',editText);
	$('#displayList').on('click','#save',completeList);
	
	
	
	function addList(){
		var listItem=$('#listItem').val();
		if($('#listItem').val()===''){
			alert('Type in something');
		} else {
		$('#displayList').append('<li>'+'<input type="checkbox" id="completeItem"/>'+'<span id="editText">'+listItem+'</span>'+'<input type="text" id="hiddenText"><input type="button" value="save" id="save"/>'+'<input type="button" value="bin" id="bin">'+'</li>');
		$('#listItem').val("");
		}
		//$('#write').val("");
	}
	function pressEnter(e){
if(e.which===13){
			addList();
			event.preventDefault();
		}
		
			}
			function clickCheckbox(){
				$(this).parent().toggleClass('displayList');
				
			}
			
	function removeItem(){
		$(this).parent().remove();
	}
	
	function editText(){
		var pick_text=$(this).parent().find('#editText').text();
		$(this).parent().find('#hiddenText').val(pick_text);
		$(this).parent().find('#save').show();
		
		$(this).parent().find('#hiddenText').show();
		$(this).parent().find('#editText').hide();
	}
	
	function completeList(event){
		$(this).parent().find('#save').hide();
		var newText=$(this).parent().find('#hiddenText').val();
				$(this).parent().find('#hiddenText').hide();

		$(this).parent().find('#editText').text(newText);
		$(this).parent().find('#editText').show();
		
	} 
});