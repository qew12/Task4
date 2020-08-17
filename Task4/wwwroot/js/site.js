$('#fullCheckBox').click(function () {
    if ($(this).is(':checked')) {
        $('input:checkbox').prop('checked', true);
    } else {
        $('input:checkbox').prop('checked', false);
    }
});

$('input:checkbox').click(function () {
    if ($(this).is(':checked')) { }
    else { $('#fullCheckBox').prop('checked', false); }
});

var id = [];
function CheckedID()
{
    var object = $('td input[type ="checkbox"]:checked');

    $.each(object, function (index, value) {
        console.log('Индекс:' + index + '; Значение' + value.id);
        id[index] = value.id;
    });

}

$('#buttonDelete').click(function () {
    CheckedID();
    $.ajax({
        url: '/Users/Delete',
        type: 'POST',
        data: { id: id },
        success: function (result) {
            if (result == 1) {
                window.location = '/Users/';
            }
            else {
                alert("Error delete");
            }
        }
    });
});

$('#buttonBlock').click(function () {
    CheckedID();
    $.ajax({
        url: '/Users/EditStatus',
        type: 'POST',
        data: { id: id, block: "Block" },
        success: function (result) {
            if (result == 1) {
                window.location = '/Users/';
            }
            else {
                alert("Error status");
            }
        }
    });
});

$('#buttonUnblock').click(function () {
    CheckedID();
    $.ajax({
        url: '/Users/EditStatus',
        type: 'POST',
        data: { id: id, block: "Unblock" },
        success: function (result) {
            if (result == 1) {
                window.location = '/Users/';
            }
            else
            {
                alert("Error status");
            }
        }
    });
});