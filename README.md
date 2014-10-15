#jQuery Curtail

##Overview
jQuery Curtail truncates extended text or div content. A link will be appended inplace of the truncated content that will act as a show/hide toggle.

##Options

###More

This sets the name of the button that opens your content. By Default the more option is set to "Read More". You can change this name to anything you would like. In the example below we are changing the default "Read More" to "Continue".

#####Example:

$('.myClass').curtail({more:"Continue"})


###Less

This sets the name of the button that closes your content. By Default the less option is set to "Read Less". You can change this name to anything you would like. In the example below we are changing the default "Read Less" to "Hide".

#####Example:

$('.myClass').curtail({less:"Hide"})

###Characters (paragrah setup only)

Characters is where you set the number of characters shown before "...Read More" is appended. By default this number is 150. In the example below we are changing the default characters to "180" this will add 30 more characters that are not hidden when it is closed.

#####Example:
$('p.myClass').curtail({characters:"180"})

###Start Height (DIV setup only)

The start height is where you set the height of you div when it is closed. The higher the number the more internal content will be visable and the smaller the number less internal content will be shown. By default this number is 50. In the example below we are changing the default closed height from "50" to "100" this will alow us to see double the content we can now without having to click read more.

#####Example:
$('div.myClass').curtail({start_height:"100"})
