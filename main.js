const questions = [
        "Do you often feel like a phone running on 1% battery… but no charger in sight? (WHO: Chronic stress drains mental health.)",
        "Is your sleep schedule more chaotic than a suspense thriller—too much one day, too little the next? (NIMH: Sleep disturbances are linked to anxiety and depression.)",
        "Ever feel like your emotions are on airplane mode—numb, disconnected, or just “meh”? (APA: Emotional numbness is a sign of depression.)",
        "Have you stopped enjoying things that used to make you happy, like hobbies, music, or even memes? (Mayo Clinic: Losing interest in activities is a key symptom of mental health struggles.)",
        "Do your thoughts wander so much that even Google Maps couldn’t track your focus? (Harvard Medical School: Difficulty concentrating is a common sign of stress and anxiety.)",
        "Does your body send weird distress signals like unexplained headaches, stomach issues, or random fatigue? (WHO & NIMHANS: Mental stress often shows up as physical symptoms.)",
        "Do you feel like your social battery dies faster than an old smartphone? (Mental Health Foundation: Social withdrawal is a warning sign of declining mental health.)",
        "Do you have a mini heart attack over small things, like a delayed text or an unread email? (NIMH & IPS: Excessive worry and panic attacks can indicate anxiety disorders.)",
        "Is your inner voice more like a strict teacher than a supportive friend? (APA: Negative self-talk and self-doubt are closely linked to depression and anxiety.)",
        "Have you ever had thoughts like, “The world would be better off without me” or “I just want to disappear”? (WHO & Live Love Laugh Foundation: Suicidal thoughts require immediate attention.)"
]
const d = new Date();
let year = parseInt(d.getFullYear());

var info = [{name:0}, {country:0},{email:0},{dob:0}, {weight:0},{height:0}]

var rate=[
    {
        "Mental_Status": "🌟 Mentally Strong & Thriving", 
        "Action": "Keep doing what you're doing! Stay mindful of self-care."
    },
    {
        "Mental_Status": ["⚠️ Mild Stress Zone"], 
        "Action": "You’re doing okay, but take time for self-care and stress relief!"
    },
    {
        "Mental_Status": "❗ Warning Signs", 
        "Action": "Time to slow down and check in with yourself. Seeking professional support may help."
    },
    {
        "Mental_Status": "🚨 Critical Mental Health Alert!", 
        "Action": "Reach out for help ASAP. You’re not alone—support is available."
    }
]

var value = 1;
var rating = 0;


function show() {
    document.getElementById("data").style.display = "flex";
    document.getElementById("wel").style.display = "none";
}
function popup() {
    document.getElementById("Popup").classList.toggle("show");
    document.getElementById("wel").style.display = "none";
}

function data(){
    
    info[0].name = document.getElementById("name").value;
    info[1].country = document.getElementById("country").value;
    info[2].email = document.getElementById("email").value;
    info[3].dob = document.getElementById("dob").value;
    info[4].weight = document.getElementById("weight").value;
    info[5].height = document.getElementById("height").value;
    
    document.getElementById("data").style.display = "none";
    document.getElementById("question").style.display = "flex";

}

function QNS(){
    if(value==10){
        document.getElementById("question").style.display = "none";
        document.getElementById("results").style.display = "flex";
        rat();
        dtls();
    }
    if(value==9){
        document.getElementById("submit").value = "Submit";
    }
    document.getElementById("c").textContent = value+1+" Out of 10";
    document.getElementById("qs").textContent = questions[value];
    console.log(value)
    value+=1;

    var rate = document.querySelector('input[name="rating"]:checked').value;
    rating = rating+parseInt(rate);
    console.log(rating);
}
function rated(r){
    let userName = info[0].name;
    let userEmail = info[2].email;
    let userResult = ""+r;

    emailjs.send("service_8hxqre7", "template_f2ak4xa", {
        user_name: userName,
        user_email: userEmail,
        user_result: userResult
    }).then(function(response) {
        alert("Email sent successfully!");
    console.log("Your report is sent in your Email successfully");
    }, function(error) {
        alert("Failed to send email: " + JSON.stringify(error));
    });

}
function rat(){
    var x;
    if(rating<=20){
        document.getElementById("mental_status").textContent = "Your Mental Status: "+rate[0].Mental_Status;
        document.getElementById("action").textContent = "What to do: "+rate[0].Action;
        x = "Your Mental Status: "+rate[0].Mental_Status+'\n'+"What to do: "+rate[0].Action;
        rated(x);
        console.log(info)
    }
    else if(rating>=21 && rating<=30){
        document.getElementById("mental_status").textContent = "Your Mental Status: "+rate[1].Mental_Status;
        document.getElementById("action").textContent = "What to do: "+rate[1].Action;
        x = "Your Mental Status: "+rate[1].Mental_Status+'\n'+"What to do: "+rate[1].Action;
        rated(x);
        console.log(info)
    }
    else if(rating>=31 && rating<=40){
        document.getElementById("mental_status").textContent = "Your Mental Status: "+rate[2].Mental_Status;
        document.getElementById("action").textContent = "What to do: "+rate[2].Action;
        x = "Your Mental Status: "+rate[2].Mental_Status+'\n'+"What to do: "+rate[2].Action;
        rated(x);
        console.log(info)
    }
    else if(rating>=41 && rating<=50){
        document.getElementById("mental_status").textContent = "Your Mental Status: "+rate[3].Mental_Status;
        document.getElementById("action").textContent = "What to do: "+rate[3].Action;
        x = "Your Mental Status: "+rate[3].Mental_Status+'\n'+"What to do: "+rate[3].Action;
        rated(x);
        console.log(info)
    }
    else{
        console.log("NO RESULTS")
    }
}
function dtls(){
    document.getElementById("rname").textContent = info[0].name;
    document.getElementById("rcountry").textContent = info[1].country;
    document.getElementById("remail").textContent = info[2].email;
    document.getElementById("rdob").textContent = info[3].dob;
    document.getElementById("rbmi").textContent ="BMI: "+ parseFloat(info[4].weight) / (parseFloat(info[5].height)*0.3048)**2;
}
