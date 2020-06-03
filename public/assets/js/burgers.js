//changes the boolean of devoured to true or false
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);

        location.reload();
      }
    );
  });

  //creates new burger and sets devoured state to true or false, depending on user choice
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
//deletes data from table based on delete button click
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
