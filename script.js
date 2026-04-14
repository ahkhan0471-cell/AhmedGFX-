<script>

// CLIENT BUTTON CLICK
function toggleClient(){
  let form = document.getElementById("clientForm");
  form.style.display = (form.style.display === "none" || form.style.display === "") 
    ? "block" 
    : "none";
}

// EDITOR BUTTON CLICK
function toggleEditor(){
  let form = document.getElementById("editorForm");
  form.style.display = (form.style.display === "none" || form.style.display === "") 
    ? "block" 
    : "none";
}

// WAIT FOR PAGE LOAD
window.onload = function(){

  // CLIENT INPUT CHECK
  const cEmail = document.getElementById("clientEmail");
  const cPass = document.getElementById("clientPass");
  const cBtn = document.getElementById("clientSend");

  function checkClient(){
    if(cEmail.value.trim() !== "" && cPass.value.trim() !== ""){
      cBtn.style.display = "block";
    } else {
      cBtn.style.display = "none";
    }
  }

  cEmail.addEventListener("input", checkClient);
  cPass.addEventListener("input", checkClient);

  // EDITOR INPUT CHECK
  const eEmail = document.getElementById("editorEmail");
  const ePass = document.getElementById("editorPass");
  const eBtn = document.getElementById("editorSend");

  function checkEditor(){
    if(eEmail.value.trim() !== "" && ePass.value.trim() !== ""){
      eBtn.style.display = "block";
    } else {
      eBtn.style.display = "none";
    }
  }

  eEmail.addEventListener("input", checkEditor);
  ePass.addEventListener("input", checkEditor);

  // SEND BUTTON CLICK
  cBtn.onclick = () => {
    alert("✅ Client request sent!");
  };

  eBtn.onclick = () => {
    alert("🚀 You joined successfully!");
  };

};

</script>