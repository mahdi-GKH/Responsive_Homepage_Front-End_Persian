const comments = [
    {
        name : 'علی',
        comment : `
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        `
    },
    {
        name : 'مهدی',
        comment : `
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون 
        `
    },
    {
        name : 'سارا',
        comment : `
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه 
        `
    }
]
var comment_number = 0;





const bar_icon = document.getElementById('bar');

const close_btn = document.getElementById('closeBTN');

const next_slider_btn = document.getElementById('next');
const previous_slider_btn = document.getElementById('previous');
const user_comment = document.getElementById('user_comment');
const user_name = document.getElementById('user_name');
const dots = document.getElementsByClassName('dot');

function change_avtive_dot(){
    for(let i = 0;i<3;i++){
        
        dots[i].classList.remove("active_dot");
    }
    dots[comment_number].classList.add("active_dot");

}

bar_icon.addEventListener('click',function(){
    document.getElementById('menu').classList.remove('d-none');
});
close_btn.addEventListener('click',function(){
    document.getElementById('menu').classList.add('d-none');
})



next_slider_btn.addEventListener('click',function (){
    if(comment_number != 2){
        comment_number++;
        user_comment.innerText = comments[comment_number].comment;
        user_name.innerText = comments[comment_number].name;
        change_avtive_dot();
    }
    
})
previous_slider_btn.addEventListener('click',function (){
    if(comment_number != 0){
        comment_number--;
        user_comment.innerText = comments[comment_number].comment;
        user_name.innerText = comments[comment_number].name;
        change_avtive_dot();
    }
    
})
