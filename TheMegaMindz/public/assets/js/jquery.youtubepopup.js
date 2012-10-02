<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jQuery YouTube Popup Player Plugin</title>
<script src="jquery.youtubepopup_files/ga.js" async="" type="text/javascript"></script><script type="text/javascript" src="jquery.youtubepopup_files/jquery.js"></script>
<script type="text/javascript" src="jquery.youtubepopup_files/shCore.js"></script>
<script type="text/javascript" src="jquery.youtubepopup_files/shBrushJScript.js"></script>
<link href="../css/jquery.youtubepopup_files/shCore.css" rel="stylesheet" type="text/css">
<link href="../css/jquery.youtubepopup_files/shThemeDefault.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="jquery.youtubepopup_files/analytics.js"></script>
	
<script type="text/javascript">
$(function(){
	SyntaxHighlighter.all();
	analytics('lab');
});
</script>
<style type="text/css">
body {
	margin: 2px;
}
body, td, th {
	font-size: 12px;
}
</style>
<!--Google Analytics-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1115506-8']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<!--End Google Analytics-->
</head>

<body>
<div><div id="highlighter_779768" class="syntaxhighlighter  js"><div class="toolbar"><span><a href="#" class="toolbar_item command_help help">?</a></span></div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="gutter"><div class="line number1 index0 alt2">1</div><div class="line number2 index1 alt1">2</div><div class="line number3 index2 alt2">3</div><div class="line number4 index3 alt1">4</div><div class="line number5 index4 alt2">5</div><div class="line number6 index5 alt1">6</div><div class="line number7 index6 alt2">7</div><div class="line number8 index7 alt1">8</div><div class="line number9 index8 alt2">9</div><div class="line number10 index9 alt1">10</div><div class="line number11 index10 alt2">11</div><div class="line number12 index11 alt1">12</div><div class="line number13 index12 alt2">13</div><div class="line number14 index13 alt1">14</div><div class="line number15 index14 alt2">15</div><div class="line number16 index15 alt1">16</div><div class="line number17 index16 alt2">17</div><div class="line number18 index17 alt1">18</div><div class="line number19 index18 alt2">19</div><div class="line number20 index19 alt1">20</div><div class="line number21 index20 alt2">21</div><div class="line number22 index21 alt1">22</div><div class="line number23 index22 alt2">23</div><div class="line number24 index23 alt1">24</div><div class="line number25 index24 alt2">25</div><div class="line number26 index25 alt1">26</div><div class="line number27 index26 alt2">27</div><div class="line number28 index27 alt1">28</div><div class="line number29 index28 alt2">29</div><div class="line number30 index29 alt1">30</div><div class="line number31 index30 alt2">31</div><div class="line number32 index31 alt1">32</div><div class="line number33 index32 alt2">33</div><div class="line number34 index33 alt1">34</div><div class="line number35 index34 alt2">35</div><div class="line number36 index35 alt1">36</div><div class="line number37 index36 alt2">37</div><div class="line number38 index37 alt1">38</div><div class="line number39 index38 alt2">39</div><div class="line number40 index39 alt1">40</div><div class="line number41 index40 alt2">41</div><div class="line number42 index41 alt1">42</div><div class="line number43 index42 alt2">43</div><div class="line number44 index43 alt1">44</div><div class="line number45 index44 alt2">45</div><div class="line number46 index45 alt1">46</div><div class="line number47 index46 alt2">47</div><div class="line number48 index47 alt1">48</div><div class="line number49 index48 alt2">49</div><div class="line number50 index49 alt1">50</div><div class="line number51 index50 alt2">51</div><div class="line number52 index51 alt1">52</div><div class="line number53 index52 alt2">53</div><div class="line number54 index53 alt1">54</div><div class="line number55 index54 alt2">55</div><div class="line number56 index55 alt1">56</div><div class="line number57 index56 alt2">57</div><div class="line number58 index57 alt1">58</div><div class="line number59 index58 alt2">59</div><div class="line number60 index59 alt1">60</div><div class="line number61 index60 alt2">61</div><div class="line number62 index61 alt1">62</div><div class="line number63 index62 alt2">63</div><div class="line number64 index63 alt1">64</div><div class="line number65 index64 alt2">65</div><div class="line number66 index65 alt1">66</div><div class="line number67 index66 alt2">67</div><div class="line number68 index67 alt1">68</div><div class="line number69 index68 alt2">69</div><div class="line number70 index69 alt1">70</div><div class="line number71 index70 alt2">71</div><div class="line number72 index71 alt1">72</div><div class="line number73 index72 alt2">73</div><div class="line number74 index73 alt1">74</div><div class="line number75 index74 alt2">75</div><div class="line number76 index75 alt1">76</div><div class="line number77 index76 alt2">77</div><div class="line number78 index77 alt1">78</div><div class="line number79 index78 alt2">79</div><div class="line number80 index79 alt1">80</div><div class="line number81 index80 alt2">81</div><div class="line number82 index81 alt1">82</div><div class="line number83 index82 alt2">83</div><div class="line number84 index83 alt1">84</div><div class="line number85 index84 alt2">85</div><div class="line number86 index85 alt1">86</div><div class="line number87 index86 alt2">87</div><div class="line number88 index87 alt1">88</div><div class="line number89 index88 alt2">89</div><div class="line number90 index89 alt1">90</div><div class="line number91 index90 alt2">91</div><div class="line number92 index91 alt1">92</div><div class="line number93 index92 alt2">93</div><div class="line number94 index93 alt1">94</div><div class="line number95 index94 alt2">95</div><div class="line number96 index95 alt1">96</div><div class="line number97 index96 alt2">97</div><div class="line number98 index97 alt1">98</div><div class="line number99 index98 alt2">99</div><div class="line number100 index99 alt1">100</div><div class="line number101 index100 alt2">101</div><div class="line number102 index101 alt1">102</div><div class="line number103 index102 alt2">103</div><div class="line number104 index103 alt1">104</div><div class="line number105 index104 alt2">105</div><div class="line number106 index105 alt1">106</div><div class="line number107 index106 alt2">107</div><div class="line number108 index107 alt1">108</div><div class="line number109 index108 alt2">109</div><div class="line number110 index109 alt1">110</div><div class="line number111 index110 alt2">111</div><div class="line number112 index111 alt1">112</div><div class="line number113 index112 alt2">113</div><div class="line number114 index113 alt1">114</div><div class="line number115 index114 alt2">115</div><div class="line number116 index115 alt1">116</div><div class="line number117 index116 alt2">117</div></td><td class="code"><div class="container"><div class="line number1 index0 alt2"><code class="js comments">/*!</code></div><div class="line number2 index1 alt1"><code class="js spaces">&nbsp;</code><code class="js comments">* jQuery YouTube Popup Player Plugin v2.1</code></div><div class="line number3 index2 alt2"><code class="js spaces">&nbsp;</code><code class="js comments">* <a href="http://lab.abhinayrathore.com/jquery_youtube/">http://lab.abhinayrathore.com/jquery_youtube/</a></code></div><div class="line number4 index3 alt1"><code class="js spaces">&nbsp;</code><code class="js comments">* Last Updated: May 23 2012</code></div><div class="line number5 index4 alt2"><code class="js spaces">&nbsp;</code><code class="js comments">*/</code></div><div class="line number6 index5 alt1"><code class="js plain">(</code><code class="js keyword">function</code> <code class="js plain">($) {</code></div><div class="line number7 index6 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">YouTubeDialog = </code><code class="js keyword">null</code><code class="js plain">;</code></div><div class="line number8 index7 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">methods = {</code></div><div class="line number9 index8 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js comments">//initialize plugin</code></div><div class="line number10 index9 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">init: </code><code class="js keyword">function</code> <code class="js plain">(options) {</code></div><div class="line number11 index10 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">options = $.extend({}, $.fn.YouTubePopup.defaults, options);</code></div><div class="line number12 index11 alt1">&nbsp;</div><div class="line number13 index12 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js comments">// initialize YouTube Player Dialog</code></div><div class="line number14 index13 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">(YouTubeDialog == </code><code class="js keyword">null</code><code class="js plain">) {</code></div><div class="line number15 index14 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog = $(</code><code class="js string">'&lt;div&gt;&lt;/div&gt;'</code><code class="js plain">).css({ display: </code><code class="js string">'none'</code><code class="js plain">, padding: 0 });</code></div><div class="line number16 index15 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">'body'</code><code class="js plain">).append(YouTubeDialog);</code></div><div class="line number17 index16 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.dialog({ autoOpen: </code><code class="js keyword">false</code><code class="js plain">, resizable: </code><code class="js keyword">false</code><code class="js plain">, draggable: options.draggable, modal: options.modal,</code></div><div class="line number18 index17 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">close: </code><code class="js keyword">function</code> <code class="js plain">() {</code></div><div class="line number19 index18 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.html(</code><code class="js string">''</code><code class="js plain">); </code></div><div class="line number20 index19 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">".ui-dialog-titlebar"</code><code class="js plain">).show();</code></div><div class="line number21 index20 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number22 index21 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">});</code></div><div class="line number23 index22 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number24 index23 alt1">&nbsp;</div><div class="line number25 index24 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js keyword">this</code><code class="js plain">.each(</code><code class="js keyword">function</code> <code class="js plain">() {</code></div><div class="line number26 index25 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">obj = $(</code><code class="js keyword">this</code><code class="js plain">);</code></div><div class="line number27 index26 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">data = obj.data(</code><code class="js string">'YouTube'</code><code class="js plain">);</code></div><div class="line number28 index27 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">(!data) { </code><code class="js comments">//check if event is already assigned</code></div><div class="line number29 index28 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">obj.data(</code><code class="js string">'YouTube'</code><code class="js plain">, { target: obj, </code><code class="js string">'active'</code><code class="js plain">: </code><code class="js keyword">true</code> <code class="js plain">});</code></div><div class="line number30 index29 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(obj).bind(</code><code class="js string">'click.YouTubePopup'</code><code class="js plain">, </code><code class="js keyword">function</code> <code class="js plain">() {</code></div><div class="line number31 index30 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">youtubeId = options.youtubeId;</code></div><div class="line number32 index31 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">($.trim(youtubeId) == </code><code class="js string">''</code><code class="js plain">) youtubeId = obj.attr(options.idAttribute);</code></div><div class="line number33 index32 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">videoTitle = $.trim(options.title);</code></div><div class="line number34 index33 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">(videoTitle == </code><code class="js string">''</code><code class="js plain">) {</code></div><div class="line number35 index34 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">(options.useYouTubeTitle) setYouTubeTitle(youtubeId);</code></div><div class="line number36 index35 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">else</code> <code class="js plain">videoTitle = obj.attr(</code><code class="js string">'title'</code><code class="js plain">);</code></div><div class="line number37 index36 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number38 index37 alt1">&nbsp;</div><div class="line number39 index38 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js comments">//Format YouTube URL</code></div><div class="line number40 index39 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">YouTubeURL = </code><code class="js string">"<a href="http://www.youtube.com/embed/">http://www.youtube.com/embed/</a>"</code> <code class="js plain">+ youtubeId + </code><code class="js string">"?rel=0&amp;showsearch=0&amp;autohide="</code> <code class="js plain">+ options.autohide;</code></div><div class="line number41 index40 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeURL += </code><code class="js string">"&amp;autoplay="</code> <code class="js plain">+ options.autoplay + </code><code class="js string">"&amp;color1="</code> <code class="js plain">+ options.color1 + </code><code class="js string">"&amp;color2="</code> <code class="js plain">+ options.color2;</code></div><div class="line number42 index41 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeURL += </code><code class="js string">"&amp;controls="</code> <code class="js plain">+ options.controls + </code><code class="js string">"&amp;fs="</code> <code class="js plain">+ options.fullscreen + </code><code class="js string">"&amp;loop="</code> <code class="js plain">+ options.loop;</code></div><div class="line number43 index42 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeURL += </code><code class="js string">"&amp;hd="</code> <code class="js plain">+ options.hd + </code><code class="js string">"&amp;showinfo="</code> <code class="js plain">+ options.showinfo + </code><code class="js string">"&amp;color="</code> <code class="js plain">+ options.color + </code><code class="js string">"&amp;theme="</code> <code class="js plain">+ options.theme;</code></div><div class="line number44 index43 alt1">&nbsp;</div><div class="line number45 index44 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js comments">//Setup YouTube Dialog</code></div><div class="line number46 index45 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.html(getYouTubePlayer(YouTubeURL, options.width, options.height));</code></div><div class="line number47 index46 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.dialog({ </code><code class="js string">'width'</code><code class="js plain">: </code><code class="js string">'auto'</code><code class="js plain">, </code><code class="js string">'height'</code><code class="js plain">: </code><code class="js string">'auto'</code> <code class="js plain">}); </code><code class="js comments">//reset width and height</code></div><div class="line number48 index47 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.dialog({ </code><code class="js string">'minWidth'</code><code class="js plain">: options.width, </code><code class="js string">'minHeight'</code><code class="js plain">: options.height, title: videoTitle });</code></div><div class="line number49 index48 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubeDialog.dialog(</code><code class="js string">'open'</code><code class="js plain">);</code></div><div class="line number50 index49 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">".ui-widget-overlay"</code><code class="js plain">).fadeTo(</code><code class="js string">'fast'</code><code class="js plain">, options.overlayOpacity); </code><code class="js comments">//set Overlay opacity</code></div><div class="line number51 index50 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code><code class="js plain">(options.hideTitleBar &amp;&amp; options.modal){ </code><code class="js comments">//hide Title Bar (only if Modal is enabled)</code></div><div class="line number52 index51 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">".ui-dialog-titlebar"</code><code class="js plain">).hide(); </code><code class="js comments">//hide Title Bar</code></div><div class="line number53 index52 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">".ui-widget-overlay"</code><code class="js plain">).click(</code><code class="js keyword">function</code> <code class="js plain">() { YouTubeDialog.dialog(</code><code class="js string">"close"</code><code class="js plain">); }); </code><code class="js comments">//automatically assign Click event to overlay</code></div><div class="line number54 index53 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number55 index54 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code><code class="js plain">(options.clickOutsideClose &amp;&amp; options.modal){ </code><code class="js comments">//assign clickOutsideClose event only if Modal option is enabled</code></div><div class="line number56 index55 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">".ui-widget-overlay"</code><code class="js plain">).click(</code><code class="js keyword">function</code> <code class="js plain">() { YouTubeDialog.dialog(</code><code class="js string">"close"</code><code class="js plain">); }); </code><code class="js comments">//assign Click event to overlay</code></div><div class="line number57 index56 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number58 index57 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js keyword">false</code><code class="js plain">;</code></div><div class="line number59 index58 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">});</code></div><div class="line number60 index59 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number61 index60 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">});</code></div><div class="line number62 index61 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">},</code></div><div class="line number63 index62 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">destroy: </code><code class="js keyword">function</code> <code class="js plain">() {</code></div><div class="line number64 index63 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js keyword">this</code><code class="js plain">.each(</code><code class="js keyword">function</code> <code class="js plain">() {</code></div><div class="line number65 index64 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js keyword">this</code><code class="js plain">).unbind(</code><code class="js string">".YouTubePopup"</code><code class="js plain">);</code></div><div class="line number66 index65 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js keyword">this</code><code class="js plain">).removeData(</code><code class="js string">'YouTube'</code><code class="js plain">);</code></div><div class="line number67 index66 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">});</code></div><div class="line number68 index67 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number69 index68 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">};</code></div><div class="line number70 index69 alt1">&nbsp;</div><div class="line number71 index70 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">function</code> <code class="js plain">getYouTubePlayer(URL, width, height) {</code></div><div class="line number72 index71 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">YouTubePlayer = </code><code class="js string">'&lt;iframe title="YouTube video player" style="margin:0; padding:0;" width="'</code> <code class="js plain">+ width + </code><code class="js string">'" '</code><code class="js plain">;</code></div><div class="line number73 index72 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">YouTubePlayer += </code><code class="js string">'height="'</code> <code class="js plain">+ height + </code><code class="js string">'" src="'</code> <code class="js plain">+ URL + </code><code class="js string">'" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;'</code><code class="js plain">;</code></div><div class="line number74 index73 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js plain">YouTubePlayer;</code></div><div class="line number75 index74 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number76 index75 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div><div class="line number77 index76 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">function</code> <code class="js plain">setYouTubeTitle(id) {</code></div><div class="line number78 index77 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">var</code> <code class="js plain">url = </code><code class="js string">"<a href="https://gdata.youtube.com/feeds/api/videos/">https://gdata.youtube.com/feeds/api/videos/</a>"</code> <code class="js plain">+ id + </code><code class="js string">"?v=2&amp;alt=json"</code><code class="js plain">;</code></div><div class="line number79 index78 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$.ajax({ url: url, dataType: </code><code class="js string">'jsonp'</code><code class="js plain">, cache: </code><code class="js keyword">true</code><code class="js plain">, success: </code><code class="js keyword">function</code><code class="js plain">(data){ YouTubeDialog.dialog({ title: data.entry.title.$t }); } });</code></div><div class="line number80 index79 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number81 index80 alt2">&nbsp;</div><div class="line number82 index81 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$.fn.YouTubePopup = </code><code class="js keyword">function</code> <code class="js plain">(method) {</code></div><div class="line number83 index82 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">if</code> <code class="js plain">(methods[method]) {</code></div><div class="line number84 index83 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js plain">methods[method].apply(</code><code class="js keyword">this</code><code class="js plain">, Array.prototype.slice.call(arguments, 1));</code></div><div class="line number85 index84 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">} </code><code class="js keyword">else</code> <code class="js keyword">if</code> <code class="js plain">(</code><code class="js keyword">typeof</code> <code class="js plain">method === </code><code class="js string">'object'</code> <code class="js plain">|| !method) {</code></div><div class="line number86 index85 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js keyword">return</code> <code class="js plain">methods.init.apply(</code><code class="js keyword">this</code><code class="js plain">, arguments);</code></div><div class="line number87 index86 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">} </code><code class="js keyword">else</code> <code class="js plain">{</code></div><div class="line number88 index87 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$.error(</code><code class="js string">'Method '</code> <code class="js plain">+ method + </code><code class="js string">' does not exist on jQuery.YouTubePopup'</code><code class="js plain">);</code></div><div class="line number89 index88 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">}</code></div><div class="line number90 index89 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">};</code></div><div class="line number91 index90 alt2">&nbsp;</div><div class="line number92 index91 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js comments">//default configuration</code></div><div class="line number93 index92 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$.fn.YouTubePopup.defaults = {</code></div><div class="line number94 index93 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'youtubeId'</code><code class="js plain">: </code><code class="js string">''</code><code class="js plain">,</code></div><div class="line number95 index94 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'title'</code><code class="js plain">: </code><code class="js string">''</code><code class="js plain">,</code></div><div class="line number96 index95 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'useYouTubeTitle'</code><code class="js plain">: </code><code class="js keyword">true</code><code class="js plain">,</code></div><div class="line number97 index96 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'idAttribute'</code><code class="js plain">: </code><code class="js string">'rel'</code><code class="js plain">,</code></div><div class="line number98 index97 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'draggable'</code><code class="js plain">: </code><code class="js keyword">false</code><code class="js plain">,</code></div><div class="line number99 index98 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'modal'</code><code class="js plain">: </code><code class="js keyword">true</code><code class="js plain">,</code></div><div class="line number100 index99 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'width'</code><code class="js plain">: 640,</code></div><div class="line number101 index100 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'height'</code><code class="js plain">: 480,</code></div><div class="line number102 index101 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'hideTitleBar'</code><code class="js plain">: </code><code class="js keyword">false</code><code class="js plain">,</code></div><div class="line number103 index102 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'clickOutsideClose'</code><code class="js plain">: </code><code class="js keyword">false</code><code class="js plain">,</code></div><div class="line number104 index103 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'overlayOpacity'</code><code class="js plain">: 0.5,</code></div><div class="line number105 index104 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'autohide'</code><code class="js plain">: 2,</code></div><div class="line number106 index105 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'autoplay'</code><code class="js plain">: 1,</code></div><div class="line number107 index106 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'color'</code><code class="js plain">: </code><code class="js string">'red'</code><code class="js plain">,</code></div><div class="line number108 index107 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'color1'</code><code class="js plain">: </code><code class="js string">'FFFFFF'</code><code class="js plain">,</code></div><div class="line number109 index108 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'color2'</code><code class="js plain">: </code><code class="js string">'FFFFFF'</code><code class="js plain">,</code></div><div class="line number110 index109 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'controls'</code><code class="js plain">: 1,</code></div><div class="line number111 index110 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'fullscreen'</code><code class="js plain">: 1,</code></div><div class="line number112 index111 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'loop'</code><code class="js plain">: 0,</code></div><div class="line number113 index112 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'hd'</code><code class="js plain">: 1,</code></div><div class="line number114 index113 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'showinfo'</code><code class="js plain">: 0,</code></div><div class="line number115 index114 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js string">'theme'</code><code class="js plain">: </code><code class="js string">'light'</code></div><div class="line number116 index115 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">};</code></div><div class="line number117 index116 alt2"><code class="js plain">})(jQuery);</code></div></div></td></tr></tbody></table></div></div>


</body></html>