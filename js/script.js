(function () {
    let fileInput = document.getElementById('input-file');
    let fileInputInfo = document.getElementById('input-file-info');


    fileInput.addEventListener("change", function () {
        let fullPath = fileInput.value;

        if (fullPath) {
            let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            let filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            fileInputInfo.innerHTML = filename;
            console.log(filename);
        }
    })
})();

(function($) {
    $(function() {

        $('.number, select').styler();

    });
})(jQuery);