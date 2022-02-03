var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} <span>({{file_type}} {{file_size}})</span></a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();

// Load more reports
$(function(){
    $('.reports_item').hide();
    $('.reports_item').slice(0, 6).show(); 

    if( $('.reports_item').length <= 6 ){ 
        $('#load-more').hide();
    }

    $('#load-more').click(function(e){ 
        e.preventDefault();
        $('.reports_item:hidden').slice(0, 6).show();
        console.log($('.reports_item').length);

        if( $('.reports_item:hidden').length === 0 ){ 
            $('#load-more').hide();
        }
    });
});