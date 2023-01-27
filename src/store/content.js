import { writable } from 'svelte/store'
import { browser } from "$app/environment"

// Get the value out of storage on load.

    const stored = browser? localStorage.getItem('card-data'):null
    // or localStorage.getItem('content')

export const content = writable(stored)
    

content.set((value) => {
    console.log('13-content',value)
    if (browser && !value)
    {
        console.log('15-content',value)
        localStorage.setItem('card-data', value)
    }
})
// Set the stored value or a sane default.
    

// Anytime the store changes, update the local storage value.


