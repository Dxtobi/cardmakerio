/** @type {import('./$types').Actions} */


  

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const full_name = data.get('full_name');
        const skills = data.get('skills');
        const shortURL = data.get('shortURL');
        const imageURL = data.get('imageURL');
        const occupation = data.get('occupation');
        const email = data.get('email');
        const handle = data.get('handle');
     
        const allData = {
            full_name,
            skills,
            shortURL,
            imageURL,
            occupation,
            email,
            handle
        }
        try {
            return {
                success: true,
                data: allData,
            };
        } catch (error) {
            console.log(error)
        }
        //
      },
  };