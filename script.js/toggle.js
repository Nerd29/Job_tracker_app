// part-1
let total = document.querySelectorAll('.total') ////seletecting all total class
///dashboard a interview r rejected count dekhanor place
let Interview = document.getElementById('Interview')
let Rejected = document.getElementById('Rejected')

// 3 tab buttons(all,interview,rejected)
const allBtn=document.getElementById('all-btn')
const interviewBtn=document.getElementById('interview-btn')
const rejectedBtn=document.getElementById('rejected-btn')

// int/rej tab 2 er moddhe interview and rejected card dekhanor jonno empty section made
const filteredSection = document.getElementById('filtered-section')


// 8 ta card er jnno var set kora
    let allCardSection=document.getElementById('all-cards')

// int/rej tab a jeshb card jabe oder jonno array making
    let interview = [];
    let rejected = [];

// initially all tab
    let currentStatus='all'


// part-2
function calculateCount(){
    let totalJobs = allCardSection.children.length;//joto card ase shobgular total

    // dash and right side a same number show korano
    for(let items of total){
        items.innerText=totalJobs;
    }
    // int/rej tab er array length
    Interview.innerText = interview.length
    Rejected.innerText = rejected.length
    
}
calculateCount()


// part-3:Toggling

//tab change kora
function toggle(id){
    // console.log('clicked')

    // removing blue bg from selecting button
    allBtn.classList.remove('bg-info')
    interviewBtn.classList.remove('bg-info')
    rejectedBtn.classList.remove('bg-info')

    // adding gray bg in all button
    allBtn.classList.add('bg-base-300')
    interviewBtn.classList.add('bg-base-300')
    rejectedBtn.classList.add('bg-base-300')

    //ekhon jekhane click kora ase
    const selected=document.getElementById(id)
    currentStatus = id;
    // Adding blue bg for selected button
    selected.classList.remove('bg-base-300')
    selected.classList.add('bg-info','text-neutral')

//part-4:Tab click korle kontate ki hobe
//clicked interview tab
    if(id=='interview-btn'){
        filteredSection.classList.remove('hidden')
        allCardSection.classList.add('hidden')
        //interview array te kono card dhukle ta show korano render func call kore
    if(interview.length)

        renderInterview()

      //na thakle no jobs available show 
    else
        defaultMode()
    }
    
    
   //rejected tab clicked(same kaj hoy int tab er moto)
     else if(id=='rejected-btn'){
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    if(rejected.length)

            renderRejected()
    else
        defaultMode()
    
    }

    //all button clicked
    else if(id=='all-btn'){
     allCardSection.classList.remove('hidden')
    filteredSection.classList.add('hidden')
    }
     
    
   
}




    const mainContainer=document.querySelector('main').addEventListener('click',function(event){
        //when interview button clicked
        if(event.target.classList.contains('interview-btn')){
            // const parentNode=event.target.parentNode.parentNode
            const parentNode =event.target.closest('.job-card')
           
        const companyName=parentNode.querySelector('.company-name').innerText
        const post=parentNode.querySelector('.post').innerText
        const condition=parentNode.querySelector('.condition').innerText
        // const status=parentNode.querySelector('.status').innerText
        const note=parentNode.querySelector('.note').innerText
        const status=parentNode.querySelector('.status')
        status.innerText='Interview'
        status.className='status btn w-[110px] px-2 btn-outline btn-success'
        // console.log(parentNode,companyName,post,condition,status,note)
        const info = {
            companyName,
            post,
            condition,
            status:'Interview',
            note
        }
        // console.log(info)
       const existense= interview.find(item=> item.post==info.post)
      

       if(!existense){
        interview.push(info)
       }
       rejected=rejected.filter(item=> item.post!=info.post)
       if(interview.length==0 && rejected.length==0){

           defaultMode()
       }

       if(currentStatus=='interview-btn'){
        // defaultMode()
            renderInterview()

       }
    //    console.log(interview)
       calculateCount()
       updateRightSideProgress()
    defaultMode()
}

        //when rejected button is clicked
       else if(event.target.classList.contains('rejected-btn')){
            // const parentNode=event.target.parentNode.parentNode
             const parentNode =event.target.closest('.job-card')
           
        const companyName=parentNode.querySelector('.company-name').innerText
        const post=parentNode.querySelector('.post').innerText
        const condition=parentNode.querySelector('.condition').innerText
        // const status=parentNode.querySelector('.status').innerText
        const note=parentNode.querySelector('.note').innerText
        const status=parentNode.querySelector('.status')
        status.innerText='Rejected'
        status.className='status btn w-[110px] px-2 btn-outline btn-error'
        // console.log(parentNode,companyName,post,condition,status,note)
        const info = {
            companyName,
            post,
            condition,
            status:'Rejected',
            note
        }
        // console.log(info)
       const existense= rejected.find(item=> item.post==info.post)
      

       if(!existense){
        rejected.push(info)
       }
       interview=interview.filter(item=> item.companyName!=info.companyName)
       if(interview.length==0 && rejected.length==0){

           defaultMode()
       }
       if(currentStatus=='rejected-btn'){

            renderRejected()
       }
    //    console.log(interview)
    calculateCount()
       updateRightSideProgress()
   
    defaultMode()
}

        else if(event.target.closest('.dlt-btn')){
    const parentNode = event.target.closest('.job-card')

    // identify card
    const post = parentNode.querySelector('.post').innerText

   
    parentNode.remove()

    interview = interview.filter(item => item.post !== post)

    rejected = rejected.filter(item => item.post !== post)

    calculateCount()

    if(currentStatus === 'interview-btn' && interview.length === 0){
        defaultMode()
    }

    if(currentStatus === 'rejected-btn' && rejected.length === 0){
        defaultMode()
    }
}
})



    //for interview section
    function renderInterview(){
        filteredSection.innerHTML = ''
        for(let item of interview){
            console.log(item)
            let newElement = document.createElement('div')
            newElement.className = 'job-card flex justify-between  bg-white shadow-10 p-[24px] mb-[16px]'
            newElement.innerHTML = ` <div class=" space-y-[20px]">
                <div>
                <p class="company-name text-[16px] text-neutral font-bold">${item.companyName}</p>
                <p  class=" post text-[12px] text-neutral/50">${item.post}</p>
            </div>
            <div>
                <p class="condition text-[12px] text-neutral/50">${item.condition}</p>
            </div>
            <div>
                <button class="status btn w-[110px] px-2">${item.status}</button>
            </div>
            <div class="note">
                <p class="text-[12px] text-neutral/50">${item.note}</p>
            </div>
            <div class="flex gap-[10px]">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
            </div>
            

            <div class="right-side">
                <button class="dlt-btn btn bg-slate-50 border-2 border-neutral-300 p-2 rounded-full"><i class="fa-regular fa-trash-can"></i></button>
            </div>`

            filteredSection.appendChild(newElement)
        }
    }

    //rejected section
    function renderRejected(){
        filteredSection.innerHTML = ''
        for(let item of rejected){
            console.log(item)
            let newElement = document.createElement('div')
            newElement.className = 'job-card flex justify-between  bg-white shadow-10 p-[24px] mb-[16px]'
            newElement.innerHTML = ` <div class=" space-y-[20px]">
                <div>
                <p class="company-name text-[16px] text-neutral font-bold">${item.companyName}</p>
                <p  class=" post text-[12px] text-neutral/50">${item.post}</p>
            </div>
            <div>
                <p class="condition text-[12px] text-neutral/50">${item.condition}</p>
            </div>
            <div>
                <button class="status btn w-[110px] px-2">${item.status}</button>
            </div>
            <div class="note">
                <p class="text-[12px] text-neutral/50">${item.note}</p>
            </div>
            <div class="flex gap-[10px]">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
            </div>
            

            <div class="right-side">
                <button class="dlt-btn btn bg-slate-50 border-2 border-neutral-300 p-2 rounded-full"><i class="fa-regular fa-trash-can"></i></button>
            </div>`

            filteredSection.appendChild(newElement)
        }
    }

    //No jobs Available
    function defaultMode(){
        filteredSection.innerHTML=''
         let newElement = document.createElement('div')
         newElement.className='flex flex-col justify-center items-center text-center bg-white py-5'
         newElement.innerHTML = `
                <img src="jobs.png" alt="">
                <p class="text-2xl font-bold text-neutral">No Jobs Available</p>
                <p class="text-[12px] text-neutral/50">Check back soon for new job opportunities</p>
            `
            filteredSection.appendChild(newElement)
    }
