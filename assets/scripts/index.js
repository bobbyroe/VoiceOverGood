// Allow :active styles to work in your CSS on a page in Mobile Safari:
document.addEventListener('touchstart', function () {}, true);

// Expander toggle
$('.expander-toggle').click(function () {
  if ($(this).attr('aria-expanded') == 'false') {
    $(this)
      .attr('aria-expanded', 'true')
      .next('.expander-descriptive-text')
      .addClass('visible')
      .attr('aria-hidden', 'false');
  } else if ($(this).attr('aria-expanded') == 'true') {
    $(this)
      .attr('aria-expanded', 'false')
      .next('.expander-descriptive-text')
      .removeClass('visible')
      .attr('aria-hidden', 'true');
  }
});

$("[name='expanderList']").on('change', function () {
  $("[name='expanderList']").not(this).prop('checked', false);
  $(this).prop('checked', true);
});

$('#show-password').on('change', function () {
  if ($(this).is(':checked')) {
    $('#password').attr('type', 'text');
  } else if ($(this).is(':not(:checked)')) {
    $('#password').attr('type', 'password');
  }
});

$('#effectiveDatePicker').on('change', function () {
  $(this).attr('aria-disabled', 'false');
  $('#radioBravoEffectiveDate').prop('checked', true);
});

$("[name='effectiveDateAlpha']").on('change', function () {
  if ($('#radioBravoEffectiveDate').is(':checked')) {
    $('#effectiveDatePicker').attr('aria-disabled', 'true');
  } else if ($('#radioBravoEffectiveDate').is(':not(:checked)')) {
    $('#effectiveDatePicker').attr('aria-disabled', 'false');
  }
});

$('#radioBravoEffectiveDate')
  .next('label')
  .click(function () {
    setTimeout(function () {
      if ($('#radioBravoEffectiveDate').is(':checked')) {
        $('#effectiveDatePicker').focus();
      }
    }, 25);
  });

$('#checkboxAlphaEffectiveDate').on('change', function () {
  if ($(this).is(':checked')) {
    $('#effectiveDatePickerBravo').attr('disabled', 'disabled').attr('aria-disabled', 'false');
  } else {
    $('#effectiveDatePickerBravo').removeAttr('disabled').attr('aria-disabled', 'true');
  }
});
