
<script>
    //import Upload from '../../components/inputes/upload.svelte';
    //import {goto} from '$app/navigation';
    import {content} from '../../store/content'
    const input_css ='outline-none text-gray-800 w-[100%] p-2 uppercase input-css';
    let full_name = '', occupation = '', skills = ''
    let twitter = '', email = '', facebook = '', instagram = '', button_click = ''; 
    let link_to_image = ''; 

    let done = false
 

    export let form

    $: donee = done
    if(form?.success){
         if(form.data){
            $content=JSON.stringify(form.data)
            console.log('form-data', form.data)}
       // localStorage.setItem('card-data', JSON.stringify(form.data))
        done = true
        //throw redirect(302, '/cards')
    }

</script>


{#if donee}
    <a href='/cards' class='p-4 border-gray-800 text-gray-700 border-2'> go to cards</a>
{/if}
{#if !donee}
    <div  class="flex flex-col items-center w-full justify-center gap-5">
        <form method="POST" class='flex gap-5 flex-col w-[80%]'> 
            <input class={input_css} bind:value={full_name} name='full_name' placeholder="full name"/>
            <input class={input_css} bind:value={occupation} name='occupation' placeholder="occupation"/>
            <input class={input_css} bind:value={skills} name='skills' placeholder="reactjs, sveltejs, nextjs, express, and more"/>
            <input class={input_css} bind:value={button_click} name='shortURL' placeholder="contact link"/>
            <input class={input_css} bind:value={email} name='email' placeholder="email"/>
            <input class={input_css}  name='handle' placeholder="@handle"/>
            <input class={input_css} bind:value={link_to_image} name='imageURL' placeholder="link to your profile pic"/>
            <button class='p-4 border-gray-800 text-gray-800 border-2'>CREATE CARD</button>
        </form>
    </div>
{/if}