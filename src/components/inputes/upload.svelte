<script>
  let img = '';
  $:img_r =img
</script>

{img_r}
<div class="upload-btn-wrapper">
  <img src={img_r} alt=''/>
  <button class="btn">Upload a file</button>
  <input bind:value={img} type="file" name="myfile" />
</div>


<style>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>