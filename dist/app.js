<script>
  document.getElementById('toggle').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('digital').style.display = 'none';
      document.getElementById('film').style.display = 'block';
    } else {
      document.getElementById('digital').style.display = 'block';
      document.getElementById('film').style.display = 'none';
    }
  });
</script>