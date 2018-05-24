
let letters;
let saveButton;
let textArea;
let content;
let x=0;
let y=0;
let offset = 20;

function preload()
{

letters=loadJSON('letters/data.json',gotData);
}


function gotData(data)
{
}


function setup()
{
		createCanvas(400, 400);
		background(0);
	saveButton=createButton('save').mousePressed(function(){
			saveCanvas('handwriting','.jpg');

		});

		createButton('draw').mousePressed(function(){
		background(0);
		let offset=20;
		let r=0;
		let y=0;
		for(let key in letters)
		{
			if(letters[key]==0)
			break;
			let pic=new p5.Image(20,20);
			pic.loadPixels();
			let j=0;
			for(let i=0;i<400;i++)
			{
						pic.pixels[j+0]=letters[key][i];
						pic.pixels[j+1]=letters[key][i];
						pic.pixels[j+2]=letters[key][i];
						pic.pixels[j+3]=letters[key][i];
						j=j+4;
			}
			pic.updatePixels()
			if(r*offset>=width)
			{
				y+=20;
				r=0;
			}

			image(pic,r*offset,y);
			r++;
		}
	});
	createButton('clear').mousePressed(function(){
		background(0);
	});




	textArea=select('#textArea');
	createButton('convert').mousePressed(function(){
	background(0);

	x=0;
	y=0;
	content=textArea.value();
let t=0;
let spaceFlag=0;
for(let k=0;k<content.length;k++)
{




				if(letters[content[k]]!= null)
				{
					let word="";
					let wlen=0;
					flag=0;
					if(k>=t)
					flag=1;

					while (content[t]!=' ' && t<content.length  && flag==1)
					{
						word+=content[t];
						wlen++;
						t++;
					}
					wlen*=20;
					flag=0;
					if(content[t]==' ')
					{
					t++;

				}let pic=new p5.Image(20,20);
					pic.loadPixels();
					let j=0;
					for(let i=0;i<400;i++)
					{
								pic.pixels[j+0]=letters[content[k]][i];
								pic.pixels[j+1]=letters[content[k]][i];
								pic.pixels[j+2]=letters[content[k]][i];
								pic.pixels[j+3]=letters[content[k]][i];
								j=j+4;
					}
					pic.updatePixels()
					if(x>=width || width-x<wlen)
					{
								y+=20;
								x=0;
					}

					image(pic,x,y);
					x+=offset;

				}
				else if(content[k]==' ' )
				{

				  let pic=new p5.Image(20,20);
					pic.loadPixels();
					let j=0;
					for(let i=0;i<400;i++)
					{
								pic.pixels[j+0]=0;
								pic.pixels[j+1]=0;
								pic.pixels[j+2]=0;
								pic.pixels[j+3]=0;
								j=j+4;
					}
					pic.updatePixels();

					if(x>=width)
					{
								y+=20;
								x=0;
								continue;
					}


					image(pic,x,y);
					x+=offset;

					}
					else {
						if(x>=width)
						{
									y+=20;
									x=0;
						}
						textSize(21);
							fill(255);
						text(content[k],x,y,20,20);
						x+=offset;
					}
}
});
}
