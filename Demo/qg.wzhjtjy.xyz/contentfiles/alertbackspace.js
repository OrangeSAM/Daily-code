    if (window.history && window.history.pushState) {
    $(window).on('popstate', function () {
      var hashLocation = location.hash;
      var hashSplit = hashLocation.split("#!/");
      var hashName = hashSplit[1];
      if (hashName !== '') {
        var hash = window.location.hash;
        if (hash === '') {
                  $("#myModal").css("display","block");
                $("#myModal").addClass('in');
        }
      }
    });
    window.history.pushState('forward', null, '#gzwtsr');
  }

   $(function () {
        $("#mydel").click(function () {
            $("#myModal").css("display", 'none');
        });
    })