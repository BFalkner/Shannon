module ApplicationHelper
  def handlebars_include template_name
    template = IO.read File.join(Rails.root, "app/sproutcore/templates", "#{template_name}.handlebars")
    "<script type=\"text/x-handlebars\">\n  #{template}</script>".html_safe
  end
end
