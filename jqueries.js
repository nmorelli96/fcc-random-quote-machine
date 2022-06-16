$(document).ready(function () {
  $("#liveBG").click(function () {
    let check = $(this).prop('checked');
    if (check == true) {
      $("#background").get(0).play();
    }
    else {
      $("#background").get(0).pause();
    }

    console.log($("#liveBG").prop('checked'));
    console.log($("#background").prop('paused'));

  });
});