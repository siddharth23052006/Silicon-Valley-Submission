class Form{
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h2');
        this.genderTitle = createElement('h3');
        this.email = createInput('Email address');
        this.age = createInput('Age');
        this.gender = createRadio('Gender');
            this.gender.option('Male');
            this.gender.option('Female');
            this.gender.option('Other');
        this.name = createInput('Your Name');
        this.button = createButton('SUBMIT');
        this.buttonPage2;
        this.organs;
        this.wellnessText;
        this.wellnessLink;
    }

    hide(){
        this.email.hide();
        this.age.hide();
        this.gender.hide();
        this.name.hide();
        this.button.hide();
        this.title2.hide();
        this.genderTitle.hide();
    }

    display(){
        
        this.title.html('Healthcare App');
        this.title.position(width/2-45, 5);
        this.title2.html('Fill the following details to proceed');
        this.title2.position(width/2-120, 70);

        this.name.position(width/2-30,200);
        this.age.position(width/2-30,230);
        this.email.position(width/2-30,260);

        this.gender.position(width/2-30,height/2-20);
        this.genderTitle.html('Your Gender:');
        this.genderTitle.position(width/2-30,height/2-60);

        this.button.position(width-120, height-60);

        this.button.mousePressed(()=>{

            this.buttonPage2 = createButton('SUBMIT');
            this.organs = createSelect('Select the body part');
            this.wellnessText = createElement('h2');
            this.wellnessText.html("Here is a video on mental wellness.");
            this.wellnessText.position(windowWidth/2-30,windowHeight/2-20);

            this.wellnessLink = createA("https://www.youtube.com/watch?v=NQcYZplTXnQ", "Mental wellness.")
            this.wellnessLink.position(windowWidth/2-30, windowHeight/2+30);

            this.hide();
            
            user.name = this.name.value();
            user.email = this.email.value();
            user.age = this.age.value();
            user.gender = this.gender.value();

            user.index++;
            user.update(this.name.value());
                this.organs.option('Select the part which you are having issues with');
                this.organs.option('TREATMENT FOR MENTAL HEALTH ISSUES');
                this.organs.option('Treatment for Bone Problems');
                this.organs.option('Treatment for Joint Problems');
                this.organs.option('Treatment for Ligament Issues');
                this.organs.option('Treatment for Muscular Problems');
                this.organs.option('Treatment for Tendon Issues');
                this.organs.option('Treatment for Tooth Problems');
                this.organs.option('Treatment for Tongue Problems');
                this.organs.option('Treatment for Salivary Glands Problems');
                this.organs.option('Treatment for Stomach Problems');
                this.organs.option('Treatment for Intestinal issues');
                this.organs.option('Treatment for Liver Problems');
                this.organs.option('Treatment for Gallbladder Problems');
                this.organs.option('Treatment for Pancreatic Problems');
                this.organs.option('Treatment for Anal canal and anus Issues');
                this.organs.option('Treatment for Blood Problems');
                this.organs.option('Treatment for Respiratory Tract Issues');
                this.organs.option('Treatment for Urinary Tract Issues');
                this.organs.option('Treatment for Circulatory System Issues');
                this.organs.option('Treatment for Heart Issues');
                this.organs.option('Treatment for Brain-Related Issues');
                this.organs.option('Treatment for Spinal Issues');
                this.organs.option('Treatment for Eye Related problems');
                this.organs.option('Treatment for Ear Related problems');
                this.organs.option('Treatment for Skin Related problems')
            this.organs.position(width/2-40,150);
            this.buttonPage2.position(width-120, height-60);
        
            this.buttonPage2.mousePressed(()=>{
                window.open("Search.html/?q=" + this.organs.value());
            });
        });    
    }
}
