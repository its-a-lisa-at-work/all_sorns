$( function () {
   // Add .agency-separator to agency pipe separator
  $(".agency-names").html(function(_, html){
    return html.replace("|","<span class='agency-separator'>|</span>");
  });

  // Validate the publication date input
  $("#starting_year").on("change", publicationDateValidation)
  $("#ending_year").on("change", publicationDateValidation)

  // Deselect all buttons
  $("#sections-deselect-all, #agencies-deselect-all").on('click', function(e){
    e.preventDefault();
    parentId = e.target.parentElement.id // "sections" or "agencies"
    // uncheck the checkboxes, fire the change event
    $(`#sorn-${parentId} input:checkbox`).prop("checked", false).trigger("change")
  })

  // Listener for checkboxes
  $(".sidebar input:checkbox").on('change', function(e){
    const parentId = $(this).parent().parent().parent()[0].id; // "sections" or "agencies"
    if(this.checked) {
      addBadge(this.id, parentId);
    } else {
      removeBadge(this.id, parentId);
    }
  });

  // Listener for remove badge link
  $(document).on('click', 'a.remove-badge', function (e) {
    e.preventDefault()
    id = e.target.parentElement.id;
    removeBadge(id);
  });
});

// add filter badge and sort elements
function addBadge(id, value, parentId){
  $(id).toggle();
  // $section = $(`#active-${parentId}-filters`);
  // $container = $(`#active-${parentId}`);


  // show badges section if hidden
  // if ( $section.is(":hidden") ){
  //   $section.show();
  // }
};

function removeBadge(id, parentId){
  $(`#active-filters #${id}`).remove();

  // remove badge section if it's empty
  if ( $(`#active-${parentId}-filters .active-filter`).length == 0 ){
    $(`#active-${parentId}-filters`).hide();
  }
}

function publicationDateValidation(){
  startYear = parseInt($("#starting_year").val())
  endYear = parseInt($("#ending_year").val())
  if (startYear > endYear) {
    $("#starting_year")[0].setCustomValidity("Starting year should be earlier than the ending year.");
  } else if (startYear < "1994") {
    $("#starting_year")[0].setCustomValidity("Sorry, this tool only contains SORNs starting from 1994. Please enter a later starting year");
  } else {
    $("#starting_year")[0].setCustomValidity('');
  }
}
