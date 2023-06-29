var vp_check_mobile = window.matchMedia("(max-width:1023px)");
if(vp_check_mobile.matches)     // checks for mobile viewport
{
    console.log("Entered mobile viewport");
    // Navbar for mobiles
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const miniNav = document.getElementById('mini-nav');
    menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    });
    function mini_nav_closer()
    {
        console.log("closed the navbar");
        miniNav.style.display = 'none';
        document.getElementById("mini-nav").style.transform = "translateY(0)";
    }
    function mini_nav_opener()
    {
        console.log("Opened the navbar");
        if (miniNav.style.display === 'flex') {
        document.getElementById("mini-nav").style.transform = "translateY(-100%)";
        document.getElementById("mini-nav").style.transition = "ease 0.8s";
        setTimeout(function ()
        {
            mini_nav_closer();//reset transform property else error occurs
        },800);
        } else {
        miniNav.style.display = 'flex';
        }
    }
    // Clicking menuBtn
    menuBtn.addEventListener('click', mini_nav_opener);  

    // Feedback function mobile
    document.getElementById("feedback-click1").addEventListener("click", function()
    {
        console.log("Feedback clicked");
        document.getElementById("feedback-click1").style.display = "none";
        navbar.classList.toggle('active');
        mini_nav_closer();
        document.getElementById("inp-form").style.display = "inline";
        document.getElementById("close_btn_feedback").style.display = "block";
        document.getElementById("close_btn_feedback").addEventListener("click",function()
        {
            console.log("Feedback closed");
            console.log("inside");
            document.getElementById("feedback-click1").style.display = "inline";
            document.getElementById("inp-form").style.transform = "translateX(-500px)";
            document.getElementById("inp-form").style.transition = "ease 1s";
            setTimeout(function ()
            {
                document.getElementById("inp-form").style.display = "none";
                document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
            },500);
            document.getElementById("close_btn_feedback").style.display = "none";
        });
    });

    // About for mobiles
    for(var i=0;i<document.getElementsByClassName("ab-child").length;i++)
    {
        var temp = document.getElementsByClassName("ab-child")[i];
        if(temp.classList[0] == "initial")
        {
            console.log("Initial display of about box's txt set none");
            document.getElementById("description_about1").style.display = "none";
            document.getElementById("description_about2").style.display = "none";
            document.getElementById("description_about3").style.display = "none";
            document.getElementById("description_about4").style.display = "none";
            document.getElementById("description_about5").style.display = "none";
        }
    }
    if (window.location.pathname.includes("/index.html") || (!window.location.pathname.endsWith("/skills.html") && !window.location.pathname.endsWith("/projects.html") && !window.location.pathname.endsWith("/resources.html") && !window.location.pathname.endsWith("/about.html")))
    {
        console.log("window.location.pathname.endsWith/myportfolio"+window.location.pathname.endsWith("/myportfolio"));
        console.log("IN index.html");
        // Define a variable to store the last scroll position
        var lastScrollTop = 0;
    
        // Get the div element with class "welcome"
        const weltxt = document.querySelector(".welcome");
        const welcomeTxt = document.querySelector(".welcome-txt");
        // Add a scroll event listener to the div element
        weltxt.addEventListener('scroll', function(e) {
            e.preventDefault;

            // -> removing the class
            welcomeTxt.classList.remove("scroll");
            
            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void welcomeTxt.offsetWidth;
            
            // -> and re-adding the class
            welcomeTxt.classList.add("scroll");
        }, false);
    }
    //we hide the emoji on click, remember not to worry clicking emoji may result in varying behaviour
    if(window.location.pathname.includes("/about.html"))
    {
        console.log("In about page");
        document.getElementById("hobbies").addEventListener("click", (event) =>
        {
            console.log("hobbies clicked");
            document.getElementById("chess-queen").style.display = "none";
            document.getElementById("description_about1").style.display = "inline";
            document.addEventListener("click", function(event)
            {
                if(event.target.id !== "hobbies")
                {
                    console.log("closing hobbies");
                    document.getElementById("chess-queen").style.display = "inline";
                    document.getElementById("description_about1").style.display = "none";
                }
            });
        });
        document.getElementById("favourites").addEventListener("click", (event) =>
        {
            console.log("Favs clicked");
            document.getElementById("heart").style.display = "none";
            document.getElementById("description_about2").style.display = "inline";
            document.addEventListener("click", function(event)
            {
                if(event.target.id !== "favourites")
                {
                    console.log("closing favs");
                    document.getElementById("heart").style.display = "inline";
                    document.getElementById("description_about2").style.display = "none";
                }
            });
        });
        document.getElementById("education").addEventListener("click", (event) =>
        {
            console.log("Education clicked");
            document.getElementById("school").style.display = "none";
            document.getElementById("description_about3").style.display = "inline";
            document.addEventListener("click", function(event)
            {
                if(event.target.id !== "education")
                {
                    console.log("closing education");
                    document.getElementById("school").style.display = "inline";
                    document.getElementById("description_about3").style.display = "none";
                }
            });
        });
        document.getElementById("acheivements").addEventListener("click", (event) =>
        {
            console.log("Acheivements clicked");
            document.getElementById("trophy").style.display = "none";
            document.getElementById("description_about4").style.display = "inline";
            document.addEventListener("click", function(event)
            {
                if(event.target.id !== "acheivements")
                {
                    console.log("closing acheivements");
                    document.getElementById("trophy").style.display = "inline";
                    document.getElementById("description_about4").style.display = "none";
                }
            });
        });
        document.getElementById("strengths").addEventListener("click", (event) =>
        {
            console.log("Strengths clicked");
            document.getElementById("dumbell").style.display = "none";
            document.getElementById("description_about5").style.display = "inline";
            document.addEventListener("click", function(event)
            {
                if(event.target.id !== "strengths")
                {
                    console.log("closing strengths");
                    document.getElementById("dumbell").style.display = "inline";
                    document.getElementById("description_about5").style.display = "none";
                }
            });
        });
    }
    // Light mode and Dark mode
    document.getElementById("toggle_btn").addEventListener("click", function ()
    {
        document.getElementById("bdy").classList.toggle("light");
        if(document.getElementById("bdy").classList.contains("light"))
        {
            localStorage.setItem("classValue","light");
        }
        else{
            localStorage.removeItem("classValue","light");
        }
    });
    function initialiser_theme()
    {
        const classValue = localStorage.getItem("classValue");
        if(classValue === "light")
        {
            const container= document.getElementById("bdy");
            container.classList.add(classValue);
        }
    }
    if(window.location.pathname.includes("/skills.html"))
    {
        console.log("in skills page");
        // VanillaTilt.init(document.querySelectorAll(".skill-tab"), {
        //     max: 25,
        //     speed: 400
        // });
    }
}
else{
    console.log("In computer viewport");
    // Feedback function computer
    document.getElementById("feedback-click").addEventListener("click", function()
    {
        document.getElementById("feedback-click").style.display = "none";
        document.getElementById("inp-form").style.display = "inline";
        document.getElementById("close_btn_feedback").style.display = "inline";
        document.getElementById("close_btn_feedback").addEventListener("click",function()
        {
            console.log("inside");
            document.getElementById("feedback-click").style.display = "inline";
            document.getElementById("inp-form").style.transform = "translateX(-500px)";
            document.getElementById("inp-form").style.transition = "ease 1s";
            setTimeout(function ()
            {
                document.getElementById("inp-form").style.display = "none";
                document.getElementById("inp-form").style.transform = "translateX(0)"; // reset transform property
            },500);
            document.getElementById("close_btn_feedback").style.display = "none";
        });
    });

    if (window.location.pathname.includes("/index.html") || (!window.location.pathname.endsWith("/skills.html") && !window.location.pathname.endsWith("/projects.html") && !window.location.pathname.endsWith("/resources.html") && !window.location.pathname.endsWith("/about.html"))) 
    {
        console.log("window.location.pathname.endsWith/myportfolio"+window.location.pathname.endsWith("/myportfolio"));
        console.log("IN index.html");
        // Define a variable to store the last scroll position
        var lastScrollTop = 0;
        
        // Get the div element with class "welcome"
        const weltxt = document.querySelector(".welcome");
        const welcomeTxt = document.querySelector(".welcome-txt");
        // Add a scroll event listener to the div element
        weltxt.addEventListener('scroll', function(e) {
            e.preventDefault;
            console.log("scroll detected");
            // -> removing the class
            welcomeTxt.classList.remove("scroll");
            console.log("class scroll removed");
            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void welcomeTxt.offsetWidth;
            
            // -> and re-adding the class
            welcomeTxt.classList.add("scroll");
        }, false);
    }
    // About page
    if(window.location.pathname.includes("/about.html"))
    {
        for(var i=0;i<document.getElementsByClassName("ab-child").length;i++)
        {
            console.log("IM in1");
            var temp = document.getElementsByClassName("ab-child")[i];
            if(temp.classList[0] == "initial")
            {
                console.log("IM in");
                document.getElementById("description_about1").style.display = "none";
                document.getElementById("description_about2").style.display = "none";
                document.getElementById("description_about3").style.display = "none";
                document.getElementById("description_about4").style.display = "none";
                document.getElementById("description_about5").style.display = "none";
            }
        }
        document.getElementById("hobbies").addEventListener("mouseover", (event) =>
            {
                var temp_text = "description_about1";
                document.getElementById(temp_text).style.display = "inline";
            });
            document.getElementById("hobbies").addEventListener("mouseleave", (event) =>
            {
                var temp_text = "description_about1";
                document.getElementById(temp_text).style.display = "none";
            });
            document.getElementById("favourites").addEventListener("mouseover", (event) =>
            {
                var temp_text = "description_about2";
                document.getElementById(temp_text).style.display = "inline";
            });
            document.getElementById("favourites").addEventListener("mouseleave", (event) =>
            {
                var temp_text = "description_about2";
                document.getElementById(temp_text).style.display = "none";
            });
            document.getElementById("education").addEventListener("mouseover", (event) =>
            {
                var temp_text = "description_about3";
                document.getElementById(temp_text).style.display = "inline";
            });
            document.getElementById("education").addEventListener("mouseleave", (event) =>
            {
                var temp_text = "description_about3";
                document.getElementById(temp_text).style.display = "none";
            });
            document.getElementById("acheivements").addEventListener("mouseover", (event) =>
            {
                var temp_text = "description_about4";
                document.getElementById(temp_text).style.display = "inline";
            });
            document.getElementById("acheivements").addEventListener("mouseleave", (event) =>
            {
                var temp_text = "description_about4";
                document.getElementById(temp_text).style.display = "none";
            });
            document.getElementById("strengths").addEventListener("mouseover", (event) =>
            {
                var temp_text = "description_about5";
                document.getElementById(temp_text).style.display = "inline";
            });
            document.getElementById("strengths").addEventListener("mouseleave", (event) =>
            {
                var temp_text = "description_about5";
                document.getElementById(temp_text).style.display = "none";
            });
    }
    // Light mode and Dark mode
    document.getElementById("toggle_btn").addEventListener("click", function ()
    {
        document.getElementById("bdy").classList.toggle("light");
        if(document.getElementById("bdy").classList.contains("light"))
        {
            localStorage.setItem("classValue","light");
        }
        else{
            localStorage.removeItem("classValue","light");
        }
    });
    if(window.location.pathname.includes("/skills.html"))
    {
        console.log("in skills page");
        VanillaTilt.init(document.querySelectorAll(".skill-tab"), {
            max: 25,
            speed: 400
        });
    }
}


function initialiser_theme()
{
    const classValue = localStorage.getItem("classValue");
    if(classValue === "light")
    {
        const container= document.getElementById("bdy");
        container.classList.add(classValue);
    }
}
// Loader
var loader = document.getElementById("loader_div");
window.addEventListener("load", function ()
{
    console.log("closing the loader");
    loader.style.display = "none";
});
