var from = GetInputConstructorValue("from", loader);
                 if(from["original"].length == 0)
                 {
                   Invalid("from" + " is empty");
                   return;
                 }
var text = GetInputConstructorValue("text", loader);
                 if(text["original"].length == 0)
                 {
                   Invalid("text" + " is empty");
                   return;
                 }
var to = GetInputConstructorValue("to", loader);
                 if(to["original"].length == 0)
                 {
                   Invalid("to" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#gtranslate_code").html())({"from": from["updated"],"text": text["updated"],"to": to["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
