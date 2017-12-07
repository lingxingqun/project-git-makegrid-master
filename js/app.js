
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
		if(row > 30 || col > 30){
			alert("请输入长宽都小于等于30的数值");
			return;
		}
		table.empty();
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

