 // template_9w2t5s4
 // service_cls072q
 // VI3ilk0cJssoANQII

 function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`)
    loading.classList += ` modal__overlay--visible`;
    emailjs
      .sendForm(
        `service_cls072q`,
        `template_9w2t5s4`,
        event.target,
        `VI3ilk0cJssoANQII`
    ).then( () => { 
        loading.classList.remove(`modal__overlay--visible`);
        success.classList += ` modal__overlay--visible`; 
    }).catch(() => {
        loading.classList.remove(`modal__overlay--visible`);
        alert(
          "The email service is temporarily unavailable. Please contact me directly at keli.tucker@yahoo.com"
        );
    })
}