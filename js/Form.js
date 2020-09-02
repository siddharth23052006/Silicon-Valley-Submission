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
        this.name = createInput('Your Full Name');
        this.button = createButton('SUBMIT');
        //search button
        this.search;
        //back button on the create select page
        this.back1;
        //button for video links
        this.videoPage;
        //back button on the video link page
        this.back2;

        this.organs;
        this.mentalHealth;
        this.bones;
        this.heart;
        this.muscle;
        this.digestion;
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
    backFn1=()=>{
        this.email.show();
        this.age.show();
        this.gender.show();
        this.name.show();
        this.button.show();
        this.title2.show();
        this.genderTitle.show();

        this.search.hide();
        this.organs.hide();
        this.back1.hide();
        this.videoPage.hide();
    }

    backFn2=()=>{
        //videos to hide
        this.bones.hide();
        this.mentalHealth.hide();

        this.back2.hide();
        
        this.search.show();
        this.back1.show();
        this.videoPage.show();
        this.organs.show();
    }

    display(){
        
        this.title.html('Healthcare Helper');
        this.title.position(width/2-70, 5);
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
            this.back1 = createButton('BACK');
            this.back1.position(50,50);

            this.search = createButton('SUBMIT');
            this.organs = createSelect('Select the body part');

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
            this.search.position(width-120, height-60);
            this.videoPage = createButton('Click Here to See Videos Related to Avoiding Health Problems')
            this.videoPage.position(width/2-40,height/2-120)
            
            this.back1.mousePressed(()=>{
                this.backFn1();
            });

            this.videoPage.mousePressed(()=>{
                this.videoPage.hide();
                this.search.hide();
                this.organs.hide();
                this.back1.hide();
                this.back2 = createButton('BACK');
                this.back2.position(50,50);

                //videos
                this.mentalHealth = createA("https://www.youtube.com/watch?v=NQcYZplTXnQ", "Here is a video on Mental Wellness");
                this.mentalHealth.position(width/3-20,100);

                this.bones = createA("https://www.youtube.com/watch?v=R070aeGWi8Y", "Here is a video on Bone Wellness");
                this.bones.position(width/3-20,140)

                this.heart = createA("https://www.youtube.com/watch?v=5XZjdrzxPkY", "Here is a video for taking care of your Heart");
                this.heart.position(width/3-20,180);

                this.muscle = createA("https://www.youtube.com/watch?v=WTw0lHBRjAw", "Here is a video for maintaining Muscle Health");
                this.muscle.position(width/3-20,220);

                this.digestion = createA("https://www.youtube.com/watch?v=LcjxB_yO3to", "Here is a video on improving Digestive Health");
                this.digestion.position(width/3-20,260);

                this.respiration = createA("https://www.youtube.com/watch?v=SUXc_N0aAEw","Here is a video on improving Respiratory Health");
                this.respiration.position(width/3-20,300)

                this.back2.mousePressed(()=>{
                    this.backFn2();
                });
            });
        
            this.search.mousePressed(()=>{
                window.open("Search.html/?q=" + this.organs.value());
            });
        });    
    }
}
