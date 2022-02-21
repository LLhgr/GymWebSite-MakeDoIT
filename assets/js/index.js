
class MobileNavbar
{
    constructor(btn__mobile, menu__list, menu__list__item)
    {
        this.btn__mobile = document.querySelector(btn__mobile);
        this.menu__list = document.querySelector(menu__list);
        this.menu__list__item = document.querySelectorAll(menu__list__item);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animateMenu__list__item ()
    {
        this.menu__list__item.forEach((link) =>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `menu__listFade 0.5s ease forwards 0.3s`)
        });
    }

    handleClick()
    {
        this.menu__list.classList.toggle(this.activeClass);
        this.btn__mobile.classList.toggle(this.activeClass);
        this.animateMenu__list__item();
    }

    addClickEvent()
    {
        this.btn__mobile.addEventListener("click", this.handleClick);
    }

   

    Init()
    {
        if (this.btn__mobile) 
        {
            this.addClickEvent();    
        }
        
        return this;
    }

}

const mobileNavbar = new MobileNavbar
(
    ".btn__mobile",
    ".menu__list",
    ".menu__list__item",
);

mobileNavbar.Init();