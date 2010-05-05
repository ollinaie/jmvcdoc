/**
 * @tag home
 * 
 * Handles @demo logic
 */
jQuery.Controller.extend('DemoController',
/* @Static */
{ 
},
/* @Prototype */
{
    init : function() {
        var self = this;
        var height = 320, html = "", source = "";

        hljs.start();
        
        this.element.html( this.view("//jmvcdoc/views/demo/init.ejs"));

        var demoSrc = this.element.attr("data-demo-src");
        var $iframe = this.find("iframe");
		$iframe.attr("src", demoSrc);
		
        $iframe.bind("load", function(){
            var $body = $( this.contentWindow.document.body );

            self.find(".demo_content").css({"padding":"5px"});
            
            html = $body.find("#demo-html").html();
            self.find(".html_content")
              .html( "<pre><code class=\"html\"></code></pre>" )
              .find("code").text( html ).highlight();
              
            source = $body.find("#demo-source").html();
            self.find(".source_content")
              .html( "<pre><code class=\"javascript\"></code></pre>" )
              .find("code").text( source ).highlight();

            height = $body.outerHeight();
            $iframe.height( height + 50 );
            self.find(".demo_content").height( height + 50 );
        })
    },
        
    ".section click" : function(el, ev) {
        el.next().toggle("slow")
        el.find("span").toggleClass("ui-icon-triangle-1-s").toggleClass("ui-icon-triangle-1-e");
    }});