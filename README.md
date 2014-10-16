#jQuery Curtail

jQuery Curtail truncates extended text or div content and appends a toggle link in its place to allow a user to reveal or hide the truncated content.

##How to Use
- Requires jQuery (minimaly jQuery 1.2.6)
- Include curtail.js
- Include curtail.css

=> Use this HTML markup and include jquery, curtail.min.js, and curtail.css:

```html
    <head>
    <!- Link CSS ->
	 <link href="css/curtail.css" rel="stylesheet">
    </head>
    
    <body>

    <!- For DIV Setup ->
	<div class="curtail"> 
 
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
      urna blandit, volutpat arcu ac, commodo sapien. Quisque at lacus nisl. 
      Aenean vitae lobortis purus. Proin eget vehicula nulla. Sed tincidunt quam 
      justo, non rutrum arcu pharetra vel. Nulla eget leo ut urna rutrum accumsan. 
      Vestibulum varius commodo risus, a ornare purus fringilla ut. Praesent feugiat 
      massa bibendum, porta magna ut, tempor nunc. Duis sit amet pretium libero. 
      In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Aliquam ut urna blandit, volutpat arcu ac, commodo sapien.
      Quisque at lacus nisl.Aenean vitae lobortis purus. Proin eget vehicula nulla. 
      Sed tincidunt quam justo, non rutrum arcu pharetra vel. Nulla eget leo ut 
      urna rutrum accumsan. Vestibulum varius commodo risus, a ornare purus fringilla 
      ut. Praesent feugiat massa bibendum, porta magna ut, tempor nunc. Duis sit amet
      pretium libero. In hac habitasse platea dictumst. 
      </p> 
 
 
      <p> 
      Consectetur adipiscing elit. Aliquam ut urna blandit, volutpat arcu ac, commodo sapien.
      Quisque at lacus nisl. Aenean vitae lobortis purus. Proin eget vehicula nulla. 
      Sed tincidunt quam justo, non rutrum arcu pharetra vel. Nulla eget leo ut urna rutrum 
      accumsan. Vestibulum varius commodo risus, a ornare purus fringilla ut. Praesent feugiat 
      massa bibendum, porta magna ut, tempor nunc. Duis sit amet pretium libero. In hac 
      habitasse platea dictumst.
      </p> 
 
	 </div> 
 
 	<!- For Paragraph Setup ->
     <p class="curtail"> 
 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut urna blandit, volutpat 
      arcu ac, commodo sapien. Quisque at lacus nisl. Aenean vitae lobortis purus. Proin eget 
      vehicula nulla. Sed tincidunt quam justo, non rutrum arcu pharetra vel. Nulla eget leo ut 
      urna rutrum accumsan. Vestibulum varius commodo risus, a ornare purus fringilla ut. 
      Praesent feugiat massa bibendum, porta magna ut, tempor nunc. Duis sit amet pretium libero. 
      In hac habitasse platea dictumst.
 
     </p>

     <!- Link jQuery ->
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
 	 <!- Link Curtail ->
	 <script src="js/curtail.min.js" type="text/javascript" charset="utf-8"></script>

	 </body>
```


##Options

###More

This sets the name of the button that opens your content. By Default the more option is set to "Read More". You can change this name to anything you would like. In the example below we are changing the default "Read More" to "Continue".

#####Example:

$('.myClass').curtail({more:"Continue"})


###Less

This sets the name of the button that closes your content. By Default the less option is set to "Read Less". You can change this name to anything you would like. In the example below we are changing the default "Read Less" to "Hide".

#####Example:

$('.myClass').curtail({less:"Hide"})

###Characters (paragraph setup only)

Characters is where you set the number of characters shown before "...Read More" is appended. By default this number is 150. In the example below we are changing the default characters to "180" this will add 30 more characters that are not hidden when it is closed.

#####Example:
$('p.myClass').curtail({characters:"180"})

###Start Height (DIV setup only)

The start height is where you set the height of you div when it is closed. The higher the number the more internal content will be visible and the smaller the number less internal content will be shown. By default this number is 50. In the example below we are changing the default closed height from "50" to "100" this will allow us to see double the content we can now without having to click read more.

#####Example:
$('div.myClass').curtail({start_height:"100"})

##Demo
[Curtail Demo Site](www.jeffreyjpoland.com/jquery/curtail)
