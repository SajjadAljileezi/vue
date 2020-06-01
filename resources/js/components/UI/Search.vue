<template>
<div class="form py-5">
  <div class="container py-5">
<form >
 
<div class="row">
<div class="col-md-6 mb-3">
<h3> Listing Type </h3>
<select name="value" class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="active">Active</option>
  <option value="pending">Pending</option>
  <option value="sold">Sold</option>
</select>
</div>
<div class="col-md-6 mb-3">
<h3> Media Type </h3>
<select name="media" class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option media="printing">Printing</option>
  <option media="social">Social Media</option>
  <option media="web">Web</option>
</select>
</div>
</div>
<h3> Chose Images</h3>
  <div class="custom-file my-2">
  <input @change="onFileSelected" name="image" type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
<button @click="onUpload" class="btn btn-primary"  type="button">Submit form</button>
</form>
</div>

</div>
</template>

<script>
export default {
data(){
  return{
    selectedFile:null,

  }
},
methods:{
  onFileSelected(e){
   this.selectedFile=e.target.files[0]
  },
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name)
    axios.post('api/auth/uploadi',fd)
    .then(res=>{
     
    })
  }
}
}
</script>

