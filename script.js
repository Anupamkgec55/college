
let curr_para = 1;

function showPara(num) {
let selPara = document.getElementById('paragraph' + num);
let curr_disPara = document.getElementById('paragraph' + curr_para);

curr_disPara.classList.add('hidden');
selPara.classList.remove('hidden');
curr_para = num;
}
