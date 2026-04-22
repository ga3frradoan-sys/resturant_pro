function toggleDetails(id){
  $("#" + id).toggle();
}

// إظهار الفورم
function showForm(){
  $("#formDiv").show();
}

// التحقق من المدخلات
function validateForm(){

  let name = $("#name").val();
  let account = $("#account").val();
  let phone = $("#phone").val();

  let nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
  let accountRegex = /^0\d{5}$/;
  let phoneRegex = /^09\d{8}$/;

  if(!nameRegex.test(name)){
    alert("الاسم غير صحيح");
    return false;
  }

  if(!accountRegex.test(account)){
    alert("رقم الحساب غير صحيح");
    return false;
  }

  if(!phoneRegex.test(phone)){
    alert("رقم الهاتف غير صحيح");
    return false;
  }

  // حساب الفاتورة
  let total = 0;

  $(".meal:checked").each(function(){
    total += parseInt($(this).val());
  });

  let tax = total * 0.10;
  let finalTotal = total + tax;

  alert(
    "المجموع: " + total +
    "\nالضريبة: " + tax +
    "\nالصافي: " + finalTotal
  );

  return false;
}