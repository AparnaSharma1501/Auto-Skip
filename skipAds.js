const click =(adsClass)=>{
    const buttons = document.getElementsByClassName(adsClass)
    
    for(const button of buttons)
    {
        button.click()
        if(adsClass==="ytp-ad-skip-button-text")
        console.log("Video Ad skipped ;)")
        else
        console.log("Banner Ad skipped")
    }
}

setInterval(()=>{
   click("ytp-ad-skip-button-text")
   click("ytp-ad-overlay-close-button")
},300)

console.log("Freedom from skipping ads manually!!")

// Video Ad; "Skip Ad" or "Skip Ads" button
//"ytp-ad-skip-button-text"

// Banner Ad; "X" button
//"ytp-ad-overlay-close-button"