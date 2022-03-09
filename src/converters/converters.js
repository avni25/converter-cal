

function calculateBuckComps(v_in, v_out, rippleRatio, freq, res, safety){

    var D = v_out /v_in;
    var lmin = (((1-D) * res) / (2*freq)) * safety;
    // console.log("lmin: "+lmin);
    var i = v_out / res;
    var delta_i_l = ((v_in - v_out) / lmin) * D * (1 / freq);
    // console.log("delta il: "+delta_i_l);

    var imax = i + (delta_i_l / 2);
    var imin = i - (delta_i_l / 2);

    var il_rms = Math.sqrt(Math.pow(i, 2) + Math.pow(((delta_i_l / 2) / Math.pow(3, 1/3)),2));
    // console.log("il rms: "+il_rms);
    var c = (1-D) / (8 * lmin * (rippleRatio) * Math.pow(freq, 2));
    // console.log("c: "+c);
    
    var arr = [];
    arr = arr.concat(lmin, c, il_rms, imax, imin, D);
    return arr;

}

function calculateBoostComps(v_in, v_out, rippleRatio, freq, res, safety){
    var D = 1-(v_in / v_out);
    var lmin = ((D * Math.pow(1-D, 2) * res) / (2*freq) ) * safety;
    var IL = v_in / (Math.pow(1-D, 2) * res);
    var delta_il = (v_in * D) / (lmin * freq);

    var c = D / (res * rippleRatio * freq);
    var arr = [];
    arr = arr.concat(lmin, c, IL, D);

    return arr;

}



export {calculateBuckComps, calculateBoostComps}