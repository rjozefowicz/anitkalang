
		function execute(code){
			var memory = [0];
			var pointer = 0;
			var output = '';
			var conStmtStack = [];
			var tokens = code.split(" ");
			
			for(var i=0;i<tokens.length;++i)
			{
				if(tokens[i]==='Anitka')
				{
					pointer++;
					if(memory[pointer]===undefined)
					{
						memory.push(0);
					}
				}
				else if(tokens[i]==='anitkA')
				{
					if(pointer!==0)
					{
						pointer--;
					}
				}
				else if(tokens[i]==='ANITKA')
				{
					var val = String.fromCharCode(memory[pointer]);
					if(val==='\n')
					{
						val='<br/>';
					}
					output+=val;
				}
				else if(tokens[i]==='aNiTkA')
				{
					output+=memory[pointer];
				}
				else if(tokens[i]==='aNitka')
				{
					memory[pointer]++;
				}
				else if(tokens[i]==='anitKa')
				{
					memory[pointer]--;
				}
				else if(tokens[i]==='anItka')
				{
					var val = prompt('Please enter a integer value',0);
					if(!isNaN(val))
					{
						memory[pointer]=val;
					}
					else
					{
						alert('Must be integer value');
					}
				}
				else if(tokens[i]==='anITka')
				{
					var val = prompt('Please enter a character value','A');
					if(val!==null && val.length===1)
					{
						memory[pointer]=val.charCodeAt();
					}
					else
					{
						alert('Just a single character');
					}
				}
				else if(tokens[i]==='anITKa')
				{
					var val = prompt('Please enter a string value','String');

					for(var j=0;j<val.length;++j)
					{
						memory[pointer]=val.charAt(j).charCodeAt();
						pointer++;
					}
				}
				else if(tokens[i]==='aniTkA')
				{
					memory = [0];
				}
				else if(tokens[i]==='anitka')
				{
					pointer = 0;
				}
				else if(tokens[i]==='ANitka')
				{
					if(pointer>=2)
					{
						var x1 = memory[pointer-1];
						var x2 = memory[pointer-2];
						memory[pointer] = parseInt(x1)+parseInt(x2);
					}
				}
				else if(tokens[i]==='ANItka')
				{
					if(pointer>=2)
					{
						var x1 = memory[pointer-1];
						var x2 = memory[pointer-2];
						memory[pointer] = parseInt(x1)-parseInt(x2);
					}
				}
				else if(tokens[i]==='ANITka')
				{
					if(pointer>=2)
					{
						var x1 = memory[pointer-1];
						var x2 = memory[pointer-2];
						memory[pointer] = parseInt(x1)*parseInt(x2);
					}
				}
				else if(tokens[i]==='ANITKa')
				{
					if(pointer>=2)
					{
						var x1 = memory[pointer-1];
						var x2 = memory[pointer-2];
						memory[pointer] = parseInt(parseInt(x1)/parseInt(x2));
					}
				}
				else if(tokens[i]==='ANItkA')
				{
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ff<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;f<br/>';
					output+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br/>';
				}
				else if(tokens[i]==='aniTKA')
				{
					output+='		&nbsp;&nbsp;***<br/>';
					output+='&nbsp;		&nbsp;&nbsp;**&nbsp;**<br/>';
					output+='		&nbsp;**&nbsp;&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;**&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****<br/>';
					output+='		&nbsp;**&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;****<br/>';
					output+='		&nbsp;**&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;&nbsp;**&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;**&nbsp;&nbsp;***&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;**&nbsp;&nbsp;**&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;*&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;@&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;*&nbsp;&nbsp;&nbsp;\__/&nbsp;\__/&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br/>';
					output+='		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<br/>';
					output+='		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*****<br/>';
				}
				else if(tokens[i]==='ANItKA')
				{
					//find ANiTKA
					var ANiTKA_pos = tokens.indexOf('ANiTKA',i+1);
					if(i+2>memory.length && ANiTKA_pos!==-1)
					{
						var x1 = memory[pointer];
						var x2 = memory[pointer+1];
						if(x1!==x2)
						{
							i=ANiTKA_pos;
						}
						conStmtStack.push({type:'IF'});
					}
					else
					{
						return 'Wrong syntax. No termination opcode ANiTKA';
					}
				}
				else if(tokens[i]==='ANITkA')
				{
					//find ANiTKA
					var ANiTKA_pos = tokens.indexOf('ANiTKA',i+1);
					if(i+1>memory.length && ANiTKA_pos!==-1)
					{

						var x = memory[pointer];
						if(x===0)
						{
							if(tokens.length===ANiTKA_pos)
							{
								break;
							}
							i=ANiTKA_pos;
						}
						conStmtStack.push({type:'LOOP', pos:i});
					}
					else
					{
						return 'No ANiTKA opcode after ANITkA opcode';
					}
				}
				else if(tokens[i]==='ANiTKA')
				{
					//for if statement no action
					var x = conStmtStack.pop();
					if(x.type==='LOOP')
					{
						i=x.pos-1;
					}
				}
				else if(tokens[i]==='aNITKA')
				{
					break;
				}
			
			}

			return output;
			
		}


