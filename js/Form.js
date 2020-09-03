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
        //search createSelect
        this.organs;

        this.mentalHealth, this.bones, this.heart, this.muscle;
        this.digestion, this.dental, this.respiration, this.vision;
        this.skincare, this.generalWellness;
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
        this.digestion.hide();
        this.heart.hide();
        this.respiration.hide();
        this.dental.hide();
        this.muscle.hide();
        this.vision.hide();
        this.generalWellness.hide();
        this.skincare.hide();

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
            this.organs.position(width/2-70,150);
            this.search.position(width-120, height-60);
            this.videoPage = createButton('CLICK HERE TO SEE VIDEOS RELATED TO AVOIDING HEALTH PROBLEMS');
            this.videoPage.size(400,100);
            this.videoPage.position(width/2-115,height/2-120);
            //back button
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
                this.generalWellness = createButton("HERE IS A VIDEO TO HELP MAINTAIN GENERAL WELLNESS");
                this.generalWellness.position(width/3,100+20);
                this.generalWellness.size(400,80);
                this.generalWellness.style('color:blue');
                this.generalWellness.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=jiXT8ZZg8L8");
                });
                //console.log(this.generalWellness.size());

                this.mentalHealth = createButton("HERE IS A VIDEO ON MENTAL WELLNESS");
                this.mentalHealth.position(width/3,200+20);
                this.mentalHealth.size(400,80);
                this.mentalHealth.style('color:blue');
                this.mentalHealth.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=NQcYZplTXnQ");
                });

                this.bones = createButton("HERE IS A VIDEO ON BONE WELLNESS");
                this.bones.position(width/3,300+20);
                this.bones.size(400,80);
                this.bones.style('color:blue');
                this.bones.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=R070aeGWi8Y");
                });

                this.heart = createButton("HERE IS A VIDEO FOR TAKING CARE OF YOUR HEART");
                this.heart.position(width/3,400+20);
                this.heart.size(400,80);
                this.heart.style('color:blue');
                this.heart.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=5XZjdrzxPkY");
                });

                this.muscle = createButton("HERE IS A VIDEO FOR MAINTAINING MUSCLE HEALTH");
                this.muscle.position(width/3,500+20);
                this.muscle.size(400,80);
                this.muscle.style('color:blue');
                this.muscle.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=WTw0lHBRjAw");
                });

                this.digestion = createButton("HERE IS A VIDEO ON IMPROVING DIGESTIVE HEALTH");
                this.digestion.position(width*2/3,100+20);
                this.digestion.size(400,80);
                this.digestion.style('color:blue');
                this.digestion.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=LcjxB_yO3to");
                });

                this.respiration = createButton("HERE IS A VIDEO ON IMPROVING RESPIRATORY HEALTH");
                this.respiration.position(width*2/3,200+20);
                this.respiration.size(400,80);
                this.respiration.style('color:blue');
                this.respiration.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=SUXc_N0aAEw");
                });

                this.dental = createButton("HERE IS A VIDEO FOR GOOD DENTAL HEALTH");
                this.dental.position(width*2/3,300+20);
                this.dental.size(400,80);
                this.dental.style('color:blue');
                this.dental.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=fv-EGsNvNzc");
                });

                this.skincare = createButton("HERE IS A VIDEO FOR MAINTAINING YOUR SKIN");
                this.skincare.position(width*2/3,400+20);
                this.skincare.size(400,80);
                this.skincare.style('color:blue');
                this.skincare.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=LF6jdeZJkv");
                });

                this.vision = createButton("HERE IS A VIDEO FOR MAINTAINING YOUR VISION");
                this.vision.position(width*2/3,500+20);
                this.vision.size(400,80);
                this.vision.style('color:blue');
                this.vision.mousePressed(()=>{
                    window.open("https://www.youtube.com/watch?v=lnIvw8jio10");
                });
                //back button
                this.back2.mousePressed(()=>{
                    this.backFn2();
                });
            });
        
            this.search.mousePressed(()=>{
                window.open("/Search.html/?q=" + this.organs.value());
            });
        });    
    }
}