<script>
    	 import {content} from '../../store/content'
        
         let data = JSON.parse($content)
    var skills = data?.skills?.split(',');

    
    console.log(data, 'data')
</script>

<div class="card-1 relative">
    <div class="card-1-img-holder">
        <img class='w-[7rem] card-1-img rounded-full' src={data.imageURL} alt='' />
    </div>
    <div class="card-1-text-holder">
        <h2 class="card-1-name-holder">{data.full_name}</h2>
        <p class="card-1-occupation-holder">{data.handle}</p>
        <p class="card-1-occupation-holder">{data.occupation}</p>

      <div class="card-1-skill-holder">
        {#if skills }
        {#each skills as skill}
            <div class="card-1-skill">{skill} |</div>
        {/each}
       {/if}
      </div>

      
      <p class="card-1-occupation-holder">{data.email}</p>
    </div>
</div>


