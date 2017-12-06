// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// let hval = $('#input_height').val();
// let wval = $('#input_width').val();

// function makeGrid() {
// 	for(let i = 0; i <= hval; i++){
// 		$('#pixel_canvas').append('<tr></tr>');
// 		for(let j = 0; j <= wval ; j++){
// 			$('#pixel_canvas').find('tr').append('<td></td>');
// 		}
// 	}
// }


// for(let i = 1;i <= hval; i++){
// 	table.append('<tr></tr>');
// 	for(let j = 1;j <= wval; j++){
// 		$('tr').append('<td></td>');
// 	}
// }



// $('#button').click(function(){
// 	let row ;
// 	let col ;
// 	row = $('#input_height').val();
// 	col = $('#input_width').val();

// 	var table = $('#pixel_canvas');
// 	var flag;

// 	for(let i = 0;i < row; i++){
// 		table.append('<tr></tr>');
// 		for(let j = 0;j < col; j++){
// 			flag = $('tr')[j];
// 			table.find('tr').append('<td></td>');
// 		}
// 	}
// });

// 参考网站：https://discussions.youdaxue.com/t/--a/50455/4
// http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp
// http://www.365mini.com/page/jquery-val.htm
// https://stackoverflow.com/questions/4780670/how-to-set-background-color-in-jquery
// https://www.cnblogs.com/piercalex/archive/2013/03/30/2990679.html



var height = $('#input_height');
var width = $('#input_width');
var table = $('#pixel_canvas');
var submit = $('#button');
var color = $('#colorPicker');
var row,col,flag,rgb,k=0;


function makeGrid(){
	submit.on('click',function(){
		row = height.val();
		col = width.val();
		for(let i=0;i<row;i++){
			table.append('<tr></tr>');
			for(let j=0;j<col;j++){
				table.find('tr').eq(i).append('<td></td>');
			}
		}
		$('td').css('background-color','#fff');
	});
}
$(makeGrid());

table.on('click','td',function(){
	rgb = color.val();
	$(this).css('background-color',rgb);
});

