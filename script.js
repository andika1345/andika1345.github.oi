document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const jenis = document.getElementById("jenis");
  const harga = parseInt(jenis.value);
  const nama = document.getElementById("nama").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);

  if (!jenis.value || !nama || jumlah <= 0) {
    alert("Mohon lengkapi data pemesanan!");
    return;
  }

  const total = harga * jumlah;
  document.getElementById("result").innerHTML =
    "Terima kasih, " + nama + "!<br>" +
    "Pesanan: " + jenis.options[jenis.selectedIndex].text + "<br>" +
    "Jumlah: " + jumlah + "<br>" +
    "Total: Rp" + total.toLocaleString("id-ID");
});


snap.pay('TRANSACTION_TOKEN', {
  onSuccess: function(result){ console.log('success:', result); },
  onPending: function(result){ console.log('pending:', result); },
  onError: function(result){ console.log('error:', result); },
  onClose: function(){ console.log('customer closed the popup'); }
});
