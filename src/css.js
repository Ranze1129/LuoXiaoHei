const string = `/*
* 首先，先来一个背景
*/
#html{
    background:rgb(238,236,214);
}
/*
* 然后给罗小黑画个头
*/
.head{
    border: 5px solid #3c2724;
    width: 350px;
    height: 280px;
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -175px;
    border-radius: 43%;
    background: black;
}

/*
 * 接下来，画罗小黑的眼睛
 */
.eye{
    border: 5px solid #3c2724;
    width: 170px;
    height: 214px;
    position: absolute;
    left: 50%;
    top: 75px;
    margin-left: -85px;
    border-radius: 50%;
    background: white;
}
.eye.left{
    transform: translateX(-90px) rotate(5deg);
}
.eye.right{
    transform: translateX(90px) rotate(-5deg);
}
/*
 * 还有两颗眼珠子
 */
.eyeball{
    border: 5px solid #3c2724;
    width: 114px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 25px;
    margin-left: -57px;
    border-radius: 50%;
    background: black;
}
/*
 * 左眼在左边，右眼在右边（废话）
 */
.eyeball.left{
    transform: translateX(-3px) ;
}
.eyeball.right{
    transform: translateX(3px) ;
}
/*
 * 接下来，画罗小黑的嘴巴
 */
.mouth{
    position: relative;
    left: 50%;
    top: 280px;
    width: 0;
    height: 0;
    margin-left:-17px;
    border: 20px solid transparent;
    border-top: 33px solid #3c2724;
}

.lip{
    position: absolute;
    left: 50%;
    top: -30px;
    width: 0;
    height: 0;
    margin-left:-14px;
    border: 14px solid transparent;
    border-top: 24px solid #6cb2d3;
}
/*
 * 然后，画皮卡丘的耳朵
 */
.ear{
    border: 5px solid #3c2724;
    position: absolute;
    left: 50%;
    top: 35px;
    width:140px;
    height: 300px;
    margin-left: -70px;
    border-radius: 71px/150px;
    z-index: -1;
    background: black;
    overflow: hidden;
}
.ear.left{
    transform: translateX(-95px) rotate(160deg)
}
.ear.right{
    transform: translateX(95px) rotate(200deg)
}
/*
 * 还有里面的小耳朵
 */
.earInner{
    position: absolute;
    left:50%;
    width:140px;
    height: 300px;
    border-radius: 71px/150px;
    margin-left: -70px;
    top: 50px;
    background: #97aa5b;
}
.earInner.left{
    transform: translateX(112px) rotate(30deg)
}
.earInner.right{
    transform: translateX(-112px) rotate(330deg)
}
/*
 * 接着画罗小黑的手
 */
.hand{
    border: 5px solid #3c2724;
    position: absolute;
    left: 50%;
    top: 300px;
    width:60px;
    height: 40px;
    border-radius: 261px/161px;
    margin-left: -30px;
    background: black;
}
.hand.left{
    transform: translateX(-61px);
}
.hand.right{
    transform: translateX(61px);
}
/*
 * 最后，让皮卡丘动一下吧
 */

.hand.left{
    animation:  moveLeft  infinite 1s ;
}
.hand.right{
    animation:  moveRight  infinite 1s ;
}
.ear.left{
    animation:  leftWave  infinite 1s ;
}
.ear.right{
    animation:  rightWave  infinite 1s ;
}
`
export default string;