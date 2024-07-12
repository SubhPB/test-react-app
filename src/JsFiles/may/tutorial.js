// Byimaan

// lngest cmn subseq => rs

const p = console.log;
function lc72(st1='horse', st2='ros'){

    const max = (a, b) => a > b ? a : b;
    const getLrgestStr = (a, b) => a.length > b.length ? a : b;
    const lcs = (a=st1, b=st2, printLcs=false) => {
        const [l1, l2] = [a.length+1, b.length+1]
        M = Array(l1).fill(Array(l2).fill(0));

        const printM = () => {
            for(let i of M){
                p(i)
            }
        };
        for(let i = 1; i < l1; i++){
            for(let j =1; j <l2; j++){
                if (a[i-1] === b[j-1]) {
                    M[i][j] = 1 + M[i-1][j-1]
                } else {
                    M[i][j] = max(M[i-1][j], M[i][j-1])
                };
            }
        };

        const lcsLength = M[l1-1][l2-1]
        return lcsLength
    }
    const cmnSubseqLength = lcs(st1,st2,true);
    const noOfDeletation = st1.length - cmnSubseqLength;
    const noOfInsertations = st2.length - cmnSubseqLength;
    return noOfDeletation + noOfInsertations;
};


function findOverlap(M1, M2){

    const n = M1.length;
    const max = (a, b) => a > b ? a : b;

    let count = 0;
    let v1 = [0,0];
    let v2 = [0,0]
    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let temp = 0;

            for(let a = i; a < n; a++){
                for(let b = j; b < n; b++){
                    if (M1[a][b] == 1 && M2[a-i][b-j]){
                        temp++;
                    }
                };
                count = max(count, temp)
            }
        }
    }
}