<template>
    <div>
        <Nav />
        <div class="slideshowBox">
            <div class="slideText">
                <div class="title">Hello,</div>
                <div class="text">
                    這是一個校園心理健康服務的平台，<br>
                    在這裡你可以體驗到......
                    
                </div>

            </div>
            <img  src="@/yo_0603/register_slide_img1.svg">
        </div>
        <div class="title1">Sign up</div>
        <div class="inputBox">
        <input type="text" name="inputName" placeholder="請輸入姓名" >
        <input type="text" name="inputID" placeholder="請輸入學號" >
        <input type="password" name="inputPassword" placeholder="請輸入密碼" >
        <button @click="btn_join">現在加入</button>
        <div id="reg_output"></div>
        </div>
    </div>
    
</template>
<style scoped>
#reg_output{
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-top:10px;
    font-style: normal;
    color: #fa8181;
    font-weight: normal;
    font-size: 13px;
}
input:focus{
    outline: none;
}
button{
    height: 43px;     
    width: 284px;
    left: 46px;
    top: 696px;

    background: #20E2D7;
    box-shadow: 0px 4px 17px -1px rgba(107, 182, 177, 0.51);
    border-radius: 33px;
    border: none;

    font-family: Taipei Sans TC Beta;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    text-align: center;

    color: #FFFFFF;
    margin-top: 15px;
}
.inputBox{
    text-align: center;
}
input{
    
    width: 283px;
    height: 42px;
    left: 0px;
    top: 0px;

    
    border-radius: 33px;
    border: 1px solid;

    
    /*使用 border-image 最大的問題在於，設置的 border-radius 會失效。 */
    background:
    linear-gradient(136.56deg, #FFFFFF -16.84%, #FFFFFF 102.5%) padding-box, /*this is your grey background*/
    linear-gradient(180deg, #96FBC4 33.15%, #20E2D7 127.81%) border-box;

    border: 1px solid transparent;
    border-radius: 33px;
    display:inline-block;

    margin:5px;


}
.title1{
    font-weight: 600;
    font-size: 30px;  
    font-style: normal;
    color: #1E1E1E;
    text-align: center;
    padding:10px;
}
.slideText{
    text-align: left;
    padding-left: 40px;
    padding-right: 40px;
    padding-top:30px;
    font-style: normal;
    color: #1E1E1E;
}
.slideText .title{
    font-weight: 600;
    font-size: 30px;  
}
.slideText .text{
    font-weight: normal;
    font-size: 13px;
    
}
img{
    padding-top: 20px;
    margin: 0 auto;
    display:block;
    
}
.slideshowBox{
    width: 375px;
    height: 294px;

    background: linear-gradient(180deg, rgba(150, 251, 196, 0.6) 33.15%, rgba(32, 226, 215, 0.6) 127.81%);

}
</style>
<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Register',
    components:{
        Nav,
    },
    methods: {
        btn_join() {
            //console.log("press btn join")
            if($('input[name=inputName]').val()=="")
            {
                $('#reg_output').html("請填入姓名") 
            }
            else if($('input[name=inputID').val()=="")
            {
                $('#reg_output').html("請填入學號") 
            }
            else if($('input[name=inputPassword').val()=="")
            {
                $('#reg_output').html("請填入密碼") 
            }
            else{
                this.$http
                .post("/api/register", {
                    name : $('input[name=inputName]').val(),
                    ID : $('input[name=inputID]').val(),
                    password : $('input[name=inputPassword]').val(),
                
                })
                .then((res) => {
                    if(res.body.indexOf('success')!=-1) //註冊結果成功
                    {
                        console.log("註冊成功")
                        this.$router.push({
                        name: 'home', 
                        
                        });
                    }
                    else{
                        console.log("此學號已有人註冊")
                        $('#reg_output').html("此學號已有人註冊") 
                    }
                    
                });
            }
            
        
        }
    }
}
</script>