let total = document.querySelectorAll('.total')
let Interview = document.getElementById('Interview')
let Rejected = document.getElementById('Rejected')

const allBtn=document.getElementById('all-btn')
const interviewBtn=document.getElementById('interview-btn')
const rejectedBtn=document.getElementById('rejected-btn')
const filteredSection = document.getElementById('filtered-section')

// console.log(total)
    let allCardSection=document.getElementById('all-cards')
    let interview = [];
    let rejected = [];



function calculateCount(){
    let totalJobs = allCardSection.children.length;
    for(let items of total){
        items.innerText=totalJobs;
    }
    Interview.innerText = interview.length
    Rejected.innerText = rejected.length
}

calculateCount()

function toggle(id){
    // console.log('clicked')

    // removing blue bg for non-selecting button
    allBtn.classList.remove('bg-info')
    interviewBtn.classList.remove('bg-info')
    rejectedBtn.classList.remove('bg-info')

    // adding gray bg for non-selecting button
    allBtn.classList.add('bg-base-300')
    interviewBtn.classList.add('bg-base-300')
    rejectedBtn.classList.add('bg-base-300')

    // Adding blue bg for selected button
    const selected=document.getElementById(id)
    selected.classList.remove('bg-base-300')
    selected.classList.add('bg-info','text-neutral')
}

    const mainContainer=document.querySelector('main').addEventListener('click',function(event){
        if(event.target.classList.contains('interview-btn')){
            const parentNode=event.target.parentNode.parentNode
        const companyName=parentNode.querySelector('.company-name').innerText
        const post=parentNode.querySelector('.post').innerText
        const condition=parentNode.querySelector('.condition').innerText
        const status=parentNode.querySelector('.status').innerText
        const note=parentNode.querySelector('.note').innerText

        // console.log(parentNode,companyName,post,condition,status,note)
        const info = {
            companyName,
            post,
            condition,
            status,
            note
        }
        // console.log(info)
       const existense= interview.find(item=> item.post==info.post)
       parentNode.querySelector('.status').innerText='interview'
       if(!existense){
        interview.push(info)
       }
       console.log(interview)
       
    }
    renderSection()
    })

    function renderSection(){
        filteredSection.innerHTML = ''
        for(let item of interview){
            console.log(item)
            let newElement = document.createElement('div')
            newElement.className = 'flex justify-between  bg-white shadow-10 p-[24px] mb-[16px]'
            newElement.innerHTML = ` <div class=" space-y-[20px]">
                <div>
                <p class="company-name text-[16px] text-neutral font-bold">Mobile First Corp</p>
                <p  class=" post text-[12px] text-neutral/50">React Native Developer</p>
            </div>
            <div>
                <p class="condition text-[12px] text-neutral/50">Remote • Full-time • $130,000 - $175,000</p>
            </div>
            <div>
                <button class="status btn w-[110px] px-2">Not Applied</button>
            </div>
            <div class="note">
                <p class="text-[12px] text-neutral/50">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            </div>
            <div class="flex gap-[10px]">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
            </div>
            

            <div class="right-side">
                <buuton class="dlt-btn btn bg-slate-50 border-2 border-neutral-300 p-2 rounded-full"><i class="fa-regular fa-trash-can"></i></buuton>
            </div>`

            filteredSection.appendChild(newElement)
        }
    }
