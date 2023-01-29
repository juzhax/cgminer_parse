// let raw = `STATUS=S,When=1675008918,Code=11,Msg=Summary,Description=cgminer 4.9.0 rwglr|SUMMARY,Elapsed=2676,GHS 5s=0.00000,GHS av=20.79,Found Blocks=0,Getworks=267,Accepted=8,Rejected=3,Hardware Errors=0,Utility=0.18,Discarded=56,Stale=0,Get Failures=2,Local Work=209,Remote Failures=0,Network Blocks=24,Total MH=55644.0000,Work Utility=20572.61,Difficulty Accepted=524288.00000000,Difficulty Rejected=393216.00000000,Difficulty Stale=0.00000000,Best Share=2381976,Device Hardware%=0.0000,Device Rejected%=42.8571,Pool Rejected%=42.8571,Pool Stale%=0.0000,Last getwork=1675006334|
// STATUS=S,When=1675008918,Code=70,Msg=CGMiner stats,Description=cgminer 4.9.0 rwglr|CGMiner=4.9.0 rwglr,Miner=1.0.1.3,CompileTime=Fri Dec 3 15:16:01 UTC 2021,Type=Antminer L3+ Hiveon|STATS=0,ID=L30,Elapsed=2676,Calls=0,Wait=0.000000,Max=0.000000,Min=99999999.000000,GHS 5s=0.00000,GHS av=20.79,miner_count=4,frequency=375,fan_num=0,frequency1=375,frequency2=375,frequency3=375,frequency4=375,fan1=0,fan2=0,temp_num=4,temp1=51,temp2=55,temp3=55,temp4=55,temp2_1=56,temp2_2=60,temp2_3=62,temp2_4=62,temp31=0,temp32=0,temp33=0,temp34=0,temp4_1=0,temp4_2=0,temp4_3=0,temp4_4=0,temp_max=55,Device Hardware%=0.0000,no_matching_work=0,chain_acn1=72,chain_acn2=72,chain_acn3=72,chain_acn4=72,chain_acs1= xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx,chain_acs2= xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx,chain_acs3= xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx,chain_acs4= xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx,chain_hw1=0,chain_hw2=0,chain_hw3=0,chain_hw4=0,chain_rate1=0.00,chain_rate2=0.00,chain_rate3=0.00,chain_rate4=0.00,chain_power1=161.25,chain_power2=161.25,chain_power3=161.25,chain_power4=161.25,chain_power=645.00,voltage1=9.32,voltage2=9.32,voltage3=9.32,voltage4=9.32|
// STATUS=S,When=1675008918,Code=7,Msg=5 Pool(s),Description=cgminer 4.9.0 rwglr|POOL=0,URL=stratum+tcp://litecoinpool.org:3333,Status=Alive,Priority=0,Quota=1,Long Poll=N,Getworks=130,Accepted=8,Rejected=0,Discarded=56,Stale=0,Get Failures=0,Remote Failures=0,User=carboy12.212,Last Share Time=0:42:53,Diff=8.19K,Diff1 Shares=3343,Proxy Type=,Proxy=,Difficulty Accepted=524288.00000000,Difficulty Rejected=0.00000000,Difficulty Stale=0.00000000,Last Share Difficulty=65536.00000000,Has Stratum=true,Stratum Active=true,Stratum URL=litecoinpool.org,Has GBT=false,Best Share=2381976,Pool Rejected%=0.0000,Pool Stale%=0.0000|POOL=1,URL=stratum+tcp://us.litecoinpool.org:3333,Status=Alive,Priority=1,Quota=1,Long Poll=N,Getworks=1,Accepted=0,Rejected=0,Discarded=0,Stale=0,Get Failures=0,Remote Failures=0,User=carboy12.212,Last Share Time=0,Diff=,Diff1 Shares=0,Proxy Type=,Proxy=,Difficulty Accepted=0.00000000,Difficulty Rejected=0.00000000,Difficulty Stale=0.00000000,Last Share Difficulty=0.00000000,Has Stratum=true,Stratum Active=false,Stratum URL=,Has GBT=false,Best Share=0,Pool Rejected%=0.0000,Pool Stale%=0.0000|POOL=2,URL=stratum+tcp://us2.litecoinpool.org:3333,Status=Alive,Priority=2,Quota=1,Long Poll=N,Getworks=1,Accepted=0,Rejected=0,Discarded=0,Stale=0,Get Failures=0,Remote Failures=0,User=carboy12.212,Last Share Time=0,Diff=,Diff1 Shares=0,Proxy Type=,Proxy=,Difficulty Accepted=0.00000000,Difficulty Rejected=0.00000000,Difficulty Stale=0.00000000,Last Share Difficulty=0.00000000,Has Stratum=true,Stratum Active=false,Stratum URL=,Has GBT=false,Best Share=0,Pool Rejected%=0.0000,Pool Stale%=0.0000|POOL=3,URL=*,Status=Alive,Priority=999,Quota=1,Long Poll=N,Getworks=0,Accepted=0,Rejected=0,Discarded=0,Stale=0,Get Failures=0,Remote Failures=0,User=*,Last Share Time=0,Diff=,Diff1 Shares=0,Proxy Type=,Proxy=,Difficulty Accepted=0.00000000,Difficulty Rejected=0.00000000,Difficulty Stale=0.00000000,Last Share Difficulty=0.00000000,Has Stratum=true,Stratum Active=true,Stratum URL=*,Has GBT=false,Best Share=0,Pool Rejected%=0.0000,Pool Stale%=0.0000|POOL=4,URL=**,Status=Alive,Priority=1000,Quota=1,Long Poll=N,Getworks=135,Accepted=0,Rejected=3,Discarded=0,Stale=0,Get Failures=2,Remote Failures=0,User=*,Last Share Time=0,Diff=8.19K,Diff1 Shares=0,Proxy Type=,Proxy=,Difficulty Accepted=0.00000000,Difficulty Rejected=393216.00000000,Difficulty Stale=0.00000000,Last Share Difficulty=0.00000000,Has Stratum=true,Stratum Active=true,Stratum URL=**,Has GBT=false,Best Share=0,Pool Rejected%=100.0000,Pool Stale%=0.0000|`;


let raw = items[0].json.data;

let rows = raw.split('\n');
let datas = [];
rows.forEach(function(row) {
    let cols = row.split(',').reduce(function(obj, str, index) {
        let strParts = str.split("=");
        strParts[0] = strParts[0].replace('%', '');
        if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
          obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
        }
        return obj;
      }, {});    
    datas.push(cols);
});

// console.log(datas[0]);

let data = datas[0].GHSav;

return [{'data': data}];